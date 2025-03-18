pc.script.attribute('jumpSpeed','number',1);
pc.script.attribute('gravity','number',3);
pc.script.attribute('movingSpeed','number',0.5);
pc.script.attribute('isSmall','boolean');
pc.script.attribute('smallSlime','entity');
pc.script.create('Slime', function (app) {
    // Creates a new Slime instance
    var Slime = function (entity) {
        this.entity = entity;
    };

    Slime.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.slime = this.entity.getChildren()[0];
            this.player = app.root.findByName('Robot');
            if(this.player){
                this.playerScript = this.player.getParent().script.PlayerControls;
            }
            this.rot = new pc.Quat();
            this.lastRotation = new pc.Quat();
            this.timeToMove = 1;
            this.ranDir = new pc.Quat();
            this.yVel = 0;
            this.moveDelta = 0;
            this.dmgTrigger = this.entity.findByName('DamageTrigger');
            this.dmgTrigger.collision.on('triggerenter', this.onTriggerEnter, this);
            this.dmgTrigger.collision.on('triggerleave', this.onTriggerLeave, this);
            this.playerInside = false;
            this.dmgTimer = 0;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(this.move){
                this.moveDelta = pc.math.clamp(this.moveDelta + dt *this.movingSpeed,0,1);
                this.entity.setRotation(this.rot.slerp(this.lastRotation,this.ranDir,this.moveDelta));
                this.yVel -= this.gravity * dt;
                this.slime.translateLocal(0,this.yVel,0);
                if(this.slime.getLocalPosition().y <= 18.75){
                    this.slime.setLocalPosition(0,18.75,0);
                    this.move = false;
                    this.slime.animation.play('SlimeLand');
                    setTimeout(function(){
                        this.slime.animation.play('SlimeIdle');
                        this.slime.animation.loop = true;
                    }.bind(this),333);
                }
            }else{
                if(app.gameOver){
                    return;
                }
                this.timeToMove-=dt;
                if(this.timeToMove<=0){
                    this.move = true;
                    this.setDir();
                }
                if(this.playerInside){
                    this.dmgTimer +=dt;
                    if(this.dmgTimer>=1){
                        this.dmgTimer = 0;
                        this.playerScript.damage(1);
                    }
                }
            }
        },
        
        damage: function(val){
            this.health -= val;
            if(this.health <= 0){
                pFx.slimeExplosion.setPosition(this.slime.getPosition());
                pFx.slimeExplosion.particlesystem.reset();
                pFx.slimeExplosion.particlesystem.play();
                app.fire('game:addscore',12);
                app.fire('playSound','SlimeDeath');
                
                if(!this.isSmall){
                    if(pc.math.random(0,100)<10 && this.playerScript.health<6){
                        var h = app.root.findByName('HealthPool').script.EntityPool.getObject();
                        h.setRotation(this.entity.getRotation());
                        h.enabled = true;
                    }
                    var b;
                    var amm = 2;
                    while(amm>0){
                        amm--;
                        b = this.smallSlime.script.EntityPool.getObject();
                        b.setRotation(this.entity.getRotation().clone());
                        b.enabled = true; 
                    }
                }
                
                this.entity.pool.returnToPool(this.entity);
                app.fire('game:enemykill');
            }
            else{
                app.fire('game:addscore',4);
                app.fire('playSound','HurtEnemy');
            }
        },
        
        setDir: function(val){
            this.timeToMove = pc.math.random(2,5);
            if(!this.player){
                this.move = false;
                return;
            }
            this.ranDir = this.player.getRotation().clone();
            this.lastRotation = this.entity.getRotation().clone();
            this.yVel = this.jumpSpeed;
            this.moveDelta =0;
            this.slime.animation.play('SlimeJump');
            this.slime.animation.loop = false;
        },
        
        onEnable: function(){
            this.timeToMove = 1;
            this.move = false;
            this.playerInside = false;
            if(this.isSmall){
                this.health = 4;
                this.move = true;
                this.yVel = 0.25;
                this.lastRotation = this.entity.getRotation().clone();
                this.slime.animation.play('SlimeJump');
                this.slime.animation.loop = false;
                this.ranDir = this.entity.getRotation().clone().mul(new pc.Quat().setFromEulerAngles(pc.math.random(-20,20),pc.math.random(-20,20),pc.math.random(-20,20)));
            }else{
                this.health = 7;
                this.moveDelta =0;
                this.yVel = 0;
                this.slime.animation.loop = true;
            }
        },
        
        onTriggerEnter: function(entity){
            if(entity.getName()=== 'PlayerCollider'){
                this.playerInside = true;
                this.dmgTimer = 0.6;
            }
        },
        
        onTriggerLeave: function(entity){
            if(entity.getName()=== 'PlayerCollider'){
                this.playerInside = false;
                this.dmgTimer = 0;
            }
        }
    };

    return Slime;
});
pc.script.attribute('bullet','entity');
pc.script.create('UFO', function (app) {
    // Creates a new UFO instance
    var UFO = function (entity) {
        this.entity = entity;
        this.shootTime = pc.math.random(3,10);
    };

    UFO.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.health = 4;
            this.ship = this.entity.getChildren()[0];
            this.shootDir = this.entity.getChildren()[1];
            this.player = app.root.findByName('Robot');
            if(this.player){
                this.playerScript = this.player.getParent().script.PlayerControls;
            }
            this.rot = new pc.Quat();
            this.timeToMove = 1;
            this.ranDir = new pc.Quat();
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(app.gameOver){
                return;
            }
            if(this.move){
                this.entity.setRotation(this.rot.slerp(this.entity.getRotation(),this.ranDir,0.5 * dt));
            }
            
            this.shootTime-=dt;
            if(this.shootTime<=0){
                this.shoot();
            }
            this.timeToMove-=dt;
            if(this.timeToMove<=0){
                this.move = true;
                this.setDir();
            }
        },
        
        shoot: function(){
            this.shootTime = pc.math.random(3,8);
            
            if(!this.player){
                return;
            }
            this.shootDir.lookAt(this.player.getPosition(),this.entity.up);
            var ang = this.shootDir.getLocalEulerAngles().clone();
            if(ang.x<0){
                this.shootDir.setLocalEulerAngles(0,ang.y+180,0);
            }
            else{
                this.shootDir.setLocalEulerAngles(0,(180-ang.y)+180,0);
            }
                        
            var b = this.bullet.script.EntityPool.getObject();
            b.script.Bullet.isBad = true;
            b.setLocalPosition(0,0,0);
            b.setLocalRotation(this.entity.getRotation().mul(this.shootDir.getLocalRotation()));
            b.enabled = true;
            b.script.Bullet.span = 9;
        },
        
        damage: function(val){
            this.health -= val;
            if(this.health <= 0){
                pFx.redExplosion.setPosition(this.ship.getPosition());
                pFx.redExplosion.particlesystem.reset();
                pFx.redExplosion.particlesystem.play();
                app.fire('game:addscore',10);
                if(pc.math.random(0,100)<10 && this.playerScript.health<9){
                    var h = app.root.findByName('HealthPool').script.EntityPool.getObject();
                    h.setRotation(this.entity.getRotation());
                    h.enabled = true;
                }
                app.fire('playSound','EnemyExplosion');
                this.entity.pool.returnToPool(this.entity);
                app.fire('game:enemykill');
            }
            else{
                app.fire('game:addscore',3);
                app.fire('playSound','HurtEnemy');
            }
        },
        
        setDir: function(val){
            this.timeToMove = pc.math.random(2,5);
            if(!this.player){
                this.move = false;
                return;
            }
            this.ranDir = this.player.getRotation().clone().mul(new pc.Quat().setFromEulerAngles(pc.math.random(-45,45),pc.math.random(-45,45),pc.math.random(-45,45)));
        },
        
        onEnable: function(){
            this.health = 4;
            this.timeToMove = 1;
            this.move = false;
            this.shootTime = pc.math.random(3,10);

        }
    };

    return UFO;
});
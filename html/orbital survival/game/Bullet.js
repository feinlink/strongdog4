pc.script.attribute('speed','number',100);
pc.script.create('Bullet', function (app) {
    // Creates a new Bullet instance
    var Bullet = function (entity) {
        this.entity = entity;
        this.timer = 0;
        this.canCollide = true;
        this.span = 9;
    };

    Bullet.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.bullet = this.entity.getChildren()[0];
            this.parti = this.bullet.findByName('Partic');
            this.bullet.collision.on('triggerenter', this.onTriggerEnter, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.entity.rotateLocal(this.speed*dt,0,0);
            
            this.timer += dt;
            if(this.timer >= this.span){
                if(!this.isBad){
                    pFx.blueDisappear.setPosition(this.bullet.getPosition());
                    pFx.blueDisappear.particlesystem.reset();
                    pFx.blueDisappear.particlesystem.play();
                    this.remove();
                }else{
                    pFx.redDisappear.setPosition(this.bullet.getPosition());
                    pFx.redDisappear.particlesystem.reset();
                    pFx.redDisappear.particlesystem.play();
                    this.remove();
                }
            }
        },
        
        onTriggerEnter: function(entity){
            if(!this.isBad){
                pFx.blueImpact.setPosition(this.bullet.getPosition());
                pFx.blueImpact.particlesystem.reset();
                pFx.blueImpact.particlesystem.play();
            }
            
            if(entity.getName()=== 'PlayerCollider'){
                entity.getParent().getParent().script.PlayerControls.damage(1);
                if(this.isBad){
                    pFx.redImpact.setPosition(this.bullet.getPosition());
                    pFx.redImpact.particlesystem.reset();
                    pFx.redImpact.particlesystem.play();
                }
                this.remove();
                
            }
            else if(entity.getName() === 'UFO' && !this.isBad){
                entity.getParent().script.UFO.damage(1);
                this.remove();
            }
            else if(entity.getName() === 'MultyShooter' && !this.isBad){
                entity.getParent().script.MultyShooter.damage(1);
                this.remove();
            }
            else if(entity.getName() === 'Slime' && !this.isBad){
                entity.getParent().script.Slime.damage(1);
                this.remove();
            }
        },
        
        remove: function(){
            this.entity.pool.returnToPool(this.entity);
        },
        
        onEnable: function(){
            this.timer=0;
            if(this.parti.particlesystem){
                this.parti.particlesystem.reset();
            }
        }
    };

    return Bullet;
});
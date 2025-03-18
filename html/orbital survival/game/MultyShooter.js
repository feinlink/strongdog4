pc.script.attribute('bullet','entity');
pc.script.create('MultyShooter', function (app) {
    // Creates a new MultyShooter instance
    var MultyShooter = function (entity) {
        this.entity = entity;
    };

    MultyShooter.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.modelo = this.entity.getChildren()[0];
            this.playerScript = app.root.findByName('PlayerAxis').script.PlayerControls;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(app.gameOver){
                return;
            }
            this.shootTime-=dt;
            if(this.shootTime<=0){
                this.shoot();
            }
        },
        
        shoot: function(){
            this.shootTime = pc.math.random(4,7);
            
            var ammount = 8;
            var b;
            var angle = 0;
            
            while (ammount >0){
                ammount--;
                b = this.bullet.script.EntityPool.getObject();
                b.script.Bullet.isBad = true;
                b.setLocalRotation(this.entity.getRotation());
                b.rotateLocal(0,angle,0);
                b.enabled = true;
                angle += 45;
                b.script.Bullet.span = 3.6;
            }
                        
            this.modelo.animation.play('MultyShooter');
        },
        
        damage: function(val){
            this.health -= val;
            if(this.health <= 0){
                pFx.redExplosion.setPosition(this.modelo.getPosition());
                pFx.redExplosion.particlesystem.reset();
                pFx.redExplosion.particlesystem.play();
                app.fire('game:addscore',20);
                if(pc.math.random(0,100)<7 && this.playerScript.health<9){
                    var h = app.root.findByName('HealthPool').script.EntityPool.getObject();
                    h.setRotation(this.entity.getRotation());
                    h.enabled = true;
                }
                app.fire('playSound','EnemyExplosion');
                this.entity.pool.returnToPool(this.entity);
                app.fire('game:enemykill');
            }
            else{
                app.fire('game:addscore',4);
                app.fire('playSound','HurtEnemy');
            }
        },
        
        onEnable: function(){
            this.health = 7;
            this.shootTime = pc.math.random(3.5,6);
        }
    };

    return MultyShooter;
});
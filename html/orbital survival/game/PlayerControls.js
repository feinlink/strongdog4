pc.script.attribute('speed','number',40);
pc.script.attribute('bullet','entity');
pc.script.attribute('planet','entity');
pc.script.attribute('touchInput','entity');
pc.script.attribute('healthBar','entity');
pc.script.attribute('pointsText','entity');

pc.script.create('PlayerControls', function (app) {
    // Creates a new PlayerControls instance
    var PlayerControls = function (entity) {
        this.entity = entity;
        this.modelo = entity.getChildren()[0];
        navigator.vibrate = (navigator.vibrate ||
                         navigator.webkitVibrate ||
                         navigator.mozVibrate ||
                         navigator.msVibrate);
    };

    PlayerControls.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            var children = this.modelo.getChildren();
            this.walkParticles = children[0].particlesystem;
            this.shootParticles = children[1];
            this.muzzleLight = children[2];
            this.timeToIdle=0;
            this.dire = new pc.Vec2(0,0);
            this.health = 10;
            this.points = 0;
            app.gameOver = false;
            
            this.initRot = this.entity.getRotation().clone();
            
            this.healParticles = this.entity.findByName('HealParticle').particlesystem;
            
            app.on('game:getready', function () {
                this.health=10;
                this.setBar(this.health);
                this.entity.setRotation(this.initRot);
                this.entity.enabled=true;
                this.modelo.setLocalEulerAngles(0,0,0);
                app.gameOver = false;
                this.modelo.animation.play('robotIdle');
            }, this);
            
            app.on('game:heal', function () {
                this.health += 3;
                this.health = pc.math.clamp(this.health,0,10);
                this.setBar(this.health);
                this.healParticles.reset();
                this.healParticles.play();
                app.fire('playSound','Heal');
            }, this);
            
            setTimeout(function(){ this.muzzleLight.light.enabled=false; }.bind(this), 200);
            
            this.ac = app.scene.root;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(this.touchInput.script.TouchAnalog.dire.length() > 0.1){
                this.dire.set(this.touchInput.script.TouchAnalog.dire.x,this.touchInput.script.TouchAnalog.dire.y);
            }else if(this.ac.script.AirConsoleTest.dire.length() > 0.1){
                this.dire.set(this.ac.script.AirConsoleTest.dire.x,this.ac.script.AirConsoleTest.dire.y);
            }            
            else{
                if(app.keyboard.isPressed(pc.KEY_LEFT) || app.keyboard.isPressed(pc.KEY_A)){
                    this.dire.x -= 1;
                }
                if(app.keyboard.isPressed(pc.KEY_RIGHT) || app.keyboard.isPressed(pc.KEY_D)){
                    this.dire.x += 1;
                }
                if(app.keyboard.isPressed(pc.KEY_UP) || app.keyboard.isPressed(pc.KEY_W)){
                    this.dire.y -= 1;            
                }
                if(app.keyboard.isPressed(pc.KEY_DOWN) || app.keyboard.isPressed(pc.KEY_S)){
                    this.dire.y += 1;
                }
            }
            if(app.keyboard.wasPressed(pc.KEY_SPACE) || app.keyboard.wasPressed(pc.KEY_M)){
                this.shoot(app.extraShots);
            }
            if(this.dire.length()>0){
                this.dire.normalize();
            }
            
            this.entity.rotateLocal(this.dire.y * this.speed * dt,0,this.dire.x * -this.speed * dt);
            
            if(this.dire.x !== 0 || this.dire.y !== 0){
                this.lookForward(dt);
            }
            else{
                this.walkParticles.stop();
            }
            
            if(this.timeToIdle>0){
                this.timeToIdle-=dt;
                if(this.timeToIdle<=0){
                    this.modelo.animation.play('robotIdle',0.1);
                    this.modelo.animation.loop=true;
                }
            }
            this.dire.set(0,0);
        },
        
        lookForward: function(dt){
            var angle = Math.atan(this.dire.x/this.dire.y) * (180 / Math.PI);
            if(this.dire.y < 0){
                angle += 180;
            }
            else if(this.dire.x < 0){
                angle += 360;
            }
            this.modelo.setLocalRotation(new pc.Quat().slerp(this.modelo.getLocalRotation(), new pc.Quat().setFromEulerAngles(0,angle,0),10*dt));
            
            this.walkParticles.play();
        },
        
        shoot: function(extra){
			if(app.gameOver){
				return;
			}
            app.fire('playSound','Shoot');
            this.spawnBullet(0);
            var ang = 15;
            while(extra>0){
                extra--;
                this.spawnBullet(ang);
                this.spawnBullet(-ang);
                ang += 15;
            }
            
            
            
            this.modelo.animation.play('robotShoot',0.03);
            this.modelo.animation.loop=false;
            this.timeToIdle = 1.8;
            this.shootParticles.animation.play('muzzleFlash');
            this.muzzleLight.light.enabled = true;
            setTimeout(function(){ this.muzzleLight.light.enabled=false; }.bind(this), 20);
        },
        
        spawnBullet: function(angle){
            var b = this.bullet.script.EntityPool.getObject();
            setTimeout(function(){
                b.setLocalRotation(this.entity.getRotation().mul(this.modelo.getLocalRotation()));
                b.rotateLocal(8,angle,2);
                b.enabled = true;
            }.bind(this),0);
        },
        
        damage: function(val){
            app.fire('game:shake');
            this.health -= val;
            if(this.health <= 0){
                this.healthBar.model.model.meshInstances[0].material.alphaTest = 1;
                pFx.blueExplosion.getParent().setRotation(this.entity.getRotation());
                pFx.blueExplosion.particlesystem.reset();
                pFx.blueExplosion.particlesystem.play();
                app.gameOver = true;
                this.entity.enabled = false;
                if(app.usingAirConsole){
                    app.airconsole.message(
                        app.airconsole.convertPlayerNumberToDeviceId(0),
                        { vibrate: 1000}
                    );
					
					setTimeout(function(){app.airconsole.message(
                        app.airconsole.convertPlayerNumberToDeviceId(0),
                        { gameOver: true});
						},1000
					);
                }
                else{
                    navigator.vibrate(1000);
                }
                app.fire('game:gameover');
            }
            else{
                app.fire('playSound','Hurt');
                this.setBar(this.health);
                if(app.usingAirConsole){
                    app.airconsole.message(
                        app.airconsole.convertPlayerNumberToDeviceId(0),
                        { vibrate: 300 }
                    );
                }
                else{
                    navigator.vibrate(300);
                }
            }
        },
        
        setBar: function(val){
            if(1-val/10 <=0){
                this.healthBar.model.model.meshInstances[0].material.alphaTest = 0.001;
            }else{
                this.healthBar.model.model.meshInstances[0].material.alphaTest = 1 - val / 10;
            }
        }
    };

    return PlayerControls;
});
pc.script.attribute('ammount','number');
pc.script.attribute('duration','number');
pc.script.create('screenShake', function (app) {
    // Creates a new ScreenShake instance
    var ScreenShake = function (entity) {
        this.entity = entity;
    };

    ScreenShake.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.initPos = this.entity.getLocalPosition().clone();
            this.recover = false;
            this.lasPos = new pc.Vec3();
            this.acPos = new pc.Vec3();
            this.time = 0;
            app.on('game:shake', function () {
                this.entity.setLocalPosition(this.initPos.x + pc.math.random(-this.ammount,this.ammount),this.initPos.y + pc.math.random(-this.ammount,this.ammount),this.initPos.z + pc.math.random(-this.ammount,this.ammount));
                this.lasPos.copy(this.entity.getLocalPosition());
                this.recover = true;
                this.time = 0;
            }, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(!this.recover){
                return;
            }
            this.time = pc.math.clamp(this.time+dt,0,this.duration);
            
            var a = pc.math.lerp(0,1,this.time/this.duration);
            
            this.acPos.lerp(this.lasPos,this.initPos,a);
            
            this.entity.setLocalPosition(this.acPos);
            if(this.time===this.duration){
                this.recover = false;
            }
        }
    };

    return ScreenShake;
});
pc.script.attribute('rotationObj','entity');
pc.script.attribute('lerpAmmount','number');
pc.script.attribute('threshold','number');
pc.script.create('CameraRotation', function (app) {
    // Creates a new CameraRotation instance
    var CameraRotation = function (entity) {
        this.entity = entity;
    };

    CameraRotation.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () { 
            this.initRot = this.entity.getRotation().clone();
            app.on('game:getready', function (ammount) {
                this.entity.setRotation(this.initRot);
            }, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(Math.acos(this.entity.up.dot(this.rotationObj.up))>this.threshold){
                this.entity.setRotation(new pc.Quat().slerp(this.entity.getRotation(),this.rotationObj.getRotation(),this.lerpAmmount*dt));
            }
            if(app.gameOver){
                this.entity.rotateLocal(0,10*dt,0);
            }
        }
    };

    return CameraRotation;
});
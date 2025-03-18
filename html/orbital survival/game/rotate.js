pc.script.attribute('x','number');
pc.script.attribute('y','number');
pc.script.attribute('z','number');
pc.script.create('rotate', function (app) {
    // Creates a new Rotate instance
    var Rotate = function (entity) {
        this.entity = entity;
    };

    Rotate.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            this.entity.rotateLocal(this.x*dt, this.y*dt, this.z*dt);
        }
    };

    return Rotate;
});
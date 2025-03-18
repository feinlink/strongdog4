pc.script.attribute('amplitudeScale', 'number', 1);
pc.script.attribute('frequencyScale', 'number', 1);

pc.script.create('sine', function (app) {
    // Creates a new Sine instance
    var Sine = function (entity) {
        this.entity = entity;
        this.timer = 0;
    };

    Sine.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.initY = this.entity.getLocalPosition().clone().y;
            this.initZ = this.entity.getLocalPosition().clone().z;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            dt *= this.frequencyScale;
            this.timer += dt;
            this.entity.setLocalPosition(0,this.initY + Math.sin(this.timer) * this.amplitudeScale, this.initZ);
        }
    };

    return Sine;
});
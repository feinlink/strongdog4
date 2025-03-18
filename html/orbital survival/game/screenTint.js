pc.script.create('screenTint', function (app) {

    var ScreenTint = function (entity) {
        this.entity = entity;
        this.startVal = -1;
        this.val = -1;
        this.toVal = 1;
        this.transitioning = true;
        this.duration = 1;
        this.timer = 0;
    };

    ScreenTint.prototype = {
        transition: function (value, duration) {
            this.startVal=this.val;
            this.toVal = value;
            this.timer = 0;
            this.duration = duration;
            this.transitioning = true;
        },
        
        update: function (dt) {
            
            
            if (this.transitioning) {
                this.timer = pc.math.clamp(this.timer + dt, 0, this.duration);

                this.val = pc.math.lerp(this.startVal, this.toVal, this.timer / this.duration);

                if (this.timer == this.duration) {
                    this.transitioning = false;
                }
            }

            if(this.val >=0){
                this.entity.model.model.meshInstances[0].material.alphaTest = this.val;
            }
        }
    };

    return ScreenTint;
});
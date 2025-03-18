pc.script.create('PopUpAnim', function (app) {
    // Creates a new PopUpAnim instance
    var PopUpAnim = function (entity) {
        this.entity = entity;
        this.finalSize = this.entity.getLocalScale().clone();
    };

    PopUpAnim.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.time = 0;
            this.smalSize = new pc.Vec3(0.1,0.85,1);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(this.time < 0.13){
                var a = pc.math.clamp(this.time += dt,0,0.13);

                this.entity.setLocalScale(new pc.Vec3().lerp(this.smalSize, this.finalSize,a/0.13));
            }
        },
        
        onEnable: function(){
            this.entity.setLocalScale(0.1,0.85,1);
            this.time = 0;
        }
    };

    return PopUpAnim;
});
pc.script.create('UFOSpawnAnim', function (app) {
    // Creates a new UFOSpawnAnim instance
    var UFOSpawnAnim = function (entity) {
        this.entity = entity;
    };

    UFOSpawnAnim.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.time = 0;
            this.smalSize = new pc.Vec3(0.1,0.1,0.1);
            this.startPos = new pc.Vec3(0,50,0);
            this.finalPos = new pc.Vec3(0,22,0);
        },

        update: function (dt) {
            if(this.time < 0.7){
                var a = pc.math.clamp(this.time += dt,0,0.7);

                this.entity.setLocalScale(new pc.Vec3().lerp(this.smalSize, pc.Vec3.ONE,a/0.7));
                this.entity.setLocalPosition(new pc.Vec3().lerp(this.startPos, this.finalPos,a/0.7));
                if(a==0.7){
                    if(this.entity.script.sine){
                        this.entity.script.sine.time = 0;
                        this.entity.script.sine.enabled = true;
                        this.entity.script.sine.initY = this.finalPos.y;
                    }
                }
            }
            
        },
        
        onEnable: function(){
            if(this.entity.script.sine){
                this.entity.script.sine.enabled = false;
            }
            this.entity.setLocalPosition(0,50,0);
            this.entity.setLocalScale(0.1,0.1,0.1);
            this.time = 0;
        }
    };

    return UFOSpawnAnim;
});
pc.script.attribute('xPos','number',0);
pc.script.attribute('yPos','number',0);
pc.script.create('ScreenPosition', function (app) {
    // Creates a new ScreenPosition instance
    var ScreenPosition = function (entity) {
        this.entity = entity;
        this.framePassed = false;
        this.hasToMove = true;
    };

    ScreenPosition.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            window.addEventListener("resize", function(){this.framePassed = false;this.hasToMove = true;}.bind(this));
        },
        
        setPos: function (){
            var pos = new pc.Vec3();
            app.root.findByName('CameraUI').camera.screenToWorld(this.xPos* app.graphicsDevice.width,this.yPos * app.graphicsDevice.height,this.entity.getParent().getPosition().z,pos);
            this.entity.setPosition(pos.x,pos.y,this.entity.getPosition().z);
        },
        
        update: function(){
            if(!this.hasToMove){
                return;
            }
            if(!this.framePassed){
                this.framePassed = true;
                return;
            }
            this.hasToMove = false;
            this.setPos();
        }
    };

    return ScreenPosition;
});
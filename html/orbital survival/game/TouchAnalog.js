pc.script.attribute('analogCircle','entity');
pc.script.attribute('cam','entity');
pc.script.create('TouchAnalog', function (app) {
    // Creates a new TouchAnalog instance
    var TouchAnalog = function (entity) {
        this.entity = entity;
        this.touchingId = -1;
        
        this.dire = new pc.Vec2(0,0);
    };

    TouchAnalog.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            if(app.touch) {
                app.touch.on("touchstart", this._onTouchStart, this);
                app.touch.on("touchend", this._onTouchEnd, this);
                app.touch.on("touchmove", this._onTouchMove, this);
            }
            
            this.camPos = this.cam.getPosition();
            this.pos = new pc.Vec3();
            this.cirZ = this.analogCircle.getPosition().z;            
        },

        _onTouchStart: function (e){
            if(this.touchingId != -1){
                return;
            }
            for(i = 0; i < e.changedTouches.length;i++){
                this.checkTap(e.changedTouches[i].x,e.changedTouches[i].y,e.changedTouches[i].id);
            }
            e.event.preventDefault();
        },
        
        _onTouchEnd: function (e){
            if(this.touchingId == -1){
                return;
            }
            for(i = 0; i < e.changedTouches.length;i++){
                if(e.changedTouches[i].id == this.touchingId){
                    this.analogCircle.setLocalPosition(0,0.1,0);
                    this.dire.set(0,0);
                    this.touchingId = -1;
                }
            }
            e.event.preventDefault();
        },
        
        _onTouchMove: function (e){
            if(this.touchingId == -1){
                return;
            }
            for(i = 0; i < e.changedTouches.length;i++){
                if(e.changedTouches[i].id == this.touchingId){
                    this.cam.camera.screenToWorld(e.changedTouches[i].x,e.changedTouches[i].y,this.camPos.z,this.pos);
                    this.setAnalogPos();
                }
            }
            e.event.preventDefault();
        },
        
        checkTap: function(x,y,id){
            this.cam.camera.screenToWorld(x,y,this.camPos.z,this.pos);
            var p = this.entity.getPosition();
            var dx = (p.x - this.pos.x);
            var dy = (p.y - this.pos.y);
            
            var lenSqr = dx*dx + dy*dy;
            
            if (lenSqr < 16) {
                this.setAnalogPos();
                this.touchingId = id;
            }
        },
        
        setAnalogPos: function(){
            this.analogCircle.setPosition(this.pos.x,this.pos.y,this.cirZ);
            var l = this.analogCircle.getLocalPosition();
            this.dire.set(l.x,l.z);
            if(this.dire.length() > 0.3){
                this.dire.normalize();
                this.dire.scale(0.3);
                this.analogCircle.setLocalPosition(this.dire.x, l.y, this.dire.y);
            }
        }
    };

    return TouchAnalog;
});
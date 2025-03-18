pc.script.attribute('player','entity');

pc.script.create('TapToFire', function (app) {
    // Creates a new TapToFire instance
    var TapToFire = function (entity) {
        this.entity = entity;
    };

    TapToFire.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            if(app.touch){
                app.touch.on("touchstart", this._onTouchStart, this);
            }
            else{
                this.entity.enabled = false;
            }
        },

        _onTouchStart: function (e){
            for(i = 0; i < e.changedTouches.length;i++){
                if(e.changedTouches[i].x > app.graphicsDevice.width/2){
                    this.player.script.PlayerControls.shoot(app.extraShots);
                    return;
                }
            }
            e.event.preventDefault();
        }
    };

    return TapToFire;
});
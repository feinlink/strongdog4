pc.script.attribute('useAirConsole','boolean');
pc.script.create('AirConsoleTest', function (app) {
    // Creates a new AirConsoleTest instance
    var AirConsoleTest = function (entity) {
        this.entity = entity;
        this.dire = new pc.Vec2(0,0);
		this.dir = {};
    };

    AirConsoleTest.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            if(this.useAirConsole){
                app.usingAirConsole = true;
            }
            else{
                return;
            }
			this.player = app.root.findByName('PlayerAxis');
            app.airconsole = new AirConsole();
            app.airconsole.onMessage = function(device_id, data) {
                var player = app.airconsole.convertDeviceIdToPlayerNumber(device_id);
                if (player === 0) {
					if(data.joystick){
						this.dire.set(data.joystick.x,data.joystick.y);
					}
					if(data.shoot){
						this.player.script.PlayerControls.shoot(app.extraShots);
					}
					if(data.start){
						app.fire("game:reset");
						app.fire('playSound','ButtonDown');
					}
                }
            }.bind(this);
			
			app.airconsole.onConnect = function(device_id) {
				app.airconsole.setActivePlayers(1);
                var player = app.airconsole.convertDeviceIdToPlayerNumber(device_id);
                if(player !== undefined){
                    app.fire('game:tostart');
                }
			};
			app.airconsole.onDisconnect = function(device_id) {
                var player = app.airconsole.convertDeviceIdToPlayerNumber(device_id);
                if(player !== undefined){
                    app.fire('game:tostart');
                }
				app.airconsole.setActivePlayers(1);			
			};
            app.on('game:getready', function () {
				this.dire.set(0,0);
            }, this);
        }
    };

    return AirConsoleTest;
});
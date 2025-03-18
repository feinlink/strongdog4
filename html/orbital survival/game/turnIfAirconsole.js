pc.script.attribute('turnOn','boolean');
pc.script.create('turnIfAirconsole', function (app) {
    // Creates a new TurnIfAirconsole instance
    var TurnIfAirconsole = function (entity) {
        this.entity = entity;
    };

    TurnIfAirconsole.prototype = {
        initialize: function () {
            if(app.usingAirConsole){
                this.entity.enabled = this.turnOn;
            }else{
                this.entity.enabled = !this.turnOn;
            }
        }
    };

    return TurnIfAirconsole;
});
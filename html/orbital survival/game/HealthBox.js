pc.script.create('HealthBox', function (app) {
    // Creates a new HealthBox instance
    var HealthBox = function (entity) {
        this.entity = entity;
    };

    HealthBox.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.entity.collision.on('triggerenter',function(other){
                if(other.name == 'PlayerCollider'){
                    app.fire('game:heal');
                    this.entity.getParent().enabled = false;
                }
            },this);
        }
    };

    return HealthBox;
});
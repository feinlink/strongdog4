pc.script.create('disableOnStart', function (app) {
    // Creates a new DisableOnStart instance
    var DisableOnStart = function (entity) {
        this.entity = entity;
    };

    DisableOnStart.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            setTimeout(function(){this.entity.enabled = false;}.bind(this),10);
        }
    };

    return DisableOnStart;
});
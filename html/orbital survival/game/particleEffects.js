pc.script.attribute('blueImpact','entity');
pc.script.attribute('blueDisappear','entity');
pc.script.attribute('redExplosion','entity');
pc.script.attribute('blueExplosion','entity');
pc.script.attribute('redImpact','entity');
pc.script.attribute('redDisappear','entity');
pc.script.attribute('slimeExplosion','entity');
pc.script.create('particleEffects', function (app) {
    // Creates a new ParticleEffects instance
    var ParticleEffects = function (entity) {
        pFx = {};
    };

    ParticleEffects.prototype = {
        initialize: function () {
            pFx.blueImpact = this.blueImpact;
            pFx.blueDisappear = this.blueDisappear;
            pFx.redExplosion = this.redExplosion;
            pFx.blueExplosion = this.blueExplosion;
            pFx.redImpact = this.redImpact;
            pFx.redDisappear = this.redDisappear;
            pFx.slimeExplosion = this.slimeExplosion;
        }
    };

    return ParticleEffects;
});
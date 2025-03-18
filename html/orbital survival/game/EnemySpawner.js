pc.script.attribute('ovni','entity');
pc.script.attribute('multy','entity');
pc.script.attribute('slime','entity');
pc.script.create('EnemySpawner', function (app) {
    // Creates a new EnemySpawner instance
    var EnemySpawner = function (entity) {
        this.entity = entity;
        this.spawnTime = 3;
    };

    EnemySpawner.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.killed = 0.1;
            app.on('game:getready', function () {
                this.spawnTime = 3;
                this.killed = 0.1;
            }, this);
            app.on('game:enemykill', function () {
                if(this.spawnTime > 1.5 && this.ovni.script.EntityPool.activeEntities.length === 0){
                    this.spawnTime = 1.5;
                }
                this.killed ++;
            }, this);
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            if(app.gameOver){
               return;
            }
            
            this.spawnTime -= dt;
            
            if(this.spawnTime <= 0){
                this.spawn();
            }
        },
        
        spawn: function(){
            if(app.gameOver){
               return;
            }
            var ran = pc.math.random (0,this.killed)/30;
            
            this.spawnTime = pc.math.random(2, 5);
            while(ran>0){
                ran--;
                this.startEnemy();
            }  
        },
        
        startEnemy: function(){
            var b;
            var rand = pc.math.clamp(this.killed,0,80);
            if(pc.math.random(0,100)<rand){
                if(pc.math.random(0,100)<30){
                    b = this.slime.script.EntityPool.getObject();
                }else{
                    b = this.multy.script.EntityPool.getObject();
                }
            }else{
                b = this.ovni.script.EntityPool.getObject();
            }
            setTimeout(function(){
                b.setEulerAngles(pc.math.random(0,360),pc.math.random(0,360),pc.math.random(0,360));
                b.enabled = true;
            }.bind(this),0);
        }
    };

    return EnemySpawner;
});
pc.script.attribute('obj','entity');
pc.script.attribute('startAmmount','number');
pc.script.create('EntityPool', function (app) {
    // Creates a new EntityPool instance
    var EntityPool = function (entity) {
        this.entity = entity;
        this.pooledEntities = [];
        this.activeEntities = [];
    };

    EntityPool.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            setTimeout(function()
               {this.obj.enabled = false;

            while(this.startAmmount > 0){
                this.addToPool();
                this.startAmmount--;
            }


               }.bind(this),10);
            
            app.on('game:getready',this.reset,this);
        },
        
        addToPool: function(){
            var e = this.obj.clone();
            e.pool = this;
            this.entity.addChild(e);
            this.pooledEntities.push(e);
        },
        
        getObject: function(){
            if(this.pooledEntities.length === 0){
                this.addToPool();
            }
            var r = this.pooledEntities.pop();
            this.activeEntities.push(r);
            return r;
        },
        
        returnToPool: function(o){
            for(i = 0;i<this.activeEntities.length;i++){
                if(o == this.activeEntities[i]){
                    o.enabled = false;
                    this.pooledEntities.push(o);
                    this.activeEntities.splice(i,1);
                    return;
                }
            }
            console.warn("object doesn't belong to pool");
            console.log(o);
        },
        
        reset: function(){
            while(this.activeEntities.length > 0){
                var e = this.activeEntities.pop();
                e.enabled = false;
                this.pooledEntities.push(e);
            }
        }
    };

    return EntityPool;
});
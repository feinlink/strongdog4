pc.script.create('GameManager', function (app) {
    var black = new pc.Color(0, 0, 0);
    var white = new pc.Color(1, 1, 1);
    
    function storageAvailable(type) {
        try {
            var storage = window[type],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    
    // Creates a new GameManager instance
    var GameManager = function (entity) {
        this.entity = entity;
        this.score = 0;
        this.bestScore = 0;
        this.pointsTillPower = 200;
        if (storageAvailable('localStorage')) {
            this.bestScore = localStorage.getItem('OrbSur BS');
            if (this.bestScore === null) {
                this.bestScore = 0;
            }
        }
        app.gameOver = false;
        app.extraShots = 0;                   

    };

    GameManager.prototype = {
        initialize: function () {
            
            app.on('game:getready', function () {
                this.score = 0;
                app.fire('ui:score', this.score);
                app.root.findByName('GameUI').enabled = true;
                app.root.findByName('Game').enabled = true;
                app.root.findByName('GameOverUI').enabled = false;
                app.root.findByName('StartUI').enabled = false;
                app.root.findByName('Start').enabled = false;
                app.gameOver = false;
                app.fire('playSound','SwooshInverted');
                app.fire('playMusic','GameMusic');
                app.fire('stopSound','MenuMusic');
            }, this);
            
            app.on('game:addscore', function (ammount) {
                if(app.gameOver){
                    return;
                }
                this.score += ammount;
                if(this.score > this.pointsTillPower){
                    this.pointsTillPower *= 3.5;
                    app.extraShots++;
                    app.root.findByName('PowerUp').enabled = true;
                    setTimeout(function(){app.root.findByName('PowerUp').enabled = false;},2000);
                    app.fire('playSound','PowerUp');
                }
                app.fire('ui:score', this.score);
            }, this);
            
            app.on('game:gameover', function () {
                app.fire('playSound','RobotDeath');
                app.fire('playMusicPitch','GameMusic',0.7);
                this.bestScore = Math.max(this.score, this.bestScore);
                if (storageAvailable('localStorage')) {
                    localStorage.setItem('OrbSur BS', this.bestScore.toString());
                }
                app.root.findByName('GameUI').enabled = false;
                app.gameOver = true;
                this.pointsTillPower = 200;
                app.extraShots = 0;
                
                setTimeout(function () {
					if(!app.gameOver){
						return;
					}
                    app.root.findByName('GameOverUI').enabled = true;
                    app.fire('ui:currentscore', this.score);
                    app.fire('ui:bestscore', this.bestScore);
                }.bind(this), 1000);
            }, this);
            
            
            app.on('game:reset', function (ammount) {
                app.root.findByName('Fade').script.screenTint.transition(0, 0.7);
                app.fire('playSound','Swoosh');
                setTimeout(function(){
                    app.root.findByName('Fade').script.screenTint.transition(1, 0.7);
                    app.fire('game:getready');
                },700);
            }, this);
            
            app.on('game:tostart', function (ammount) {
                app.root.findByName('Fade').script.screenTint.transition(0, 0.7);
                app.fire('playSound','Swoosh');
                setTimeout(function(){
                    app.root.findByName('Fade').script.screenTint.transition(1, 0.7);
                    app.fire('playSound','SwooshInverted');
                    
                    app.root.findByName('GameUI').enabled = false;
                    app.root.findByName('Game').enabled = false;
                    app.root.findByName('GameOverUI').enabled = false;
                    app.root.findByName('StartUI').enabled = true;
                    app.root.findByName('Start').enabled = true;
                    app.fire('playMusic','MenuMusic');
                    app.fire('stopSound','GameMusic');
                },700);
            }, this);
            
            
            app.on('game:share', function () {
                var left = (screen.width / 2) - (640 / 2);
                var top = (screen.height / 2) - (380 / 2);

                var shareText = encodeURIComponent("I scored " + this.score + " in Orbital survival! Can you beat me? http://playcanv.as/p/3G3RnfUz. Made by @el_pepiii, Using @playcanvas. #webgl #gaming");
                var shareUrl = "https://twitter.com/intent/tweet?text=" + shareText;

                var popup = window.open(shareUrl, 'name', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 640 + ', height=' + 380 +', top=' + top + ', left=' + left);
                if (window.focus && popup)
                    popup.focus();
            }, this);
            
            app.on('game:opentwitter', function () {
                var popup = window.open("https://twitter.com/el_pepiii");
                if (window.focus && popup)
                    popup.focus();
            }, this);
        }
    };

    return GameManager;
});
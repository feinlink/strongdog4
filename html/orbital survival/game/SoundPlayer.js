pc.script.create('SoundPlayer', function (app) {
    
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
    // Creates a new SoundPlayer instance
    var SoundPlayer = function (entity) {
        this.entity = entity;
        if (storageAvailable('localStorage')) {
            this.music = localStorage.getItem('OrbSur msc');
            if (this.music === null) {
                this.music = true;
            }
            else{
                if(this.music == 'false'){
                    this.music = false;
                }
                else{
                    this.music = true;
                }
            }
            this.sound = localStorage.getItem('OrbSur snd');
            if (this.sound === null) {
                this.sound = true;
            }
            else{
                if(this.sound == 'false'){
                    this.sound = false;
                }
                else{
                    this.sound = true;
                }
            }
        }
        else{
            this.music = true;
            this.sound = true;
        }
    };

    SoundPlayer.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.mBar = app.root.findByName('MBar');
            this.sBar = app.root.findByName('SBar');
            this.mBar.enabled = !this.music;
            this.sBar.enabled = !this.sound;
            
            app.on('playSound',function(soundName){
                if(this.sound){
                    this.entity.sound.play(soundName);
                }
            },this);
            app.on('playMusicPitch',function(soundName,pitch){
                if(this.music){
                    var s = this.entity.sound.play(soundName);
                    s.pitch = pitch;
                }
            },this);
            app.on('stopSound',function(soundName){this.entity.sound.stop(soundName);},this);
            app.on('playMusic',function(soundName){
                if(this.music){
                    this.entity.sound.play(soundName);
                }
            },this);
            
            app.on('sound:musictoggle', function () {
                this.mBar.enabled = this.music;
                this.music = !this.music;
                if(this.music === true){
                    app.fire('playMusic','MenuMusic');
                }else{
                    app.fire('stopSound','MenuMusic');
                }
                if (storageAvailable('localStorage')) {
                    localStorage.setItem('OrbSur msc', this.music);
                }
            }, this);
            app.on('sound:soundtoggle', function () {
                this.sBar.enabled = this.sound;
                this.sound = !this.sound;
                if (storageAvailable('localStorage')) {
                    localStorage.setItem('OrbSur snd', this.sound);
                }
            }, this);
            
            if(this.music){
                app.fire('playMusic','MenuMusic');
            }
        }
    };

    return SoundPlayer;
});
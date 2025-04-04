	var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || (window.devicePixelRatio >= 2 && navigator.maxTouchPoints > 0 && navigator.maxTouchPoints != 256));
            }
        };
window.ASSET_PREFIX = "";
window.SCRIPT_PREFIX = "";
window.SCENE_PATH = "951663.json";
window.CONTEXT_OPTIONS = {
    'antialias': false,
    'alpha': true,
    'preserveDrawingBuffer': false,
    'preferWebGl2': false,
    'powerPreference': "high-performance"
};
window.SCRIPTS = [ 32805258, 32709327, 32709328, 32709329, 32709330, 32709331, 32709332, 32709333, 32709334, 32709336, 32709337, 32709338, 32709339, 32709340, 32709342, 32709344, 32709346, 32709347, 32709348, 32807701, 32790107, 34032021, 32767444, 32767491, 32767492, 32767494, 32791868, 32792013, 32807692, 32807693, 32953090, 32953091, 33497633, 33526528, 33526529, 33526530, 33526531, 33526532, 33526533, 33529894, 33532309, 34029635, 34029636, 34030988, 34034507, 34038794, 34038795, 34040034, 34105479, 158235483 ];
if(!isMobile.any())
    window.CONFIG_FILENAME = "config.json";
else 
   window.CONFIG_FILENAME = "config_mobile.json";
window.INPUT_SETTINGS = {
    useKeyboard: true,
    useMouse: true,
    useGamepads: false,
    useTouch: true
};
pc.script.legacy = false;
window.PRELOAD_MODULES = [
];

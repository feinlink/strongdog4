const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "DinoPix",
        productName: "Planets Smash",
        productVersion: "3.3",
        sdkVersion: "3.17.15",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/solar-smash-release33_Web_CrazyGames.loader.js",
        dataURL: "bin/solar-smash-release33_Web_CrazyGames.data",
        frameworkURL: "bin/solar-smash-release33_Web_CrazyGames.framework.js",
        workerURL: "",
        codeURL: "bin/solar-smash-release33_Web_CrazyGames.wasm",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "ThreeJs",
        iconTextureName: "game_logo_256x256.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "crazyGamesWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "e5fb477f17a04b4ebca9be62e68acef8",
        gameDistributionPrefix: "mirragames_",

    }

})();
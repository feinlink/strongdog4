class CrazyGamesWrapper {

	constructor(readyCallback) {
		// Advertisement fields.
		this.interstitialVisible = false;
		this.rewardedVisible = false;
		this.adblockDetected = false;
		// Prefs fields.
		this.jsonContainers = [
			"json-data"
		];
		this.cacheContainers = {};
		// Wrapper initialization.
		console.log("Wrapper initialization started.");
		let script = document.createElement("script");
		script.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
		script.onload = async () => {
			try {
				await window.CrazyGames.SDK.init();
				this.adblockDetected = await window.CrazyGames.SDK.ad.hasAdblock();
				console.log("SDK initialized successfully.");
				// Resolve saves before starting the game.
				this.resolveSaves().then(() => {
					console.log("Saves resolved successfully.");
					readyCallback();
				}).catch(exception => {
					console.error("Failed to resolve saves.", exception);
					readyCallback();
				});
			} catch (exception) {
				console.error("Wrapper initialization failed.", exception);
				readyCallback();
			}
		};
		document.body.appendChild(script);
	}

	// Adblock detection methods.

	isAdblockDetected() {
		return this.adblockDetected;
	}

	// Interstitial advertisement methods.

	isInterstitialVisible() {
		return this.interstitialVisible;
	}

	invokeInterstitial() {
		try {
			const interstitialCallbacks = {
				adFinished: () => {
					this.interstitialVisible = false;
					console.log("Interstitial done playing.");
					application.publishEvent("OnInterstitialEvent", "Close");
				},
				adError: (exception) => {
					this.interstitialVisible = false;
					console.error("Interstitial catched an error.", exception);
					let message = JSON.stringify(exception.message);
					let tooSoon = /requested too soon/.test(message);
					let errorPlaying = /error playing ad/.test(message);
					let unknownMessage = /Unknown message/.test(message);
					let unknownError = /Unknown error/.test(message);
					let adblockDetected = /AdBlock detected/.test(message);
					if (tooSoon || errorPlaying || unknownMessage || unknownError || adblockDetected) {
						application.publishEvent("OnInterstitialEvent", "Error");
					}
				},
				adStarted: () => {
					this.interstitialVisible = true;
					console.log("Interstitial started playing.");
					application.publishEvent("OnInterstitialEvent", "Begin");
				},
			};
			window.CrazyGames.SDK.ad.requestAd("midgame", interstitialCallbacks);
		}
		catch {
			this.interstitialVisible = false;
			console.error("Interstitial catched an error.", exception);
			application.publishEvent("OnInterstitialEvent", "Error");
		}
	}

	// Rewarded advertisement methods.

	isRewardedVisible() {
		return this.rewardedVisible;
	}

	invokeRewarded() {
		try {
			const rewardedCallbacks = {
				adFinished: () => {
					this.rewardedVisible = false;
					console.log("Rewarded done playing.");
					application.publishEvent("OnRewardedEvent", "Close");
					application.publishEvent("OnRewardedEvent", "Success");
				},
				adError: (exception) => {
					this.rewardedVisible = false;
					console.error("Rewarded catched an error.", exception);
					let message = JSON.stringify(exception.message);
					let tooSoon = /requested too soon/.test(message);
					let errorPlaying = /error playing ad/.test(message);
					let unknownMessage = /Unknown message/.test(message);
					let unknownError = /Unknown error/.test(message);
					let adblockDetected = /AdBlock detected/.test(message);
					if (tooSoon || errorPlaying || unknownMessage || unknownError || adblockDetected) {
						application.publishEvent("OnRewardedEvent", "Error");
					}
				},
				adStarted: () => {
					this.rewardedVisible = true;
					console.log("Rewarded started playing.");
					application.publishEvent("OnRewardedEvent", "Begin");
				},
			};
			window.CrazyGames.SDK.ad.requestAd("rewarded", rewardedCallbacks);
		}
		catch {
			this.rewardedVisible = false;
			console.error("Rewarded catched an error.", exception);
			application.publishEvent("OnRewardedEvent", "Error");
		}
	}

	// Analytics methods.

	gameplayStart() {
		window.CrazyGames.SDK.game.gameplayStart();
	}

	gameplayStop() {
		window.CrazyGames.SDK.game.gameplayStop();
	}

	// Prefs methods.

	resolveSaves() {
		console.log("Saves resolving started.");
		return new Promise((resolve, reject) => {
			try {
				for (let x = 0; x < this.jsonContainers.length; x++) {
					console.log("Resolve saves for container: " + this.jsonContainers[x] + " success");
					let containerString = window.CrazyGames.SDK.data.getItem(this.jsonContainers[x]);
					if (containerString == null || containerString == "") {
						console.log("Resolve saves for container: " + this.jsonContainers[x] + " is empty");
						containerString = "Empty";
					}
					this.cacheContainers[this.jsonContainers[x]] = containerString;
				}
				console.log("Saves resolving success.");
				application.publishEvent("OnResolveSaves", "Success");
				resolve();
			}
			catch (exception) {
				console.error("Saves resolving failed.", exception);
				application.publishEvent("OnResolveSaves", "Error");
				reject(exception);
			}
		});
	}

	writeSaves() {
		console.log("Write saves called.");
		return new Promise((resolve, reject) => {
			try {
				for (let x = 0; x < this.jsonContainers.length; x++) {
					window.CrazyGames.SDK.data.setItem(
						this.jsonContainers[x],
						this.cacheContainers[this.jsonContainers[x]]
					);
				}
				console.log("Saves written successfully.");
				application.publishEvent("OnWriteSaves", "Success");
				resolve();
			}
			catch (exception) {
				console.error("Write saves failed.", exception);
				application.publishEvent("OnWriteSaves", "Error");
				reject(exception);
			}
		});
	}

	resolveCacheSaves(containerTag) {
		console.log("Resolve cache saves called.");
		let containerJSON = this.cacheContainers[containerTag];
		if (containerJSON == null) {
			return "Empty";
		}
		return containerJSON;
	}

	writeCacheSaves(containerTag, json) {
		console.log("Write cache saves called.");
		try {
			this.cacheContainers[containerTag] = json;
			console.log("Cache saves written successfully.");
		}
		catch (exception) {
			console.error("Cache saves write failed.", exception);
		}
	}

}

export function initialize(readyCallback) {
	if (typeof window !== 'undefined') {
		window.crazyGamesWrapper = new CrazyGamesWrapper(readyCallback);
	}
}



const scriptsInEvents = {

	async Mainevents_Event2_Act1(runtime, localVars)
	{
		await window.CrazyGames.SDK.init();
	},

	async Mainevents_Event2_Act3(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStart();
	},

	async Mainevents_Event33_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(0,"3"," ", ",")));
	},

	async Mainevents_Event34_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(1,"3"," ", ",")));
	},

	async Mainevents_Event63_Act1(runtime, localVars)
	{
		window.addEventListener("wheel", (event) => event.preventDefault(), {
		  passive: false,
		});
		
		window.addEventListener("keydown", (event) => {
		  if (["ArrowUp", "ArrowDown", " "].includes(event.key)) {
		    event.preventDefault();
		  }
		});
	},

	async Mainevents_Event68_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.data.setItem(runtime.globalVars.ИмяСохранения, localVars.данные);
	},

	async Settingsevents_Event2_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStop();
	},

	async Settingsevents_Event3_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStart();
	},

	async Settingsevents_Event5_Act1(runtime, localVars)
	{
		function updateSliderThumbSize(s) {
		    let slider = document.querySelector(s);
		    if (slider) {
		        if (window.innerWidth < 600) {
		            slider.style.setProperty('--thumb-width', '18px');
		            slider.style.setProperty('--thumb-height', '18px');
					slider.style.setProperty('--top', '-8px');
		        } else if (window.innerWidth >= 600 && window.innerWidth < 1200) {
		            slider.style.setProperty('--thumb-width', '25px');
		            slider.style.setProperty('--thumb-height', '25px');
					slider.style.setProperty('--top', '-12px');
		        } else {
		            slider.style.setProperty('--thumb-width', '30px');
		            slider.style.setProperty('--thumb-height', '30px');
					slider.style.setProperty('--top', '-14px');
		        }
		    }
		}
		
		// Обновить стили при загрузке страницы
		updateSliderThumbSize('#mySlider');
		updateSliderThumbSize('#mySlide');
		updateSliderThumbSize('#SliderLevel');
	},

	async Adevents_Event2_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStart();
	},

	async Adevents_Event3_Act1(runtime, localVars)
	{
		window.CrazyGames.SDK.game.gameplayStop();
	},

	async Adevents_Event5_Act2(runtime, localVars)
	{
		const callbacks = {
		  adFinished: () => runtime.callFunction("FinishAd", runtime.globalVars.УидКнопки),
		  adError: () => runtime.callFunction("ErrorAd"),
		  adStarted: () => runtime.callFunction("StartAd"),
		};
		window.CrazyGames.SDK.ad.requestAd("rewarded", callbacks);
	},

	async Offlineevent_Event15_Act1(runtime, localVars)
	{
		runtime.layout.getLayer(localVars.имя_слоя).isVisible=0;
	},

	async Startevents_Event1_Act2(runtime, localVars)
	{
		await window.CrazyGames.SDK.init();
	},

	async Startevents_Event1_Act4(runtime, localVars)
	{
		runtime.objects.DataObject.getFirstInstance().setJsonString(window.CrazyGames.SDK.data.getItem(runtime.globalVars.ИмяСохранения));
	},

	async Startevents_Event1_Act5(runtime, localVars)
	{
		runtime.globalVars.SaveTry = window.CrazyGames.SDK.data.getItem(runtime.globalVars.ИмяСохранения)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


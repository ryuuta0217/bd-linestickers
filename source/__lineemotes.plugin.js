//META{"name":"lineemotes"}*//

var lineemotes = function () {};

lineemotes.prototype.load = function () {
    console.info(`%c[${lineemotes.prototype.getName()}/load] プラグインを読み込みました`, 'color: greenyellow;');
};

lineemotes.prototype.start = function () {
    console.info(`%c[${lineemotes.prototype.getName()}/start] 読み込み中`, 'color: greenyellow;');
    var libraryScript = null;
    if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
        libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
        if (libraryScript) libraryScript.remove();
        libraryScript = document.createElement("script");
        libraryScript.setAttribute("type", "text/javascript");
        libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js")
        document.head.appendChild(libraryScript);
        console.info(`%c[${lineemotes.prototype.getName()}/start] BDFunctionDevilBro ライブラリを読み込みました`, 'color: greenyellow;');
    }
    console.info(`%c[${lineemotes.prototype.getName()}/start] %cinitializePL を呼び出しています`, 'color: greenyellow;', 'color: gray;');
	if (typeof BDFDB === "object" && typeof BDFDB.isLibraryOutdated === "function") initializePL();
	else libraryScript.addEventListener("load", () => { initializePL(); });
};


initializePL = function() {
    console.info(`%c[${lineemotes.prototype.getName()}/initializePL] %cinitializePL が呼び出されました`, 'color: greenyellow;', 'color: gray;');
    //PluginLibrary ライブラリを読み込む
	var libraryScript = document.getElementById('zeresLibraryScript');
	if (!libraryScript) {
		libraryScript = document.createElement("script");
		libraryScript.setAttribute("type", "text/javascript");
		libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
		libraryScript.setAttribute("id", "zeresLibraryScript");
        document.head.appendChild(libraryScript);
        console.info(`%c[${lineemotes.prototype.getName()}/initializePL] zeresLibraryScript ライブラリを読み込みました`, 'color: greenyellow;');
    }
    console.info(`%c[${lineemotes.prototype.getName()}/initializePL] %cinitialize を呼び出しています`, 'color: greenyellow;', 'color: gray;');
	if (typeof window.ZeresLibrary !== "undefined") initialize();
	else libraryScript.addEventListener("load", () => { initialize(); });
};

//ライブラリ読み込み ここまで


initialize = function() {
    console.info(`%c[${lineemotes.prototype.getName()}/initialize] %cinitialize が呼び出されました`, 'color: greenyellow;', 'color: gray;');
    console.info(`%c[${lineemotes.prototype.getName()}/initialize] プラグインを初期化しています...`, 'color: greenyellow;');
    BdApi.clearCSS('lineemotes');
    BdApi.injectCSS('lineemotes', lineemotes.getStylesheet())
    lineemotes.menu.init();
    BDFDB.showToast(lineemotes.prototype.getName()+` v`+lineemotes.prototype.getVersion()+` が起動しました`, {timeout:10000, type:"success"});
};

//起動処理 ここまで

//停止処理
lineemotes.prototype.stop = function () {
    console.info(`%c[${lineemotes.prototype.getName()}/stop] %cプラグインを停止しています... %c| %c絵文字メニューをデフォルトに戻しています...`, 'color: greenyellow;', 'color: red', 'color: white;', 'color: lawngreen');
    lineemotes.menu.unload();
    BdApi.clearCSS('lineemotes');
    BDFDB.showToast(lineemotes.prototype.getName()+` v`+lineemotes.prototype.getVersion()+` が停止しました`, {timeout:10000, type:"error"});
};

lineemotes.prototype.unload = function () {
    lineemotes.log('Unloading');
};

lineemotes.prototype.onMessage = function () {
    //メッセージを受け取った時に呼び出される
};

lineemotes.prototype.onSwitch = function () {
    //サーバーまたはチャンネルを切り替えた時(切り替える時)に呼び出される
};

lineemotes.prototype.settings = function () {};
lineemotes.prototype.settings.toggleHide = function () {
    let checked = bdPluginStorage.get(lineemotes.storage.getName(), 'hideURLs')
    lineemotes.log(`Toggling hide, was ${checked}`)
    if (!checked) {
        bdPluginStorage.set(lineemotes.storage.getName(), 'hideURLs', true);
        $('#line-settings-hideurl').parent().find('.ui-switch').addClass('checked')
    } else {
        bdPluginStorage.set(lineemotes.storage.getName(), 'hideURLs', false);
        $('#line-settings-hideurl').parent().find('.ui-switch').removeClass('checked')
    }
};

lineemotes.prototype.getSettingsPanel = function () {
    let checked = ''
    if (bdPluginStorage.get(lineemotes.storage.getName(), 'hideURLs') == true) { checked = 'checked=""'; }

    let toggle = document.createElement('label');
    toggle.classList.add('ui-switch-wrapper', 'ui-flex-child');
    toggle.setAttribute('style', 'flex:0 0 auto;');

    let input = document.createElement('input');
    input.classList.add('ui-switch-checkbox');
    input.setAttribute('id', 'line-settings-hideurl');
    input.setAttribute('type', 'checkbox');
    if (bdPluginStorage.get(lineemotes.storage.getName(), 'hideURLs') == true) { input.setAttribute('checked', ''); }
    input.setAttribute('onclick', 'lineemotes.prototype.settings.toggleHide()')

    let div = document.createElement('div');
    div.classList.add('ui-switch');
    if (bdPluginStorage.get(lineemotes.storage.getName(), 'hideURLs'))
        div.classList.add('checked');

    toggle.appendChild(input);
    toggle.appendChild(div);

    return "<div style='display:flex;'><h3 style='color:#b0b6b9;'>スタンプURLをクライアントサイドで非表示にする(本家Line Sticker の利用者用、プラグイン側で非表示にしているだけです。)</h3>" + toggle.outerHTML + "</div>";
};

lineemotes.prototype.getLocalizationStrings = function () {
  var locale = document.children[0].getAttribute('lang');
  var localization_strings = {
    'bda-qem-emojis': 'Emojis',
    'bda-qem-favourite': 'Favourite',
    'bda-qem-line': 'LINE',
    'addform-title': 'Title',
    'addform-length': 'Sticker count',
    'addform-id': 'First sticker ID',
    'addform-add': 'Add',
    'delete-confirm': 'Are you sure you want to delete this pack?',
    'yes': 'Yes',
    'no': 'No'
  }
  if (locale === 'ja') {
    localization_strings['bda-qem-emojis'] = '絵文字',
    localization_strings['bda-qem-favourite'] = 'お気に入り'
    localization_strings['addform-title'] = 'タイトル',
    localization_strings['addform-length'] = 'スタンプの数',
    localization_strings['addform-id'] = '最初のスタンプID',
    localization_strings['addform-add'] = '追加',
    localization_strings['delete-confirm'] = 'このパックを削除しますか？',
    localization_strings['yes'] = 'はい',
    localization_strings['no'] = 'いいえ'
  }

  return localization_strings;
}

//logger function, outputs console message in '[Line Stickers] <message>' format
lineemotes.log = (message) => console.info(`%c[${lineemotes.prototype.getName()}] ${message}`, 'color: greenyellow;');
lineemotes.getBDRepo = () => {
    var script_url = $("script[src*='BetterDiscordApp']").attr('src').split('/')
    if (script_url[4] !== 'BetterDiscordApp')
        throw ReferenceError(`Error in getBDRepo(), expected 'BetterDiscordApp', found '${script_url[4]}'`)
    return script_url[3]
};

lineemotes.prototype.getName = () => "Line Stickers";
lineemotes.prototype.getDescription = () => "Extends emote menu to add Line stickers.";
// lineemotes.prototype.getVersion = () => "0.6.3";
lineemotes.prototype.getAuthor = () => "Awakening | Edit by ryuuta0217";


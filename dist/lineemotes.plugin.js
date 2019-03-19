//META{"name":"_lineemotes"}*//
var token;
var pl_name;
var pl_ver;

function inject(name, options) {
  return new Promise(re => {
    var libraryScript = null;
    if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
        libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
        if (libraryScript) libraryScript.remove();
        libraryScript = document.createElement("script");
        libraryScript.setAttribute("id", "BDFDB");
        libraryScript.setAttribute("type", "text/javascript");
        libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js")
        document.head.appendChild(libraryScript);
        //デバッグログ | DEBUG LOG
        //console.info(`%c[${lineemotes.prototype.getName()}/start] BDFunctionDevilBro ライブラリを読み込みました`, 'color: greenyellow;');
    }
    re(libraryScript);
    setTimeout(() => {
      re(null);
    }, 3000);
  })
}

async function initializePL() {
  await inject('script', {
    type: 'text/javascript',
    id: 'BDFDB',
    src: 'https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js'
  });
  if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function") {
    console.log("BDFDB is could not be loaded.")
    return;
  }

  BDFDB.showToast(pl_name + ` v` + pl_ver + " が起動しました", {timeout:10000, type:"success"});
  if(token == null || typeof token === "undefined") {
    try {
        var DiscordLocalStorageProxy = document.createElement('iframe');
        DiscordLocalStorageProxy.style.display = 'none';
        DiscordLocalStorageProxy.id = 'DiscordLocalStorageProxy';
        document.body.appendChild(DiscordLocalStorageProxy);
        //デバッグログ | DEBUG LOG
        //console.info(`%c[${pl_name}/line-440] %cTOKEN(NOT REPLACED): `+DiscordLocalStorageProxy.contentWindow.localStorage.token, 'color: greenyellow;', 'color: gold');
        token = DiscordLocalStorageProxy.contentWindow.localStorage.token.replace(/"/g, "");
    
        //デバッグログ | DEBUG LOG
        //console.info(`%c[${pl_name}/getToken] %cTokenを取得しました: `+token, 'color: greenyellow;', 'color: crimson');
        BDFDB.showToast(`LINE Stickers@Tokenを取得しました: `+token, {timeout:4000, type:"default"});
        BDFDB.showToast(`このTokenはDiscordが再読み込みされるまで保持されます`, {timeout:4000, type:"warn"});
    } catch(e) {
        BDFDB.showToast(`LINE Stickers@Tokenの取得に失敗しました。`, {timeout:4000, type:"error"});
        BDFDB.showToast(`Ctrl+Rで再読み込みすると治る可能性があります。`, {timeout:4000, type:"error"});
    }
  }
}

function initialize() {

}

var _lineemotes = function (e) {
    var n = {};
  
    function t(i) {
      if (n[i]) return n[i].exports;
      var a = n[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    return t.m = e, t.c = n, t.d = function (e, n, i) {
      t.o(e, n) || Object.defineProperty(e, n, {
        enumerable: !0,
        get: i
      })
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, t.t = function (e, n) {
      if (1 & n && (e = t(e)), 8 & n) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (t.r(i), Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e
        }), 2 & n && "string" != typeof e)
        for (var a in e) t.d(i, a, function (n) {
          return e[n]
        }.bind(null, a));
      return i
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 4)
  }([function (e) {
    e.exports = {
      id: "lineemotes",
      name: "bd-linestickers",
      prettyName: "LINE Stickers",
      description: "Extends BetterDiscord emote menu to add LINE stickers tab.",
      version: "0.7.1",
      scripts: {
        build: "webpack --mode=none",
        "build:watch": "webpack --watch --mode=development"
      },
      author: "Awakening | Edit by ryuuta0217",
      private: !0,
      contributors: [],
      dependencies: {},
      devDependencies: {
        "copy-webpack-plugin": "^4.5.4",
        "css-loader": "^0.28.11",
        eslint: "^5.7.0",
        "eslint-config-standard": "^11.0.0",
        "eslint-plugin-import": "^2.14.0",
        "eslint-plugin-node": "^6.0.1",
        "eslint-plugin-promise": "^3.8.0",
        "eslint-plugin-standard": "^3.1.0",
        "node-sass": "^4.9.4",
        pug: "^2.0.3",
        "pug-loader": "^2.4.0",
        "sass-loader": "^7.1.0",
        "to-string-loader": "^1.1.5",
        webpack: "^4.22.0",
        "webpack-cli": "^3.1.2"
      }
    }
  }, function (e, n, t) {
    const i = t(0);
    e.exports = function (e) {
      console.log(`%c[${i.prettyName}] %c${e}`, "color: #01B901", "")
    }
  }, function (e, n, t) {
    "use strict";
    var i = Object.prototype.hasOwnProperty;
  
    function a(e, n) {
      return Array.isArray(e) ? function (e, n) {
        for (var t, i = "", r = "", o = Array.isArray(n), d = 0; d < e.length; d++)(t = a(e[d])) && (o && n[d] && (t = s(t)), i = i + r + t, r = " ");
        return i
      }(e, n) : e && "object" == typeof e ? function (e) {
        var n = "",
          t = "";
        for (var a in e) a && e[a] && i.call(e, a) && (n = n + t + a, t = " ");
        return n
      }(e) : e || ""
    }
  
    function r(e) {
      if (!e) return "";
      if ("object" == typeof e) {
        var n = "";
        for (var t in e) i.call(e, t) && (n = n + t + ":" + e[t] + ";");
        return n
      }
      return e + ""
    }
  
    function o(e, n, t, i) {
      return !1 !== n && null != n && (n || "class" !== e && "style" !== e) ? !0 === n ? " " + (i ? e : e + '="' + e + '"') : ("function" == typeof n.toJSON && (n = n.toJSON()), "string" == typeof n || (n = JSON.stringify(n), t || -1 === n.indexOf('"')) ? (t && (n = s(n)), " " + e + '="' + n + '"') : " " + e + "='" + n.replace(/'/g, "&#39;") + "'") : ""
    }
    n.merge = function e(n, t) {
      if (1 === arguments.length) {
        for (var i = n[0], a = 1; a < n.length; a++) i = e(i, n[a]);
        return i
      }
      for (var o in t)
        if ("class" === o) {
          var d = n[o] || [];
          n[o] = (Array.isArray(d) ? d : [d]).concat(t[o] || [])
        } else if ("style" === o) {
        var d = r(n[o]);
        d = d && ";" !== d[d.length - 1] ? d + ";" : d;
        var s = r(t[o]);
        s = s && ";" !== s[s.length - 1] ? s + ";" : s, n[o] = d + s
      } else n[o] = t[o];
      return n
    }, n.classes = a, n.style = r, n.attr = o, n.attrs = function (e, n) {
      var t = "";
      for (var d in e)
        if (i.call(e, d)) {
          var s = e[d];
          if ("class" === d) {
            s = a(s), t = o(d, s, !1, n) + t;
            continue
          }
          "style" === d && (s = r(s)), t += o(d, s, !1, n)
        }
      return t
    };
    var d = /["&<>]/;
  
    function s(e) {
      var n = "" + e,
        t = d.exec(n);
      if (!t) return e;
      var i, a, r, o = "";
      for (i = t.index, a = 0; i < n.length; i++) {
        switch (n.charCodeAt(i)) {
        case 34:
          r = "&quot;";
          break;
        case 38:
          r = "&amp;";
          break;
        case 60:
          r = "&lt;";
          break;
        case 62:
          r = "&gt;";
          break;
        default:
          continue
        }
        a !== i && (o += n.substring(a, i)), a = i + 1, o += r
      }
      return a !== i ? o + n.substring(a, i) : o
    }
    n.escape = s, n.rethrow = function e(n, i, a, r) {
      if (!(n instanceof Error)) throw n;
      if (!("undefined" == typeof window && i || r)) throw n.message += " on line " + a, n;
      try {
        r = r || t(7).readFileSync(i, "utf8")
      } catch (t) {
        e(n, null, a)
      }
      var o = 3,
        d = r.split("\n"),
        s = Math.max(a - o, 0),
        l = Math.min(d.length, a + o);
      var o = d.slice(s, l).map(function (e, n) {
        var t = n + s + 1;
        return (t == a ? "  > " : "    ") + t + "| " + e
      }).join("\n");
      n.path = i;
      n.message = (i || "Pug") + ":" + a + "\n" + o + "\n\n" + n.message;
      throw n
    }
  }, function (e, n) {
    let t = {
      en: {
        "bda-qem-emojis": "Emojis",
        "bda-qem-favourite": "Favourite",
        "bda-qem-line": "LINE",
        "addform-title": "Title",
        "addform-length": "Sticker count",
        "addform-id": "First sticker ID",
        "addform-add": "Add",
        "delete-confirm": "Are you sure you want to delete this pack?",
        yes: "Yes",
        no: "No"
      },
      ja: {
        "bda-qem-emojis": "絵文字",
        "bda-qem-favourite": "お気に入り",
        "bda-qem-line": "LINE",
        "addform-title": "タイトル",
        "addform-length": "スタンプの数",
        "addform-id": "最初のスタンプID",
        "addform-add": "追加",
        "delete-confirm": "このパックを削除しますか？",
        yes: "はい",
        no: "いいえ"
      }
    };
    let i = new class {
      getCurrentLocale() {
        return document.children[0].getAttribute("lang")
      }
      getToken(e) {
        let n = this.getCurrentLocale();
        return n in t || (n = "en"), t[n][e]
      }
    };
    e.exports = i
  }, function (e, n, t) {
    const i = t(5),
      a = t(8),
      r = t(10),
      o = t(11),
      d = t(14),
      s = t(16),
      l = t(17),
      c = t(19),
      p = t(20),
      u = t(0),
      b = t(21),
      m = t(1);
    e.exports = class {
      constructor() {
        this.storage = new o, this.settings = new c, this.categories = new i, this.menu = new a, this.preview = new r, this.pack = new d(this), this.editbar = new s, this.confirm = new l, this.observer = p, window[u.id] = this
      }
      load() {
        m("LINE Stickers Loaded")
      }
      unload() {
        m("LINE Stickers Unloaded")
      }

      start() {
        //デバッグログ | DEBUG LOG
        //console.info(`%c[${lineemotes.prototype.getName()}/start] 読み込み中`, 'color: greenyellow;');
        var libraryScript = null;
        if (typeof BDFDB !== "object" || typeof BDFDB.isLibraryOutdated !== "function" || BDFDB.isLibraryOutdated()) {
          libraryScript = document.querySelector('head script[src="https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js"]');
          if (libraryScript) libraryScript.remove();
          libraryScript = document.createElement("script");
          libraryScript.setAttribute("type", "text/javascript");
          libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js")
          document.head.appendChild(libraryScript);
          //デバッグログ | DEBUG LOG
          //console.info(`%c[${lineemotes.prototype.getName()}/start] BDFunctionDevilBro ライブラリを読み込みました`, 'color: greenyellow;');
        }
        m("Initializing LINE Stickers"), BdApi.clearCSS("lineemotes"), BdApi.injectCSS("lineemotes", b), this.storage.initialize(), this.menu.initialize();
        //デバッグログ | DEBUG LOG
        //console.info(`%c[${lineemotes.prototype.getName()}/start] %cinitializePL を呼び出しています`, 'color: greenyellow;', 'color: gray;');
	      if (typeof BDFDB === "object" && typeof BDFDB.isLibraryOutdated === "function") initializePL();
	      else libraryScript.addEventListener("load", () => { initializePL(); });
      }

      stop() {
        m("Stopping LINE Stickers, reverting emote menu to default"), this.menu.destroy(), BdApi.clearCSS("lineemotes")
      }
      onMessage() {}
      onSwitch() {}
      getSettingsPanel() {
        return this.settings.getPanel()
      }
      getName() {
        pl_name = u.prettyName;
        return u.prettyName
      }
      getDescription() {
        return u.description
      }
      getAuthor() {
        return u.author
      }
      getVersion() {
        pl_ver = u.version;
        return u.version
      }
    }
  }, function (e, n, t) {
    const i = t(0),
      a = t(3),
      r = t(6);
    e.exports = class {
      initialize() {
        let e = window[i.id];
        e.editbar.initializeAll(), $("#bda-qem-line-container .categories-container .categories-wrapper").bind("mousewheel", function (e) {
          return (e.originalEvent.wheelDelta || e.originalEvent.detail) > 0 ? this.scrollLeft -= 25 : this.scrollLeft += 25, !1
        }), $("#bda-qem-line-container .categories-container .add-pack").off("click"), $("#bda-qem-line-container .categories-container .add-pack").on("click", e => {
          let n = $("#bda-qem-line-container .add-form").css("opacity");
          "1" === n ? ($("#bda-qem-line-container .categories-container .add-pack").addClass("icon-plus"), $("#bda-qem-line-container .categories-container .add-pack").removeClass("icon-minus"), $("#bda-qem-line-container .add-form").css("opacity", "0"), $("#bda-qem-line-container .add-form").css("pointer-events", "none")) : "0" === n && ($("#bda-qem-line-container .categories-container .add-pack").addClass("icon-minus"), $("#bda-qem-line-container .categories-container .add-pack").removeClass("icon-plus"), $("#bda-qem-line-container .add-form").css("opacity", "1"), $("#bda-qem-line-container .add-form").css("pointer-events", "unset"))
        });
        var n = {
          id: !1,
          length: !0,
          title: !1
        };
  
        function t() {
          function e(e, n) {
            $(e).removeClass("valid"), $(e).removeClass("invalid"), $(e).addClass(n)
          }
          return n.id && n.length && n.title ? (e("#bda-qem-line-container .line-add-button", "valid"), !0) : (e("#bda-qem-line-container .line-add-button", "invalid"), !1)
        }
        $("#line-add-title").off(), $("#line-add-length").off(), $("#line-add-id").off(), $("#line-add-title").keyup(e => {
          $(e.target).val() ? n.title = !0 : n.title = !1, t()
        }), $("#line-add-length").keyup(e => {
          Number($(e.target).val()) ? n.length = !0 : n.length = !1, t()
        }), $("#line-add-id").keyup(e => {
          Number($(e.target).val().trim()) ? n.id = !0 : n.id = !1, t()
        }), $("#bda-qem-line-container .line-add-button").off("click"), $("#bda-qem-line-container .line-add-button").off("mouseenter"), $("#bda-qem-line-container .line-add-button").on("mouseenter", e => t()), $("#bda-qem-line-container .line-add-button").on("click", n => {
          if (!t()) return;
          let i = $("#line-add-title").val().trim(),
            a = $("#line-add-length").val().trim(),
            r = $("#line-add-id").val().trim();
          e.pack.addPack(i, r, a), $("#line-add-title").val(""), $("#line-add-length").val(40), $("#line-add-id").val("")
        })
      }
      buildContainer() {
        let e = "",
          n = window[i.id].storage.get("stickers");
        if (n)
          for (var t = 0; t < n.length; ++t) {
            let i = n[t],
              a = `$('#bda-qem-line-container .line-pack[data-id=${i.startingId}]')[0].scrollIntoView()`,
              r = `background-image: url("https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/${i.startingId}/android/sticker.png;compress=true")`;
            e += `<div class="item" data-id="${i.startingId}" onclick="${a}" style='${r}'></div>`
          }
        return r({
          addformTitle: a.getToken("addform-title"),
          addformLength: a.getToken("addform-length"),
          addformId: a.getToken("addform-id"),
          addformAdd: a.getToken("addform-add"),
          categories: e
        })
      }
    }
  }, function (e, n, t) {
    var i = t(2);
    e.exports = function (e) {
      var n, t = "",
        a = e || {};
      return function (e, a, r, o, d) {
        t = t + '<div class="add-form" style="opacity: 0; pointer-events: none;"><div class="labels"><label for="line-add-title">' + i.escape(null == (n = o) ? "" : n) + '</label><label for="line-add-length">' + i.escape(null == (n = r) ? "" : n) + '</label><label for="line-add-id">' + i.escape(null == (n = a) ? "" : n) + '</label></div><div class="inputs"><input id="line-add-title"' + i.attr("placeholder", o, !0, !0) + '><input id="line-add-length" onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57"' + i.attr("placeholder", r, !0, !0) + ' value="40"><input id="line-add-id" onkeypress="return event.charCode &gt;= 48 &amp;&amp; event.charCode &lt;= 57"' + i.attr("placeholder", a, !0, !0) + '></div><button class="line-add-button ui-button filled brand small"><div class="ui-button-contents">' + i.escape(null == (n = e) ? "" : n) + '</div></button></div><div class="categories-container"><div class="categories-wrapper"><div class="item add-pack-button"><svg class="add-pack" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg></div>' + (null == (n = d) ? "" : n) + "</div></div>"
      }.call(this, "addformAdd" in a ? a.addformAdd : "undefined" != typeof addformAdd ? addformAdd : void 0, "addformId" in a ? a.addformId : "undefined" != typeof addformId ? addformId : void 0, "addformLength" in a ? a.addformLength : "undefined" != typeof addformLength ? addformLength : void 0, "addformTitle" in a ? a.addformTitle : "undefined" != typeof addformTitle ? addformTitle : void 0, "categories" in a ? a.categories : "undefined" != typeof categories ? categories : void 0), t
    }
  }, function (e, n) {}, function (e, n, t) {
    const i = t(0),
      a = t(1),
      r = t(3),
      o = t(9);
    e.exports = class {
      initialize() {
        this.restore = {
          obsCallback: QuickEmoteMenu.prototype.obsCallback,
          switchQem: QuickEmoteMenu.prototype.switchQem
        }, quickEmoteMenu.lsContainer = this.buildContainer(), QuickEmoteMenu.prototype.obsCallback = function (e) {
          let n = $(e);
          settingsCookie["bda-es-9"] ? n.removeClass("bda-qme-hidden") : n.addClass("bda-qme-hidden"), this.locale ? this.locale !== document.children[0].getAttribute("lang") && (a("Language changed, rebuilding container to reflect changes"), this.locale = r.getCurrentLocale(), this.lsContainer = window[i.id].menu.buildContainer()) : this.locale = r.getCurrentLocale();
          let t = '<div id="bda-qem">';
          t += '<button class="active" id="bda-qem-twitch" onclick="quickEmoteMenu.switchHandler(this); return false;">Twitch</button>', t += `<button id="bda-qem-favourite" onclick="quickEmoteMenu.switchHandler(this); return false;">${r.getToken("bda-qem-favourite")}</button>`, t += `<button id="bda-qem-emojis" onclick="quickEmoteMenu.switchHandler(this); return false;">${r.getToken("bda-qem-emojis")}</button>`, t += `<button id="bda-qem-line" onclick="quickEmoteMenu.switchHandler(this); return false;">${r.getToken("bda-qem-line")}</button>`, t += "<div>", n.prepend(t), settingsCookie["bda-es-0"] ? (n.append(this.teContainer), n.append(this.faContainer), n.removeClass("bda-qme-te-hidden")) : n.addClass("bda-qme-te-hidden"), n.append(this.lsContainer), settingsCookie["bda-es-0"] || settingsCookie["bda-es-9"] || (this.lastTab = "bda-qem-line"), "bda-qem-emojis" !== this.lastTab && "bda-qem-favourite" !== this.lastTab || settingsCookie["bda-es-0"] || (this.lastTab = "bda-qem-emojis"), "bda-qem-emojis" !== this.latTab || settingsCookie["bda-es-9"] || (this.lastTab = "bda-qem-favourite"), this.lastTab || (settingsCookie["bda-es-0"] ? this.lastTab = "bda-qem-favourite" : this.lastTab = "bda-qem-emojis"), this.switchQem(this.lastTab)
        }, QuickEmoteMenu.prototype.switchQem = function (e) {
          let n = $("#bda-qem-twitch"),
            t = $("#bda-qem-favourite"),
            a = $("#bda-qem-emojis"),
            r = $("#bda-qem-line");
          switch (n.removeClass("active"), t.removeClass("active"), a.removeClass("active"), r.removeClass("active"), $(".emojiPicker-3m1S-j").hide(), $("#bda-qem-favourite-container").hide(), $("#bda-qem-twitch-container").hide(), $("#bda-qem-line-container").hide(), e) {
          case "bda-qem-twitch":
            n.addClass("active"), $("#bda-qem-twitch-container").show();
            break;
          case "bda-qem-favourite":
            t.addClass("active"), $("#bda-qem-favourite-container").show();
            break;
          case "bda-qem-emojis":
            a.addClass("active"), $(".emojiPicker-3m1S-j").show(), $(".emojiPicker-3m1S-j .search-bar-inner input").focus();
            break;
          case "bda-qem-line":
            r.addClass("active"), $("#bda-qem-line-container").show()
          }
          this.lastTab = e;
          let o = $(".emote-icon");
          o.off(), o.on("click", function (e) {
            window[i.id].menu.onEmoteClick(e.target)
          }), window[i.id].preview.initialize(), window[i.id].categories.initialize(), window[i.id].confirm.initializeAll(), window[i.id].menu.resize()
        }
      }
      buildContainer() {
        var e = "";
        let n = window[i.id].storage.get("stickers");
        for (var t = 0; t < n.length; ++t) e += window[i.id].pack.wrapPack(n[t].startingId);
        return o({
          confirm: window[i.id].confirm.buildContainer(),
          stickers: e,
          preview: window[i.id].preview.buildContainer(),
          categories: window[i.id].categories.buildContainer()
        })
      }
      rebuild() {
        a("Rebuilding container"), quickEmoteMenu.lsContainer = this.buildContainer()
      }
      destroy() {
        QuickEmoteMenu.prototype.obsCallback = this.restore.obsCallback, QuickEmoteMenu.prototype.switchQem = this.restore.switchQem, quickEmoteMenu.lastTab = "bda-qem-emojis"
      }
      setWidth(e) {
        e < 344 && (e = 344, a("Can't set width less than 344px")), window[i.id].storage.set("width", e), this.resize()
      }
      setHeight(e) {
        e < 326 && (e = 326, a("Can't set height less than 326px")), window[i.id].storage.set("height", e), this.resize()
      }
      setSize(e, n) {
        this.setWidth(e), this.setHeight(n)
      }
      getWidth() {
        return window[i.id].storage.get("width")
      }
      getHeight() {
        return window[i.id].storage.get("height")
      }
      getSize() {
        return {
          width: this.getWidth(),
          height: this.getHeight()
        }
      }
      resize() {
        if (!this.isOpen()) return;
        let e = this.getWidth(),
          n = this.getHeight();
        if (null === e) return void this.setWidth(0);
        if (null === n) return void this.setHeight(0);
        $("#bda-qem-line-container").css("width", e), $("#bda-qem-line-container").css("height", n);
        let t = 30;
        settingsCookie["bda-es-0"] || settingsCookie["bda-es-9"] || (t = 0), BdApi.clearCSS("lineemotes-offset"), BdApi.injectCSS("lineemotes-offset", `:root {--bd-les-offset: ${t}px; --bd-les-border-offset:1px; --bd-les-height: ${n}px; --bd-les-width: ${e}px;}`)
      }
      removePack(e) {
        $(`#bda-qem-line-container .line-pack[data-id="${e}"]`).remove(), $(`#bda-qem-line-container .categories-container .item[data-id="${e}"]`).remove()
      }
      appendPack(e) {
        if (!this.isOpen()) return;
        a("Appending a pack to the current container");
        var n = window[i.id].pack.wrapPack(e);
        $("#bda-qem-line-container .emote-menu-inner").append(n);
        var t = `<div class="item" data-id="${e=(n=window[i.id].storage.getPack(e)).startingId}" onclick="$('#bda-qem-line-container .line-pack')[${$("#bda-qem-line-container .categories-wrapper .item").length-1}].scrollIntoView()" style='background-image: url("https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/${e}/android/sticker.png;compress=true")'></div>`;
        $("#bda-qem-line-container .categories-wrapper").append(t);
        let r = $(`#bda-qem-line-container .line-pack[data-id="${e}"] img`);
        r.mouseenter(function (e) {
          window[i.id].preview.show(e.target.src)
        }).mouseleave(function (e) {
          window[i.id].preview.hide()
        }).on("click", () => this.onStickerClick(r)), window[i.id].confirm.initializeOne(e), window[i.id].editbar.initializeOne(e)
      }
      isOpen() {
        let e = document.getElementById("bda-qem-line-container");
        return !(!e || "none" === e.style.display)
      }
      onEmoteClick(e) {
        let n = $(e).parent().parent(),
          t = $(e),
          i = n.hasClass("line-pack-stickers") ? t.attr("src") : t.attr("title"),
          a = Utils.getTextArea();
        
        console.warn("== DATAS AT ==")
        console.log(n);
        console.log(t);
        console.log(i);
        console.log(a);
        console.warn("== DATAS END ==")

        //埋込みリンク版 | Embed ver.
        var image = {url : i};
        var channelID = window.location.pathname.split('/').pop();
        var embed = 	{	type : "rich" };
        if (image) { embed.image = image; }
        var data = JSON.stringify({embed : embed});
        //デバッグログ || DEBUG LOG
        console.info(`%c[${pl_name}/embed] %cデータ(JSON): `+data, 'color: greenyellow;', 'color: gold');

        //Get Token || Token取得
        var isError = false;
        if(token == null || typeof token === "undefined") {
            try {
                var DiscordLocalStorageProxy = document.createElement('iframe');
                DiscordLocalStorageProxy.style.display = 'none';
                DiscordLocalStorageProxy.id = 'DiscordLocalStorageProxy';
                document.body.appendChild(DiscordLocalStorageProxy);
                //デバッグログ | DEBUG LOG
                //console.info(`%c[${pl_name}/line-440] %cTOKEN(NOT REPLACED): `+DiscordLocalStorageProxy.contentWindow.localStorage.token, 'color: greenyellow;', 'color: gold');
                token = DiscordLocalStorageProxy.contentWindow.localStorage.token.replace(/"/g, "");
            
                //デバッグログ | DEBUG LOG
                //console.info(`%c[${pl_name}/getToken] %cTokenを取得しました: `+token, 'color: greenyellow;', 'color: crimson');
                BDFDB.showToast(`Tokenを取得しました: `+token, {timeout:4000, type:"default"});
                BDFDB.showToast(`このTokenはDiscordが再読み込みされるまで保持されます`, {timeout:4000, type:"warn"});
            } catch(e) {
                isError = true;
                BDFDB.showToast(`Tokenの取得に失敗しました。`, {timeout:4000, type:"error"});
                BDFDB.showToast(`Ctrl+Rで再読み込みすると治る可能性があります。`, {timeout:4000, type:"error"});
            }
        }

        //送信 | Send
        $.ajax({
            type : "POST",
            url : "https://discordapp.com/api/channels/" + channelID + "/messages",
            headers : {
                "authorization": token
            },
            dataType : "json",
            contentType : "application/json",
            data: data,
            error: (req, error, exception) => {
                isError = true;
                BDFDB.showToast(`エラーが発生しました: ${req.responseText.replace('{"code": 0, "message": "401: Unauthorized"}', "HTTP 401: 認証されていません")}`, {timeout:4000, type:"error"});
                //デバッグログ | DEBUG LOG
                //console.error(`An Internal Error occured: ${req.responseText.replace('{"code": 0, "message": "401: Unauthorized"}', "HTTP 401: 認証されていません")}`);
            }
        });

        if(!isError) {
            //デバッグログ | DEBUG LOG
            //console.info(`%c[${pl_name}/embed] %cスタンプ(Embed)を送信しました`, 'color: greenyellow;', 'color: lime'); //check
            BDFDB.showToast(`スタンプを送信しました`, {timeout:2000, type:"success"});
        } else {
            //デバッグログ | DEBUG LOG
            //console.error(`%c[${pl_name}/embed] %cスタンプ(Embed)の送信に失敗しました`, 'color: greenyellow;', 'color: lime'); //check
            BDFDB.showToast(`スタンプの送信に失敗しました`, {timeout:4000, type:"error"});
        }
        
        //Utils.insertText(a[0], " " === a.val().slice(-1) ? a.val() + i : a.val() + " " + i), a[0].dispatchEvent(new Event("input", {bubbles: !0}))
      }
    }
  }, function (e, n, t) {
    t(2);
    e.exports = function (e) {
      var n, t = "",
        i = e || {};
      return function (e, i, a, r) {
        t = t + '<div id="bda-qem-line-container"><div class="scrollerWrap-2lJEkd scrollerFade-1Ijw5y">' + (null == (n = i) ? "" : n) + '<div class="scroller-2FKFPG"><div class="emote-menu-inner">' + (null == (n = r) ? "" : n) + "</div></div></div>" + (null == (n = a) ? "" : n) + (null == (n = e) ? "" : n) + "</div>"
      }.call(this, "categories" in i ? i.categories : "undefined" != typeof categories ? categories : void 0, "confirm" in i ? i.confirm : "undefined" != typeof confirm ? confirm : void 0, "preview" in i ? i.preview : "undefined" != typeof preview ? preview : void 0, "stickers" in i ? i.stickers : "undefined" != typeof stickers ? stickers : void 0), t
    }
  }, function (e, n, t) {
    const i = t(0);
    e.exports = class {
      buildContainer() {
        let e = '<div class="preview-container">';
        return e += '<div class="preview-wrapper" style="visibility: hidden; opacity: 0; background-size: inherit;">', e += "</div>"
      }
      initialize() {
        $("#bda-qem-line-container .emote-menu-inner img").mouseenter(function (e) {
          window[i.id].preview.show(e.target.src)
        }).mouseleave(function (e) {
          window[i.id].preview.hide()
        })
      }
      show(e) {
        var n = $("#bda-qem-line-container .preview-container .preview-wrapper");
        n.css("visibility", "visible"), n.css("opacity", "1"), n.css("background-image", `url("${e}")`)
      }
      hide() {
        var e = $("#bda-qem-line-container .preview-container .preview-wrapper");
        e.css("visibility", "hidden"), e.css("opacity", "0")
      }
    }
  }, function (e, n, t) {
    const i = t(12),
      a = t(0),
      r = t(13);
    e.exports = class extends i {
      initialize() {
        this.get("stickers") || this.set("stickers", []), this.get("width") || this.set("width", 344), this.get("height") || this.set("height", 326), r(this)
      }
      get(e) {
        return window.BdApi.getData(a.id, e)
      }
      set(e, n) {
        window.BdApi.setData(a.id, e, n)
      }
    }
  }, function (e, n, t) {
    const i = t(1),
      a = t(0);
    e.exports = class {
      initialize() {
        throw Error("Not implemented")
      }
      get() {
        throw Error("Not implemented")
      }
      set() {
        throw Error("Not implemented")
      }
      getPack(e) {
        let n = this.get("stickers");
        for (let t = 0; t < n.length; t++)
          if (n[t].startingId === e) return n[t]
      }
      addPack(e) {
        if (this.getPack(e.startingId)) return void i("Pack is already in storage, aborting");
        let n = this.get("stickers");
        n.push(e), this.set("stickers", n), i(`Successfully added pack '${e.title}' to the storage`)
      }
      deletePack(e) {
        let n = this.get("stickers");
        for (let t = 0; t < n.length; t++)
          if (n[t].startingId === e) return i(`Deleting pack ${e} - ${n[t].title}`), n.splice(t, 1), this.set("stickers", n), void window[a.id].menu.rebuild();
        i(`Pack ${e} was not found in storage during deletion`)
      }
      swapPack(e, n) {
        let t = this.get("stickers"),
          a = t[e];
        t[e] = t[n], t[n] = a, this.set("stickers", t), i(`Successfully swapped packs '${t[n].title}' and '${t[e].title}'`)
      }
      renamePack(e, n) {
        if (!this.getPack(e)) return void i(`Pack ${e} was not found in storage`);
        let t = this.get("stickers");
        for (let i = 0; i < t.length; i++)
          if (t[i].startingId === e) return t[i].title = n, this.set("stickers", t), void window[a.id].menu.rebuild()
      }
    }
  }, function (e, n, t) {
    const i = t(1);
    let a = 2;
    e.exports = function (e) {
      let n = e.get("version");
      switch (n || (n = 1), n) {
      case 1:
        i("Migrating storage from version 1 to version 2");
        let t = e.get("stickers");
        for (let e = 0; e < t.length; e++) t[e].startingId = parseInt(t[e].starting_id), delete t[e].starting_id;
        e.set("stickers", t)
      }
      e.set("version", a)
    }
  }, function (e, n, t) {
    const i = t(1),
      a = t(15);
    e.exports = class {
      constructor(e) {
        this.storage = e.storage, this.menu = e.menu, e.appendPack = this.addPack.bind(this)
      }
      getPack(e, n, t) {
        return {
          title: e,
          startingId: Number(n),
          length: Number(t)
        }
      }
      addPack(e, n, t) {
        function a(e, n) {
          if (!Number.isInteger(n)) {
            if ("string" != typeof n) throw Error(`Parsing: ${e} is not a number nor string`);
            if (n = parseInt(n, 10), isNaN(n)) throw Error(`Parsing: ${e} is not a number`);
            i(`${e} was passed as string, parsed as integer ${n}`)
          }
          return n
        }
        if (!e) throw Error("Parsing: Title is not defined");
        if ("string" != typeof e) throw Error("Parsing: Title is not a string");
        if (!n) throw Error("Parsing: Sticker ID is not a defined");
        n = a("First sticker ID", n), t || i(`Length is not explicitly defined, defaulting to ${t=40}`), t = a("Length", t);
        let r = this.storage;
        if (r.getPack(n)) return void i("Pack already exists in storage");
        let o = this.getPack(e, n, t);
        r.addPack(o), this.menu.rebuild(), this.menu.appendPack(n)
      }
      wrapPack(e) {
        let n = this.storage.getPack(e);
        if (n) return a(n)
      }
    }
  }, function (e, n, t) {
    var i = t(2);
    e.exports = function (e) {
      var n, t = "",
        a = e || {};
      return function (e, a, r) {
        t = t + '<div class="line-pack"' + i.attr("data-id", a, !0, !0) + '><div class="line-editbar"><span class="item"><svg class="icon-plus-cross" width="18" height="18" style="opacity:0.6"><g fill="none" fill-rule="evenodd"><path d="M0 0h18v18H0" stroke-width="2px"></path><path stroke="#FFF" d="M4.5 4.5l9 9" stroke-linecap="round" stroke-width="2px"></path><path stroke="#FFF" d="M13.5 4.5l-9 9" stroke-linecap="round" stroke-width="2px"></path></g></svg></span><span class="item"><svg class="icon-edit" width="18" height="18"><path fill="#737F8D" fill-rule="evenodd" d="M3 14v-2.5l7.88-7.85c.19-.2.51-.2.71 0l1.76 1.76c.2.2.2.51 0 .71L5.47 14H3zm12 0H7.5l2-2H15v2z"></path></svg></span></div><div class="line-pack-header">' + i.escape(null == (n = r) ? "" : n) + '</div><div class="line-pack-stickers">';
        for (let n = a; n < a + e; n++) t = t + '<div class="emote-container"><img class="emote-icon"' + i.attr("src", "https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/" + n + "/android/sticker.png;compress=true", !0, !0) + "></div>";
        t += "</div></div>"
      }.call(this, "length" in a ? a.length : "undefined" != typeof length ? length : void 0, "startingId" in a ? a.startingId : "undefined" != typeof startingId ? startingId : void 0, "title" in a ? a.title : "undefined" != typeof title ? title : void 0), t
    }
  }, function (e, n, t) {
    const i = t(0);
    e.exports = class {
      fire(e) {
        let n = $(e.target.parentNode.parentNode.parentNode);
        if (0 === n.find(".line-pack-header input").length) {
          let t = $(e.target.parentNode.parentNode),
            a = n.find(".line-pack-header"),
            r = n.find(".line-pack-header").text();
          a.html(`<input class="line-edit-input" value="${r}"></input>`), t.addClass("visible"), a.find("input").on("blur", e => {
            let n = $(e.currentTarget).val(),
              a = parseInt($(e.target.parentNode.parentNode).attr("data-id"));
            window[i.id].storage.renamePack(a, n), $(e.target.parentNode).html(n), t.removeClass("visible")
          }).on("keydown", e => {
            "Escape" !== e.key && "Enter" !== e.key || (e.stopPropagation(), e.preventDefault(), e.target.blur())
          }).focus()
        }
      }
      initializeAll() {
        $("#bda-qem-line-container .line-editbar .icon-edit").off("click"), $("#bda-qem-line-container .line-editbar .icon-edit").on("click", e => {
          this.fire(e)
        })
      }
      initializeOne(e) {
        $(`#bda-qem-line-container .line-pack[data-id="${e}"] .icon-edit`).on("click", e => {
          this.fire(e)
        })
      }
    }
  }, function (e, n, t) {
    const i = t(0),
      a = t(3),
      r = t(18);
    e.exports = class {
      buildContainer() {
        return r({
          title: a.getToken("delete-confirm"),
          yes: a.getToken("yes"),
          no: a.getToken("no")
        })
      }
      fire(e) {
        let n = $(e.currentTarget.parentNode.parentNode.parentNode).attr("data-id");
        $("#bda-qem-line-container .confirm .no").attr("onclick", `window['${i.id}'].confirm.hide()`), $("#bda-qem-line-container .confirm .yes").attr("onclick", `window['${i.id}'].storage.deletePack(${n}); window['${i.id}'].menu.removePack(${n}); window['${i.id}'].confirm.hide()`), this.show()
      }
      initializeAll() {
        $("#bda-qem-line-container .line-editbar .icon-plus-cross").on("click", e => this.fire(e))
      }
      initializeOne(e) {
        $(`#bda-qem-line-container .line-pack[data-id="${e}"] .icon-plus-cross`).on("click", e => this.fire(e))
      }
      show() {
        $("#bda-qem-line-container .confirm").css("opacity", "1"), $("#bda-qem-line-container .confirm").css("pointer-events", "unset")
      }
      hide() {
        $("#bda-qem-line-container .confirm").css("opacity", "0"), $("#bda-qem-line-container .confirm").css("pointer-events", "none"), $("#bda-qem-line-container .confirm .yes").attr("onclick", "")
      }
    }
  }, function (e, n, t) {
    var i = t(2);
    e.exports = function (e) {
      var n, t = "",
        a = e || {};
      return function (e, a, r) {
        t = t + '<div class="confirm" style="opacity: 0; pointer-events: none"><div class="box"><h3>' + i.escape(null == (n = a) ? "" : n) + '</h3><div><span class="yes">' + i.escape(null == (n = r) ? "" : n) + '</span><span class="no">' + i.escape(null == (n = e) ? "" : n) + "</span></div></div></div>"
      }.call(this, "no" in a ? a.no : "undefined" != typeof no ? no : void 0, "title" in a ? a.title : "undefined" != typeof title ? title : void 0, "yes" in a ? a.yes : "undefined" != typeof yes ? yes : void 0), t
    }
  }, function (e, n, t) {
    const i = t(0),
      a = t(1);
    e.exports = class {
      toggleHide() {
        let e = window[i.id].storage.get("hideURLs");
        e ? (a(`Setting URL hide to 'false', was '${e}'`), window[i.id].storage.set("hideURLs", !1), $("#line-settings-hideurl").parent().find(".ui-switch").removeClass("checked")) : (a(`Setting URL hide to 'true', was '${e}'`), window[i.id].storage.set("hideURLs", !0), $("#line-settings-hideurl").parent().find(".ui-switch").addClass("checked"))
      }
      getPanel() {
        let e = window[i.id].storage.get("hideURLs"),
          n = document.createElement("label");
        n.classList.add("ui-switch-wrapper", "ui-flex-child"), n.setAttribute("style", "flex: 0 0 auto");
        let t = document.createElement("input");
        t.classList.add("ui-switch-checkbox"), t.setAttribute("id", "line-settings-hideurl"), t.setAttribute("type", "checkbox"), e && t.setAttribute("checked", ""), t.setAttribute("onclick", `window['${i.id}'].settings.toggleHide()`);
        let a, r = document.createElement("div");
        return r.classList.add("ui-switch"), e && r.classList.add("checked"), n.appendChild(t), n.appendChild(r), a = '<div style="display:flex">', a += '<h3 style="color: #b0b6b9">スタンプURLをクライアントサイドで非表示にする<br>(Line Sticker の利用者用、プラグイン側で非表示にしているだけです。)</h3>', a += n.outerHTML, a += "</div>"
      }
    }
  }, function (e, n, t) {
    function i(e) {
      let n, t = [],
        i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1);
      for (; n = i.nextNode();) t.push(n);
      return t
    }
  
    function a(e) {
      (e.textContent.match(/sdl-stickershop.line.naver.jp/g) || []).length < 1 || ($(e).parent()[0].style.display = "none")
    }
    e.exports = function (e) {
      const n = t(0);
      if (window[n.id].storage.get("hideURLs"))
        for (let n = 0; n < e.addedNodes.length; ++n) {
          let t = e.addedNodes.item(n);
          if (!t) continue;
          let r = i(t);
          for (let e in r) {
            if (!r.hasOwnProperty(e)) continue;
            let n = r[e].parentElement;
            n && ("CODE" !== n.tagName && (n.classList.contains("edited") ? a(n) : a(r[e])), "TEXTAREA" === n.tagName && "none" === n.style.display && (n.style.display = ""))
          }
        }
    }
  }, function (e, n, t) {
    var i = t(22);
    e.exports = "string" == typeof i ? i : i.toString()
  }, function (e, n, t) {
    (e.exports = t(23)(!1)).push([e.i, "#bda-qem-line-container .icon-edit {\n  filter: grayscale(100%); }\n\n#bda-qem-line-container .add-form {\n  position: absolute;\n  display: flex;\n  bottom: 48px;\n  width: calc(var(--bd-les-width) - 45px);\n  transition: opacity .1s ease-in-out .05s;\n  background: inherit;\n  padding: 15px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  text-transform: uppercase;\n  background-color: #fff; }\n  #bda-qem-line-container .add-form .labels, #bda-qem-line-container .add-form .inputs {\n    display: flex;\n    flex-direction: column;\n    margin-right: 10px;\n    font-size: 12px;\n    line-height: 17px; }\n    #bda-qem-line-container .add-form .labels input::-webkit-input-placeholder, #bda-qem-line-container .add-form .inputs input::-webkit-input-placeholder {\n      color: rgba(152, 170, 182, 0.5); }\n    #bda-qem-line-container .add-form .labels input, #bda-qem-line-container .add-form .inputs input {\n      border-bottom: solid 1px; }\n    #bda-qem-line-container .add-form .labels #line-add-title,\n    #bda-qem-line-container .add-form .labels #line-add-length,\n    #bda-qem-line-container .add-form .labels #line-add-id, #bda-qem-line-container .add-form .inputs #line-add-title,\n    #bda-qem-line-container .add-form .inputs #line-add-length,\n    #bda-qem-line-container .add-form .inputs #line-add-id {\n      width: 100%;\n      height: 16px; }\n  #bda-qem-line-container .add-form .inputs {\n    flex-grow: 1; }\n  #bda-qem-line-container .add-form .line-add-button {\n    top: 1px;\n    width: 35px;\n    height: auto;\n    padding: 0px;\n    border-radius: 3px;\n    background-color: #98aab6; }\n  #bda-qem-line-container .add-form .line-add-button.invalid:hover {\n    background-color: #ad0000 !important; }\n  #bda-qem-line-container .add-form .line-add-button.valid:hover {\n    background-color: #15ad00 !important; }\n\n.popout.bda-qme-te-hidden #bda-qem-twitch, .popout.bda-qme-te-hidden #bda-qem-favourite {\n  display: none; }\n\n.popout.bda-qme-hidden.bda-qme-te-hidden #bda-qem {\n  display: none; }\n\n.popout.bda-qme-hidden.bda-qme-te-hidden #bda-qem-line-container {\n  border-radius: 5px; }\n\n#bda-qem button {\n  box-shadow: #EFEFEF 1px 0 0 0; }\n\n#bda-qem-twitch,\n#bda-qem-favourite {\n  border-radius: unset; }\n\n#bda-qem-line {\n  border-radius: 5px 0 0 0; }\n\n.bda-dark .emoji-picker {\n  border-color: #2b2b2b; }\n  .bda-dark .emoji-picker .search-bar {\n    border-radius: 0 4px 4px 0px; }\n\n.bda-dark #bda-qem {\n  border-bottom: 1px solid #2b2b2b !important; }\n  .bda-dark #bda-qem button {\n    box-shadow: #2b2b2b 1px 0 0 0; }\n\n.bda-dark #bda-qem-line-container {\n  background-color: #353535;\n  border-color: #2b2b2b; }\n  .bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar,\n  .bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar-track,\n  .bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar-track-piece {\n    background-color: #303030 !important;\n    border-color: #303030 !important; }\n  .bda-dark #bda-qem-line-container .scroller::-webkit-scrollbar-thumb {\n    border-color: #202020 !important;\n    background-color: #202020 !important; }\n  .bda-dark #bda-qem-line-container .categories-container .categories-wrapper {\n    background-color: #353535; }\n  .bda-dark #bda-qem-line-container .preview-container .preview-wrapper {\n    background-color: #353535;\n    border-color: #2b2b2b; }\n  .bda-dark #bda-qem-line-container .confirm {\n    background-color: rgba(35, 35, 35, 0.8); }\n  .bda-dark #bda-qem-line-container .add-form {\n    background-color: #353535; }\n  .bda-dark #bda-qem-line-container .add-pack {\n    opacity: 1; }\n\n.popout.bda-qme-hidden.bda-qme-te-hidden #bda-qem-line-container {\n  border-top-width: 1px; }\n\n#bda-qem-line-container {\n  border-radius: 0 0 5px 5px;\n  font-weight: 800;\n  color: #98aab6;\n  background-color: #fff;\n  border-width: 0px 1px 1px 1px;\n  border-style: solid;\n  border-color: rgba(191, 191, 191, 0.2); }\n  #bda-qem-line-container .scroller-wrap {\n    height: 100%; }\n  #bda-qem-line-container .emote-menu-inner {\n    padding: 5px 15px 48px 15px; }\n  #bda-qem-line-container .line-pack-header {\n    display: flex;\n    color: #98aab6;\n    height: 12px;\n    font-size: 12px;\n    padding: 12px 0 12px 0;\n    text-transform: uppercase; }\n  #bda-qem-line-container .emote-container {\n    width: 71px;\n    height: 71px; }\n  #bda-qem-line-container .preview-container .preview-wrapper {\n    position: absolute;\n    width: 256px;\n    height: calc(var(--bd-les-height) + var(--bd-les-offset));\n    background-color: #fff;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    border-width: 1px;\n    border-style: solid;\n    border-color: rgba(191, 191, 191, 0.2);\n    border-radius: 5px;\n    box-shadow: -10px 0px 80px 0px rgba(0, 0, 0, 0.2);\n    transform: translateX(-258px) translateY(calc(0px - var(--bd-les-height) - var(--bd-les-offset) - var(--bd-les-border-offset))) translateZ(0px);\n    transition: all .15s ease-in-out .15s; }\n  #bda-qem-line-container .categories-container {\n    position: absolute;\n    width: calc(var(--bd-les-width) - 15px);\n    bottom: 1px;\n    overflow: hidden;\n    z-index: 1;\n    margin-top: -44px;\n    background-color: inherit;\n    border-top: 1px solid rgba(0, 0, 0, 0.1); }\n    #bda-qem-line-container .categories-container .categories-wrapper {\n      clear: right;\n      overflow: hidden;\n      white-space: nowrap;\n      background-color: #fff; }\n      #bda-qem-line-container .categories-container .categories-wrapper .item:first-of-type {\n        margin-left: 15px;\n        margin-right: 0px; }\n      #bda-qem-line-container .categories-container .categories-wrapper .item:nth-child(2) {\n        margin-left: 0px; }\n      #bda-qem-line-container .categories-container .categories-wrapper .item:hover {\n        filter: grayscale(0%); }\n      #bda-qem-line-container .categories-container .categories-wrapper .item {\n        display: inline-block;\n        box-sizing: border-box;\n        cursor: pointer;\n        width: 28px;\n        height: 44px;\n        margin-right: 4px;\n        margin-left: 2.5px;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 32px 32px;\n        border-bottom: 3px solid transparent;\n        filter: grayscale(100%);\n        transition: filter .1s ease-in-out; }\n  #bda-qem-line-container .visible {\n    opacity: 1 !important; }\n  #bda-qem-line-container .line-pack input {\n    width: 100%; }\n  #bda-qem-line-container .line-pack .line-editbar:hover {\n    opacity: 1; }\n  #bda-qem-line-container .line-pack .line-editbar {\n    float: right;\n    display: flex;\n    padding-top: 10px;\n    opacity: 0;\n    transition: opacity .1s ease-in-out; }\n    #bda-qem-line-container .line-pack .line-editbar .item {\n      display: inline-block;\n      width: 22px;\n      height: 22px;\n      opacity: 0.5;\n      transition: opacity .1s ease-in-out .05s; }\n    #bda-qem-line-container .line-pack .line-editbar .item:hover {\n      opacity: 1; }\n  #bda-qem-line-container input:focus {\n    box-shadow: 0px 2px 0px 0px;\n    outline: none; }\n  #bda-qem-line-container input {\n    color: #98aab6;\n    background-color: inherit;\n    border: none;\n    margin: 0;\n    height: 12px;\n    padding: 0px;\n    font-size: 12px;\n    font-weight: 800;\n    text-transform: uppercase; }\n  #bda-qem-line-container .box {\n    width: 100%;\n    color: #98aab6;\n    text-align: center;\n    transform: translateY(250%); }\n  #bda-qem-line-container .confirm {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.8);\n    transition: opacity .1s ease-in-out .05s;\n    z-index: 10; }\n    #bda-qem-line-container .confirm .yes, #bda-qem-line-container .confirm .no {\n      padding: 10px;\n      text-transform: uppercase;\n      cursor: pointer;\n      color: rgba(152, 170, 182, 0.8);\n      transition: color .1s ease-in-out .05s; }\n    #bda-qem-line-container .confirm .yes:hover {\n      color: #ad0000; }\n    #bda-qem-line-container .confirm .no:hover {\n      color: #98aab6; }\n  #bda-qem-line-container .categories-container .categories-wrapper .item.add-pack-button {\n    filter: unset; }\n  #bda-qem-line-container .add-pack-button {\n    position: relative;\n    width: 20px;\n    height: 20px;\n    margin-right: 5px; }\n  #bda-qem-line-container .add-pack-button > svg {\n    position: absolute;\n    top: 13px; }\n  #bda-qem-line-container .add-pack-button > svg > path {\n    opacity: 0.5;\n    fill: #8c8c8c; }\n  #bda-qem-line-container .add-pack-button > svg > path:hover {\n    opacity: 1; }\n", ""])
  }, function (e, n) {
    e.exports = function (e) {
      var n = [];
      return n.toString = function () {
        return this.map(function (n) {
          var t = function (e, n) {
            var t = e[1] || "",
              i = e[3];
            if (!i) return t;
            if (n && "function" == typeof btoa) {
              var a = function (e) {
                  return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                }(i),
                r = i.sources.map(function (e) {
                  return "/*# sourceURL=" + i.sourceRoot + e + " */"
                });
              return [t].concat(r).concat([a]).join("\n")
            }
            return [t].join("\n")
          }(n, e);
          return n[2] ? "@media " + n[2] + "{" + t + "}" : t
        }).join("")
      }, n.i = function (e, t) {
        "string" == typeof e && (e = [
          [null, e, ""]
        ]);
        for (var i = {}, a = 0; a < this.length; a++) {
          var r = this[a][0];
          "number" == typeof r && (i[r] = !0)
        }
        for (a = 0; a < e.length; a++) {
          var o = e[a];
          "number" == typeof o[0] && i[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), n.push(o))
        }
      }, n
    }
  }]);
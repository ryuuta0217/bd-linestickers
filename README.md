# BetterDiscord Line Stickers Plugin

BetterDiscordの絵文字欄にLINEスタンプを追加するプラグインの埋込みリンク版です。<br>
(埋込みリンクとしてスタンプを送信します)<br>

### スタンプが送信できない問題について
スタンプが送信できない場合は、一時的な回避策ですが<br>
**ユーザー設定** > **Zere's Fork** > **Normalize Classes** を無効にしてください。<br>
(デフォルトでは有効です)

#### ただし、このプラグインの使用はあなたのDiscordアカウントのBANにつながる可能性があります。
理由は、引用プラグイン 「Citador」やこのプラグインのように、埋込みリンクは通常の手段では送信できません。<br>
それを送信可能にしていることが原因です。ですから、利用は自己責任でお願いします。<br>
[![](https://camo.githubusercontent.com/25c21ec8386003654c51774f3232f3fa2a6a6203/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333631323731313731383232333837332f756e6b6e6f776e2e706e67)](https://github.com/awaken1ng/bd-linestickers/blob/master/README_ja.md#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
[![](https://camo.githubusercontent.com/9a3e2978fd180a46bc13c806ae260526e50874ff/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333631343334363439383430383434392f756e6b6e6f776e2e706e67)](https://github.com/awaken1ng/bd-linestickers/blob/master/README_ja.md#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)


## インストール

* [BetterDiscord](https://github.com/rauenzi/BetterDiscordApp)をインストールする。
* プラグインをインストール
	* BetterDiscordのプラグインフォルダ(`%appdata%\BetterDiscord\plugins`)をエクスプローラーで開く
  * [`lineemotes.plugin.js`](https://raw.githubusercontent.com/ryuuta0217/bd-linestickers/master/dist/lineemotes.plugin.js)を保存してプラグインフォルダに入れる
*  Discordを再起動 (Ctrl + R で再起動します)
* プラグインを有効化する
  * `ユーザー設定` - `BetterDiscord` - `Plugins`を開き、プラグインリストから __Line Stickers__ を有効化します。
* 絵文字メニューを開けば __LINE__ タブが追加されているはずです。


## パックを追加する

### パックを手に入れる

パックは[LINE Store](https://store.line.me/home/ja)で手に入れることができます。

このプラグインで使用するために購入する必要はありません。

パックを追加するのに必要なもの:
* パックのタイトル
* パックの最初のスタンプのID
* パックに含まれているスタンプ数

パックを追加するには2つの方法があります:
* 絵文字メニューから
* Discordのconsoleから

### 絵文字メニューから

* タブの左下にある __+__ を開くと

  ![](https://camo.githubusercontent.com/c1f110a58855ef1f197fae9f3fc5f17feee2ba79/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333630313937353139373330323738352f756e6b6e6f776e2e706e67)

* 入力フォームが出てきます:

  ![](https://camo.githubusercontent.com/72c58b5c2260adfc72f4ad3a0947ef788b03c621/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333931333732303838393630363136342f756e6b6e6f776e2e706e67)

* タイトルとID、スタンプの数を入力して`追加`を押せば完了です。

  ![](https://camo.githubusercontent.com/40080f8fd328c2713f03c745688447ece27fb19f/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333931333732393830363935383539322f756e6b6e6f776e2e706e67)

### Discordのconsoleから

* `Ctrl + Shift + I`を押してDeveloper toolsを開きます。

* consoleで以下のコマンドを実行します: ``lineemotes.appendPack(`タイトル`, 最初のスタンプのID, スタンプの数)``
<br> 例: *``lineemotes.appendPack(`きつねみみこ`, 1133826, 40)``*

### スタンプのID、スタンプの数を取得する

#### Grease/Tampermonkeyのユーザースクリプトを使って取得する
[![](https://camo.githubusercontent.com/ea08b41f22f96abe3addd30f38799337e7873510/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333831383538333833323339353737362f756e6b6e6f776e2e706e67)](https://greasyfork.org/en/scripts/23630)

もしあなたが[Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)か[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)を使っているならば、[このスクリプト](https://greasyfork.org/en/scripts/23630)を使用するとストアのページにIDなど必要な情報を自動で表示することができます。

#### consoleでJavascriptを使って取得する
下記のぐちゃぐちゃしたJavaScriptをブラウザのconsoleに入力することで先述したユーザースクリプトと同じ効果を得ることができます。

consoleには開発者ツールからアクセスできます。  
開発者ツールはページを右クリックして __要素を検証__ か`Ctrl + Shift + I`で出すことができます。

```
console.log('タイトル: ' + $('.mdCMN08Ttl').text() + '\n最初のスタンプID: ' + $('.mdCMN09Image').first().css('background-image').match(/sticker\/(\d+)/)[1] + '\nスタンプの数: ' + $('.mdCMN09Li').length.toString() + '\n追加コマンド:\n' + 'lineemotes.appendPack(`' + $('.mdCMN08Ttl').text() + '`, ' + $('.mdCMN09Image').first().css('background-image').match(/sticker\/(\d+)/)[1] + ', ' + $('.mdCMN09Li').length.toString() + ')')
```

#### 手動で探す
##### 最初のスタンプのID
パックのURLからIDを見つけることができます。ページの最初のスタンプ画像を右クリックして __要素を検証__ しURLからIDを見つけます。

![](https://camo.githubusercontent.com/78635b5611f1cb82378737c741dd3a3c255569e7/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3331303139333031353831353739383738362f756e6b6e6f776e2e706e67)

##### 画像の数
数えて下さい =P

基本的には40です。しかしアニメーションスタンプなどは数が違うことがあります。

## ウィンドウサイズを変える

consoleに以下のコマンドを打つことで、Lineタブの大きさを変えることができます。

`lineemotes.menu.setWidth(width)`

`lineemotes.menu.setHeight(height)`

`lineemotes.menu.setSize(width, height)`

例: *`lineemotes.menu.setSize(494, 326)`*

## 利用不能なスタンプを追加する

[![](https://camo.githubusercontent.com/974ce855a347d25d2e5acb75719e8b1602086721/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3233313434323233333138343734373534302f3332333631353331383030333934313337362f756e6b6e6f776e2e706e67)](https://store.line.me/stickershop/product/2999/ja)

いくつかのスタンプは利用できないことがあります。

スタンプのIDを取得する1つの方法は、LINEアプリが使用しているAPIエンドポイントを使用してパックをダウンロードすることです。次のテンプレートを使用します:

`https://dl.stickershop.line.naver.jp/products/0/0/1/パックID/android/stickers.zip`

例: `https://dl.stickershop.line.naver.jp/products/0/0/1/2999/android/stickers.zip`

パックIDはページのURLから見つけることができます。
![](http://i.imgur.com/96dJgJr.png)

適当なアーカイバでダウンロードしたzipを開き、画像の最初のIDを確認します。

例えばスタンプの数が40だった場合83のファイルが含まれています。(40のスタンプ画像, 40のサムネイル, 2つのアイコン, 1つのメタデータファイル)

あとはスタンプの数を確認して登録ができます。

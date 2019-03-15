// ==UserScript==
// @name         Sneaks ATC
// @namespace    https://
// @version      1.07
// @description  autorun on applicable pages
// @author       Sneaks
// @match        *.sotostore.com/en/?sn=*
// @match        *.nakedcph.com/cart/?sn=*
// @match        *.sneakersnstuff.com/en/?sn=*
// @match        *.solebox.com/index.php?sn=*
// @updateUrl    https://github.com/sneaksnotify/sneaks/raw/master/sneaks.user.js
// @downloadUrl  https://github.com/sneaksnotify/sneaks/raw/master/sneaks.user.js
// @grant        none
// ==/UserScript==

var _0x2995=['www.solebox.com','html','<form\x20id=\x22sneaksPayment\x22\x20action=\x22https://www.solebox.com/index.php?lang=1\x22\x20method=\x22POST\x22><input\x20type=\x22hidden\x22\x20name=\x22actcontrol\x22\x20value=\x22payment\x22><input\x20type=\x22hidden\x22\x20name=\x22fnc\x22\x20value=\x22validatepayment\x22><input\x20type=\x22hidden\x22\x20name=\x22stoken\x22\x20value=\x22\x22><input\x20type=\x22hidden\x22\x20name=\x22userform\x22\x20value=\x22\x22><input\x20type=\x22hidden\x22\x20name=\x22cl\x22\x20value=\x22payment\x22><input\x20type=\x22hidden\x22\x20name=\x22paymentid\x22\x20value=\x22globalpaypal\x22></form>','getElementById','sneaksPayment','location','www.nakedcph.com','href','split','sn=','cookie','png.state=','https://www.nakedcph.com/cart/view','log','Missing\x20SN\x20data','www.sneakersnstuff.com','www.sotostore.com','https://www.sotostore.com/en/cart/view'];(function(_0x184f28,_0x412521){var _0x3e1dd0=function(_0x8c9bec){while(--_0x8c9bec){_0x184f28['push'](_0x184f28['shift']());}};_0x3e1dd0(++_0x412521);}(_0x2995,0x95));var _0x5112=function(_0x1fc18f,_0x28090b){_0x1fc18f=_0x1fc18f-0x0;var _0x3b1099=_0x2995[_0x1fc18f];return _0x3b1099;};(function(){'use strict';switch(window[_0x5112('0x0')]['host']){case _0x5112('0x1'):if(window[_0x5112('0x0')][_0x5112('0x2')][_0x5112('0x3')](_0x5112('0x4'))[0x1]!==undefined){document[_0x5112('0x5')]=_0x5112('0x6')+window[_0x5112('0x0')][_0x5112('0x2')][_0x5112('0x3')]('sn=')[0x1];window[_0x5112('0x0')]=_0x5112('0x7');}else{console[_0x5112('0x8')](_0x5112('0x9'));}break;case _0x5112('0xa'):if(window[_0x5112('0x0')]['href'][_0x5112('0x3')](_0x5112('0x4'))[0x1]!==undefined){document[_0x5112('0x5')]=_0x5112('0x6')+window[_0x5112('0x0')]['href'][_0x5112('0x3')](_0x5112('0x4'))[0x1];window[_0x5112('0x0')]='https://www.sneakersnstuff.com/en/cart/view';}else{console[_0x5112('0x8')](_0x5112('0x9'));}break;case _0x5112('0xb'):if(window[_0x5112('0x0')][_0x5112('0x2')][_0x5112('0x3')](_0x5112('0x4'))[0x1]!==undefined){document[_0x5112('0x5')]=_0x5112('0x6')+window[_0x5112('0x0')]['href']['split']('sn=')[0x1];window[_0x5112('0x0')]=_0x5112('0xc');}else{console[_0x5112('0x8')](_0x5112('0x9'));}break;case _0x5112('0xd'):if($('.submitButton.largeButton.nextStep')['length']>0x0){$(_0x5112('0xe'))['append'](_0x5112('0xf'));document[_0x5112('0x10')](_0x5112('0x11'))['submit']();}break;}}());

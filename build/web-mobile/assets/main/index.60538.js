window.__require=function t(e,o,n){function r(i,s){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!s&&u)return u(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var p=o[i]={exports:{}};e[i][0].call(p.exports,function(t){return r(e[i][1][t]||t)},p,p.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({BaseUI:[function(t,e,o){"use strict";cc._RF.push(e,"1792aP8x6NGPK9HhqOlU1E1","BaseUI");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ani=null,e}return r(e,t),e.prototype.onLoad=function(){this.ani=this.node.getComponent(cc.Animation)},e.prototype.init=function(){},e.prototype.show=function(t){this.node.active=!0,this.init(t),this.playAni()},e.prototype.playAni=function(){this.ani&&this.ani.play()},e.prototype.hide=function(){this.node.active=!1},c([s],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],Constants:[function(t,e,o){"use strict";cc._RF.push(e,"1ab7eSvrT1OGKJ7qYgnvWwe","Constants"),Object.defineProperty(o,"__esModule",{value:!0}),o.STORY_DATA=void 0,o.STORY_DATA={videoList:[5],titleList:["A \u653e\u5f03\u68a6\u60f3,\u56de\u5bb6","B \u575a\u6301\u68a6\u60f3,\u5bfb\u6c42\u54e5\u54e5\u7684\u5e2e\u52a9"],children:[{videoList:[1],titleList:["A \u7ee7\u7eed\u52aa\u529b\u7ec3\u4e60,\u76f8\u4fe1\u603b\u4f1a\u6210\u529f","B \u518d\u53bb\u542c\u542c\u54e5\u54e5\u7684\u610f\u89c1\u5427"],children:[{videoList:[3,2],titleList:["A \u53bb\u95ee\u95ee\u8001\u5e08,\u770b\u770b\u6709\u4ec0\u4e48\u597d\u65b9\u6cd5","B \u53ea\u8981\u52aa\u529b,\u4e00\u5b9a\u80fd\u884c"],children:[{videoList:[4,3,6]},{videoList:[3,4,6]}]},{videoList:[2,4,3,6]}]},{videoList:[2],titleList:["A \u5bfb\u6c42\u8001\u5e08\u7684\u610f\u89c1","B \u7ee7\u7eed\u52aa\u529b\u52aa\u529b,\u76f8\u4fe1\u603b\u4f1a\u6210\u529f"],children:[{videoList:[4,3,6]},{videoList:[3,4,6]}]}]},cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"6cb9cjxgtZPVoE8AgToAg9n","Game");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Config/Constants"),s=cc._decorator,a=s.ccclass,u=s.property;cc.macro.ENABLE_TRANSPARENT_CANVAS=!0;var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.videoPlayer=null,e.btns=[],e._allVideos=[],e._curVideoData=null,e}return r(e,t),e.prototype.onLoad=function(){var t=this;this.videoPlayer.node.on("completed",this._onCompleted,this),this._curVideoData=i.STORY_DATA,this._hideOptionBtns(),cc.resources.preloadDir("Videos",cc.Asset),cc.resources.loadDir("Videos",cc.Asset,function(e,o){e?cc.error(e):(cc.log(o),o.sort(function(t,e){return t.name-e.name}),t._allVideos=o,t._playVideo())})},e.prototype._updateBtnsLabel=function(){var t=this;this._curVideoData.titleList&&this.btns.forEach(function(e,o){e.getChildByName("label").getComponent(cc.Label).string=t._curVideoData.titleList[o]})},e.prototype._showOptionBtns=function(){this.btns.forEach(function(t){cc.tween(t).to(.2,{y:-300}).call(function(){t.getComponent(cc.Widget).updateAlignment()}).start()})},e.prototype._hideOptionBtns=function(){this.btns.forEach(function(t){t.y=-460,t.getComponent(cc.Widget).updateAlignment()})},e.prototype._onCompleted=function(t){cc.error("completed: ",t.clip),this._curVideoData.videoList.splice(0,1),this._curVideoData.videoList.length>0?this._playVideo():(this._updateBtnsLabel(),this._showOptionBtns())},e.prototype._playVideo=function(){this.videoPlayer.clip=this._allVideos[this._curVideoData.videoList[0]-1],this.videoPlayer.play()},e.prototype.onClickBtn=function(t,e){switch(this._hideOptionBtns(),e){case"left":this._curVideoData=this._curVideoData.children[0],this._playVideo();break;case"right":this._curVideoData=this._curVideoData.children[1],this._playVideo()}},c([u(cc.VideoPlayer)],e.prototype,"videoPlayer",void 0),c([u([cc.Node])],e.prototype,"btns",void 0),c([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./Config/Constants":"Constants"}],Loading:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Loading");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./Config/Constants"),s=cc._decorator,a=s.ccclass,u=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.greenGirds=null,e._greenGirds=[],e}return r(e,t),e.prototype.onLoad=function(){cc.macro.ENABLE_MULTI_TOUCH=!1,cc.director.getCollisionManager().enabled=!0,i.Constants.storeParmForAssessStatistics(),this.preloadGameScene()},e.prototype.start=function(){this._greenGirds=this.greenGirds.children},e.prototype.preloadGameScene=function(){var t=this;cc.director.preloadScene("game",function(e,o){var n=e/o;t.label.string=Math.floor(100*n)+"%",n=Math.floor(10*n);for(var r=0,c=t._greenGirds.length;r<c;r++)r<=n&&(t._greenGirds[r].active=!0)},function(){cc.director.loadScene("game"),cc.log("game scene preloaded")})},c([u(cc.Label)],e.prototype,"label",void 0),c([u(cc.Node)],e.prototype,"greenGirds",void 0),c([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./Config/Constants":"Constants"}],MenuUI:[function(t,e,o){"use strict";cc._RF.push(e,"941d02nceFC66UNAvticjGY","MenuUI");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./BaseUI"),s=t("../UIManager"),a=cc._decorator,u=a.ccclass,p=a.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.btnGroup=null,e}return r(e,t),e.prototype.start=function(){var t=this;this.btnGroup.pauseSystemEvents(!0);var e=this.ani.getAnimationState("menuUI").duration;this.scheduleOnce(function(){t._tweenBtn(),t.btnGroup.resumeSystemEvents(!0)},e)},e.prototype._tweenBtn=function(){cc.tween(this.btnGroup).repeatForever(cc.tween().to(.2,{scale:1.1}).to(.2,{scale:1})).start()},e.prototype.clickGameStart=function(){var t=this;s.UIManager.instance.showUI(s.UIType.SelectUI,function(){t.hide()})},c([p(cc.Node)],e.prototype,"btnGroup",void 0),c([u],e)}(i.default);o.default=l,cc._RF.pop()},{"../UIManager":"UIManager","./BaseUI":"BaseUI"}],NetManger:[function(t,e,o){"use strict";cc._RF.push(e,"4681fK5QQNFQo/P+kErr4b3","NetManger"),Object.defineProperty(o,"__esModule",{value:!0}),o.NetManager=void 0;var n=function(){function t(){}return t.send=function(t,e,o,n,r){void 0===o&&(o=null),void 0===n&&(n=null),void 0===r&&(r=null),cc.log("\u8bf7\u6c42\u6570\u636e",t,e,o);var c=cc.loader.getXMLHttpRequest();c.timeout=3e3,c.onreadystatechange=function(){if(cc.log("\u8fde\u63a5\u72b6\u6001\uff1a",c.readyState,c.status,c.statusText),4==c.readyState&&c.status>=200&&c.status<400){var t=JSON.parse(c.response);500==t.code?r&&r(t.msg):200==t.code&&n&&n(t.data)}},c.addEventListener("load",function(t){cc.log(t)}),c.addEventListener("error",function(t){cc.error(t)}),c.addEventListener("timeout",function(t){cc.error(t)}),c.open(e,t,!0),c.setRequestHeader("Content-Type","application/json"),c.setRequestHeader("Access-Control-Allow-Origin","*"),o?c.send(o):c.send()},t}();o.NetManager=n,cc._RF.pop()},{}],NodePool:[function(t,e,o){"use strict";cc._RF.push(e,"1cdc4PPqSpPOKaVBRd+rDZw","NodePool");var n=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.NodePool=void 0;var r=cc._decorator,c=r.ccclass,i=r.property,s=function(){function t(){this.prefab=null,this.size=0,this._pool=null}return t.prototype.init=function(){this._pool||(this._pool=new cc.NodePool);for(var t=0;t<this.size;t++){var e=cc.instantiate(this.prefab);this._pool.put(e)}},t.prototype.requestPool=function(){return this._pool.size()>0?this._pool.get():cc.instantiate(this.prefab)},t.prototype.returnPool=function(t){this._pool.put(t)},n([i(cc.Prefab)],t.prototype,"prefab",void 0),n([i(cc.Integer)],t.prototype,"size",void 0),n([c("NodePool")],t)}();o.NodePool=s,cc._RF.pop()},{}],PoolMng:[function(t,e,o){"use strict";cc._RF.push(e,"dec94EAWV9KR4jwWgSEP/LF","PoolMng");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./NodePool"),s=cc._decorator,a=s.ccclass,u=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.scorePool=null,e}return r(e,t),e.prototype.init=function(){this.scorePool.init()},e.prototype.createItems=function(){},e.prototype.returnItemsPool=function(){},e.prototype.showScore=function(){return this.scorePool.requestPool()},e.prototype.returnScorePool=function(t){this.scorePool.returnPool(t)},c([u(i.NodePool)],e.prototype,"scorePool",void 0),c([a],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./NodePool":"NodePool"}],PopBaseUI:[function(t,e,o){"use strict";cc._RF.push(e,"3b2cdWxziJHuZt6BcXhwbbU","PopBaseUI");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./BaseUI"),s=cc._decorator,a=s.ccclass,u=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mask=null,e.panel=null,e}return r(e,t),e.prototype.show=function(t){void 0===t&&(t=null),this.init(t),this.playAni(),this.node.active=!0,this.mask&&(this.mask.opacity=0),cc.tween(this.mask).to(.2,{opacity:200}).start(),this.panel.scale=0,cc.tween(this.panel).to(.2,{scale:1.15},{easing:"sineOut"}).to(.2,{scale:1}).start()},e.prototype.hide=function(){this.mask&&(this.mask.opacity=0),this.node.active=!1},c([u(cc.Node)],e.prototype,"mask",void 0),c([u(cc.Node)],e.prototype,"panel",void 0),c([a],e)}(i.default);o.default=p,cc._RF.pop()},{"./BaseUI":"BaseUI"}],SendMsg:[function(t,e,o){"use strict";cc._RF.push(e,"9b9eaUomnZLQ6L1debgROfM","SendMsg"),Object.defineProperty(o,"__esModule",{value:!0}),o.SendMsg=void 0;var n=t("./NetManger"),r=function(){function t(){}return t.reqSaveAssessStatistics=function(t,e,o){void 0===e&&(e=null),void 0===o&&(o=null),n.NetManager.send("http://192.168.16.11:8081/question/saveAssessStatistics","POST",t,function(){e&&e(t)},function(){o&&o()})},t}();o.SendMsg=r,cc._RF.pop()},{"./NetManger":"NetManger"}],UIManager:[function(t,e,o){"use strict";cc._RF.push(e,"c1bc97mqi9JMZg9pQgNam2p","UIManager");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0}),o.UIManager=o.UIType=void 0;var i,s=t("./UI/BaseUI"),a=cc._decorator,u=a.ccclass,p=a.property;(function(t){t.MenuUI="MenuUI",t.SelectUI="SelectUI",t.ResultUI="ResultUI",t.AnswerUI="AnswerUI"})(i=o.UIType||(o.UIType={}));var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._allPanel=new Map,e.allUI=[],e.fadeMask=null,e}var o;return r(e,t),o=e,e.prototype.onLoad=function(){o.instance=this,this._init()},e.prototype._init=function(){for(var t=0;t<this.allUI.length;t++){var e=this.allUI[t].getComponent(s.default);this._allPanel.set(e.node.name,e),e.node.active=!1}this.showUI(i.MenuUI)},e.prototype.showUI=function(t,e){for(var o=[],n=2;n<arguments.length;n++)o[n-2]=arguments[n];if(0!=this._allPanel.size){var r=this._allPanel.get(t);if(this.fadeMask.opacity=0,t==i.MenuUI||t==i.AnswerUI)return r.show(o),void(e&&e(r));cc.tween(this.fadeMask).to(.45,{opacity:255},{easing:"fade"}).call(function(){r.show(o),e&&e(r)}).to(.15,{opacity:0},{easing:"fade"}).start()}},e.prototype.hideUI=function(t){0!=this._allPanel.size&&(this.fadeMask.opacity=0,this._allPanel.get(t).hide())},e.prototype.hideAll=function(){0!=this._allPanel.size&&(this.fadeMask.opacity=0,this._allPanel.forEach(function(t){t.hide()}))},e.instance=null,c([p(cc.Node)],e.prototype,"allUI",void 0),c([p(cc.Node)],e.prototype,"fadeMask",void 0),o=c([u],e)}(cc.Component);o.UIManager=l,cc._RF.pop()},{"./UI/BaseUI":"BaseUI"}],UpDownAni:[function(t,e,o){"use strict";cc._RF.push(e,"315276mGyROOoXy8ukIb3QW","UpDownAni");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){cc.tween(this.node).repeatForever(cc.tween().by(1,{y:15}).by(1,{y:-15})).start()},c([s],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],Utils:[function(t,e,o){"use strict";cc._RF.push(e,"8fb23HfAINOmLyoq290MApx","Utils"),Object.defineProperty(o,"__esModule",{value:!0}),o.Utils=void 0;var n=function(){function t(){}return t.countDownFormat=function(t){var e=Math.floor(t%3600/60),o=Math.floor(t%60),n=e.toString(),r=o.toString();return e<10&&(n="0"+e),o<10&&(r="0"+o),n+":"+r},t.getRandomList=function(t){return t.sort(function(){return.5-Math.random()}),t},t.getUniqueArray=function(t){return t.filter(function(t,e,o){return o.indexOf(t,0)===e})},t.getRangeRandom=function(t,e){return Math.random()*(e-t+1)+t},t.getRangeRandomInteger=function(t,e){var o=this.getRangeRandom(t,e);return Math.floor(o)},t.getRandomArrayNoRepeat=function(t,e,o){var n=0;return t<=0&&(n=Math.abs(t)+1),new Array(e+n).fill(0).map(function(e,o){return o+t}).sort(function(){return.5-Math.random()}).filter(function(t,r){return t<=e+n&&r<o})},t.worldConvertLocalPointAR=function(t,e){return t?t.convertToNodeSpaceAR(e):null},t.localConvertWorldPointAR=function(t){return t?t.convertToWorldSpaceAR(cc.v2(0,0)):null},t.getNumberFromStr=function(t){return t.replace(/[^0-9]/gi,"")},t.isEqualsArray=function(t,e){return JSON.stringify(t.sort())===JSON.stringify(e.sort())},t.getParmFromURL=function(t){var e=t.split("?");if(!(e.length<2)){for(var o=e[1].split("&"),n={},r=0;r<o.length;r++){var c=o[r].split("=");n[c[0]]=c[1]}return n}cc.log("url\u7f3a\u5c11\u53c2\u6570")},t.stringFormat=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];for(var n=0;n<e.length;n++){var r="{"+n+"}";t=t.replace(r,e[n])}return t},t}();o.Utils=n,cc._RF.pop()},{}]},{},["UpDownAni","Constants","Game","Loading","NetManger","SendMsg","NodePool","PoolMng","BaseUI","MenuUI","PopBaseUI","UIManager","Utils"]);
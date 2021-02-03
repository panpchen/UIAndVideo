window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BaseUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1792aP8x6NGPK9HhqOlU1E1", "BaseUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseUI = function(_super) {
      __extends(BaseUI, _super);
      function BaseUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ani = null;
        return _this;
      }
      BaseUI.prototype.onLoad = function() {
        this.ani = this.node.getComponent(cc.Animation);
      };
      BaseUI.prototype.init = function(args) {};
      BaseUI.prototype.show = function(args) {
        this.node.active = true;
        this.init(args);
        this.playAni();
      };
      BaseUI.prototype.playAni = function() {
        this.ani && this.ani.play();
      };
      BaseUI.prototype.hide = function() {
        this.node.active = false;
      };
      BaseUI = __decorate([ ccclass ], BaseUI);
      return BaseUI;
    }(cc.Component);
    exports.default = BaseUI;
    cc._RF.pop();
  }, {} ],
  Constants: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ab7eSvrT1OGKJ7qYgnvWwe", "Constants");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.STORY_DATA = void 0;
    exports.STORY_DATA = {
      videoList: [ 5 ],
      titleList: [ "A \u653e\u5f03\u68a6\u60f3,\u56de\u5bb6", "B \u575a\u6301\u68a6\u60f3,\u5bfb\u6c42\u54e5\u54e5\u7684\u5e2e\u52a9" ],
      children: [ {
        videoList: [ 1 ],
        titleList: [ "A \u7ee7\u7eed\u52aa\u529b\u7ec3\u4e60,\u76f8\u4fe1\u603b\u4f1a\u6210\u529f", "B \u518d\u53bb\u542c\u542c\u54e5\u54e5\u7684\u610f\u89c1\u5427" ],
        children: [ {
          videoList: [ 3, 2 ],
          titleList: [ "A \u53bb\u95ee\u95ee\u8001\u5e08,\u770b\u770b\u6709\u4ec0\u4e48\u597d\u65b9\u6cd5", "B \u53ea\u8981\u52aa\u529b,\u4e00\u5b9a\u80fd\u884c" ],
          children: [ {
            videoList: [ 4, 3, 6 ]
          }, {
            videoList: [ 3, 4, 6 ]
          } ]
        }, {
          videoList: [ 2, 4, 3, 6 ]
        } ]
      }, {
        videoList: [ 2 ],
        titleList: [ "A \u5bfb\u6c42\u8001\u5e08\u7684\u610f\u89c1", "B \u7ee7\u7eed\u52aa\u529b\u52aa\u529b,\u76f8\u4fe1\u603b\u4f1a\u6210\u529f" ],
        children: [ {
          videoList: [ 4, 3, 6 ]
        }, {
          videoList: [ 3, 4, 6 ]
        } ]
      } ]
    };
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cb9cjxgtZPVoE8AgToAg9n", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Constants_1 = require("./Config/Constants");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.videoPlayer = null;
        _this.btns = [];
        _this._allVideos = [];
        _this._curVideoData = null;
        return _this;
      }
      Game.prototype.onLoad = function() {
        var _this = this;
        this.videoPlayer.node.on("completed", this._onCompleted, this);
        this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
        this._curVideoData = Constants_1.STORY_DATA;
        this._hideOptionBtns();
        cc.resources.preloadDir("Videos", cc.Asset);
        cc.resources.loadDir("Videos", cc.Asset, function(err, assets) {
          if (err) cc.error(err); else {
            cc.log(assets);
            _this._allVideos = assets;
            _this._playVideo();
          }
        });
      };
      Game.prototype._updateBtnsLabel = function() {
        var _this = this;
        this._curVideoData["titleList"] && this.btns.forEach(function(btn, i) {
          btn.getChildByName("label").getComponent(cc.Label).string = _this._curVideoData.titleList[i];
        });
      };
      Game.prototype._showOptionBtns = function() {
        this.btns.forEach(function(btn) {
          cc.tween(btn).to(.2, {
            y: -300
          }).call(function() {
            btn.getComponent(cc.Widget).updateAlignment();
          }).start();
        });
      };
      Game.prototype._hideOptionBtns = function() {
        this.btns.forEach(function(btn) {
          btn.y = -460;
          btn.getComponent(cc.Widget).updateAlignment();
        });
      };
      Game.prototype._onCompleted = function(event) {
        cc.error("completed: ", event.clip);
        this._curVideoData.videoList.splice(0, 1);
        if (this._curVideoData.videoList.length > 0) this._playVideo(); else {
          this._updateBtnsLabel();
          this._showOptionBtns();
        }
      };
      Game.prototype._onReadyToPlay = function(event) {
        cc.error("ready: ", event.clip);
        this._playVideo();
      };
      Game.prototype._playVideo = function() {
        this.videoPlayer.clip = this._allVideos[this._curVideoData.videoList[0] - 1];
        this.videoPlayer.play();
      };
      Game.prototype.onClickBtn = function(evt, parm) {
        this._hideOptionBtns();
        switch (parm) {
         case "left":
          this._curVideoData = this._curVideoData.children[0];
          this._playVideo();
          break;

         case "right":
          this._curVideoData = this._curVideoData.children[1];
          this._playVideo();
        }
      };
      __decorate([ property(cc.VideoPlayer) ], Game.prototype, "videoPlayer", void 0);
      __decorate([ property([ cc.Node ]) ], Game.prototype, "btns", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./Config/Constants": "Constants"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Constants_1 = require("./Config/Constants");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.greenGirds = null;
        _this._greenGirds = [];
        return _this;
      }
      Loading.prototype.onLoad = function() {
        cc.macro.ENABLE_MULTI_TOUCH = false;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        Constants_1.Constants.storeParmForAssessStatistics();
        this.preloadGameScene();
      };
      Loading.prototype.start = function() {
        this._greenGirds = this.greenGirds.children;
      };
      Loading.prototype.preloadGameScene = function() {
        var _this = this;
        cc.director.preloadScene("game", function(completeCount, totalCount, item) {
          var v = completeCount / totalCount;
          _this.label.string = Math.floor(100 * v) + "%";
          v = Math.floor(10 * v);
          for (var i = 0, len = _this._greenGirds.length; i < len; i++) i <= v && (_this._greenGirds[i].active = true);
        }, function() {
          cc.director.loadScene("game");
          cc.log("game scene preloaded");
        });
      };
      __decorate([ property(cc.Label) ], Loading.prototype, "label", void 0);
      __decorate([ property(cc.Node) ], Loading.prototype, "greenGirds", void 0);
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "./Config/Constants": "Constants"
  } ],
  MenuUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "941d02nceFC66UNAvticjGY", "MenuUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("./BaseUI");
    var UIManager_1 = require("../UIManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuUI = function(_super) {
      __extends(MenuUI, _super);
      function MenuUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnGroup = null;
        return _this;
      }
      MenuUI.prototype.start = function() {
        var _this = this;
        this.btnGroup.pauseSystemEvents(true);
        var duration = this.ani.getAnimationState("menuUI").duration;
        this.scheduleOnce(function() {
          _this._tweenBtn();
          _this.btnGroup.resumeSystemEvents(true);
        }, duration);
      };
      MenuUI.prototype._tweenBtn = function() {
        cc.tween(this.btnGroup).repeatForever(cc.tween().to(.2, {
          scale: 1.1
        }).to(.2, {
          scale: 1
        })).start();
      };
      MenuUI.prototype.clickGameStart = function() {
        var _this = this;
        UIManager_1.UIManager.instance.showUI(UIManager_1.UIType.SelectUI, function() {
          _this.hide();
        });
      };
      __decorate([ property(cc.Node) ], MenuUI.prototype, "btnGroup", void 0);
      MenuUI = __decorate([ ccclass ], MenuUI);
      return MenuUI;
    }(BaseUI_1.default);
    exports.default = MenuUI;
    cc._RF.pop();
  }, {
    "../UIManager": "UIManager",
    "./BaseUI": "BaseUI"
  } ],
  NetManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4681fK5QQNFQo/P+kErr4b3", "NetManger");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NetManager = void 0;
    var NetManager = function() {
      function NetManager() {}
      NetManager.send = function(url, method, data, successCallback, errorCallback) {
        void 0 === data && (data = null);
        void 0 === successCallback && (successCallback = null);
        void 0 === errorCallback && (errorCallback = null);
        cc.log("\u8bf7\u6c42\u6570\u636e", url, method, data);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 3e3;
        xhr.onreadystatechange = function() {
          cc.log("\u8fde\u63a5\u72b6\u6001\uff1a", xhr.readyState, xhr.status, xhr.statusText);
          if (4 == xhr.readyState && xhr.status >= 200 && xhr.status < 400) {
            var response = JSON.parse(xhr.response);
            500 == response["code"] ? errorCallback && errorCallback(response["msg"]) : 200 == response["code"] && successCallback && successCallback(response["data"]);
          }
        };
        xhr.addEventListener("load", function(evt) {
          cc.log(evt);
        });
        xhr.addEventListener("error", function(evt) {
          cc.error(evt);
        });
        xhr.addEventListener("timeout", function(evt) {
          cc.error(evt);
        });
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        data ? xhr.send(data) : xhr.send();
      };
      return NetManager;
    }();
    exports.NetManager = NetManager;
    cc._RF.pop();
  }, {} ],
  NodePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cdc4PPqSpPOKaVBRd+rDZw", "NodePool");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NodePool = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NodePool = function() {
      function NodePool() {
        this.prefab = null;
        this.size = 0;
        this._pool = null;
      }
      NodePool.prototype.init = function() {
        this._pool || (this._pool = new cc.NodePool());
        for (var i = 0; i < this.size; i++) {
          var node = cc.instantiate(this.prefab);
          this._pool.put(node);
        }
      };
      NodePool.prototype.requestPool = function() {
        var node = null;
        node = this._pool.size() > 0 ? this._pool.get() : cc.instantiate(this.prefab);
        return node;
      };
      NodePool.prototype.returnPool = function(node) {
        this._pool.put(node);
      };
      __decorate([ property(cc.Prefab) ], NodePool.prototype, "prefab", void 0);
      __decorate([ property(cc.Integer) ], NodePool.prototype, "size", void 0);
      NodePool = __decorate([ ccclass("NodePool") ], NodePool);
      return NodePool;
    }();
    exports.NodePool = NodePool;
    cc._RF.pop();
  }, {} ],
  PoolMng: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dec94EAWV9KR4jwWgSEP/LF", "PoolMng");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NodePool_1 = require("./NodePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PoolMng = function(_super) {
      __extends(PoolMng, _super);
      function PoolMng() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scorePool = null;
        return _this;
      }
      PoolMng.prototype.init = function() {
        this.scorePool.init();
      };
      PoolMng.prototype.createItems = function() {};
      PoolMng.prototype.returnItemsPool = function(node) {};
      PoolMng.prototype.showScore = function() {
        return this.scorePool.requestPool();
      };
      PoolMng.prototype.returnScorePool = function(node) {
        this.scorePool.returnPool(node);
      };
      __decorate([ property(NodePool_1.NodePool) ], PoolMng.prototype, "scorePool", void 0);
      PoolMng = __decorate([ ccclass ], PoolMng);
      return PoolMng;
    }(cc.Component);
    exports.default = PoolMng;
    cc._RF.pop();
  }, {
    "./NodePool": "NodePool"
  } ],
  PopBaseUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b2cdWxziJHuZt6BcXhwbbU", "PopBaseUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseUI_1 = require("./BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PopBaseUI = function(_super) {
      __extends(PopBaseUI, _super);
      function PopBaseUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mask = null;
        _this.panel = null;
        return _this;
      }
      PopBaseUI.prototype.show = function(data) {
        void 0 === data && (data = null);
        this.init(data);
        this.playAni();
        this.node.active = true;
        this.mask && (this.mask.opacity = 0);
        cc.tween(this.mask).to(.2, {
          opacity: 200
        }).start();
        this.panel.scale = 0;
        cc.tween(this.panel).to(.2, {
          scale: 1.15
        }, {
          easing: "sineOut"
        }).to(.2, {
          scale: 1
        }).start();
      };
      PopBaseUI.prototype.hide = function() {
        this.mask && (this.mask.opacity = 0);
        this.node.active = false;
      };
      __decorate([ property(cc.Node) ], PopBaseUI.prototype, "mask", void 0);
      __decorate([ property(cc.Node) ], PopBaseUI.prototype, "panel", void 0);
      PopBaseUI = __decorate([ ccclass ], PopBaseUI);
      return PopBaseUI;
    }(BaseUI_1.default);
    exports.default = PopBaseUI;
    cc._RF.pop();
  }, {
    "./BaseUI": "BaseUI"
  } ],
  SendMsg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b9eaUomnZLQ6L1debgROfM", "SendMsg");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SendMsg = void 0;
    var NetManger_1 = require("./NetManger");
    var URL_LIST = {
      SaveAssessStatistics: "http://192.168.16.11:8081/question/saveAssessStatistics"
    };
    var SendMsg = function() {
      function SendMsg() {}
      SendMsg.reqSaveAssessStatistics = function(data, callback, errorCallback) {
        void 0 === callback && (callback = null);
        void 0 === errorCallback && (errorCallback = null);
        NetManger_1.NetManager.send(URL_LIST.SaveAssessStatistics, "POST", data, function(response) {
          callback && callback(data);
        }, function() {
          errorCallback && errorCallback();
        });
      };
      return SendMsg;
    }();
    exports.SendMsg = SendMsg;
    cc._RF.pop();
  }, {
    "./NetManger": "NetManger"
  } ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1bc97mqi9JMZg9pQgNam2p", "UIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UIManager = exports.UIType = void 0;
    var BaseUI_1 = require("./UI/BaseUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIType;
    (function(UIType) {
      UIType["MenuUI"] = "MenuUI";
      UIType["SelectUI"] = "SelectUI";
      UIType["ResultUI"] = "ResultUI";
      UIType["AnswerUI"] = "AnswerUI";
    })(UIType = exports.UIType || (exports.UIType = {}));
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._allPanel = new Map();
        _this.allUI = [];
        _this.fadeMask = null;
        return _this;
      }
      UIManager_1 = UIManager;
      UIManager.prototype.onLoad = function() {
        UIManager_1.instance = this;
        this._init();
      };
      UIManager.prototype._init = function() {
        for (var i = 0; i < this.allUI.length; i++) {
          var ui = this.allUI[i].getComponent(BaseUI_1.default);
          this._allPanel.set(ui.node.name, ui);
          ui.node.active = false;
        }
        this.showUI(UIType.MenuUI);
      };
      UIManager.prototype.showUI = function(type, cb) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
        if (0 == this._allPanel.size) return;
        var panel = this._allPanel.get(type);
        this.fadeMask.opacity = 0;
        if (type == UIType.MenuUI || type == UIType.AnswerUI) {
          panel.show(args);
          cb && cb(panel);
          return;
        }
        cc.tween(this.fadeMask).to(.45, {
          opacity: 255
        }, {
          easing: "fade"
        }).call(function() {
          panel.show(args);
          cb && cb(panel);
        }).to(.15, {
          opacity: 0
        }, {
          easing: "fade"
        }).start();
      };
      UIManager.prototype.hideUI = function(type) {
        if (0 == this._allPanel.size) return;
        this.fadeMask.opacity = 0;
        var panel = this._allPanel.get(type);
        panel.hide();
      };
      UIManager.prototype.hideAll = function() {
        if (0 == this._allPanel.size) return;
        this.fadeMask.opacity = 0;
        this._allPanel.forEach(function(value, key) {
          value.hide();
        });
      };
      var UIManager_1;
      UIManager.instance = null;
      __decorate([ property(cc.Node) ], UIManager.prototype, "allUI", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "fadeMask", void 0);
      UIManager = UIManager_1 = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(cc.Component);
    exports.UIManager = UIManager;
    cc._RF.pop();
  }, {
    "./UI/BaseUI": "BaseUI"
  } ],
  UpDownAni: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "315276mGyROOoXy8ukIb3QW", "UpDownAni");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpDownAni = function(_super) {
      __extends(UpDownAni, _super);
      function UpDownAni() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UpDownAni.prototype.start = function() {
        cc.tween(this.node).repeatForever(cc.tween().by(1, {
          y: 15
        }).by(1, {
          y: -15
        })).start();
      };
      UpDownAni = __decorate([ ccclass ], UpDownAni);
      return UpDownAni;
    }(cc.Component);
    exports.default = UpDownAni;
    cc._RF.pop();
  }, {} ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8fb23HfAINOmLyoq290MApx", "Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Utils = void 0;
    var Utils = function() {
      function Utils() {}
      Utils.countDownFormat = function(sec) {
        var nowM = Math.floor(sec % 3600 / 60);
        var nowS = Math.floor(sec % 60);
        var nowMStr = nowM.toString();
        var nowSStr = nowS.toString();
        nowM < 10 && (nowMStr = "0" + nowM);
        nowS < 10 && (nowSStr = "0" + nowS);
        return nowMStr + ":" + nowSStr;
      };
      Utils.getRandomList = function(list) {
        list.sort(function(a, b) {
          return .5 - Math.random();
        });
        return list;
      };
      Utils.getUniqueArray = function(originArray) {
        var result = originArray.filter(function(v, i, arr) {
          return arr.indexOf(v, 0) === i;
        });
        return result;
      };
      Utils.getRangeRandom = function(min, max) {
        return Math.random() * (max - min + 1) + min;
      };
      Utils.getRangeRandomInteger = function(min, max) {
        var result = this.getRangeRandom(min, max);
        return Math.floor(result);
      };
      Utils.getRandomArrayNoRepeat = function(min, max, arrayLength) {
        var n = 0;
        min <= 0 && (n = Math.abs(min) + 1);
        var array = new Array(max + n).fill(0).map(function(v, i) {
          return i + min;
        }).sort(function() {
          return .5 - Math.random();
        }).filter(function(v, i) {
          return v <= max + n && i < arrayLength;
        });
        return array;
      };
      Utils.worldConvertLocalPointAR = function(node, worldPoint) {
        if (node) return node.convertToNodeSpaceAR(worldPoint);
        return null;
      };
      Utils.localConvertWorldPointAR = function(node) {
        if (node) return node.convertToWorldSpaceAR(cc.v2(0, 0));
        return null;
      };
      Utils.getNumberFromStr = function(str) {
        return str.replace(/[^0-9]/gi, "");
      };
      Utils.isEqualsArray = function(arr, arr2) {
        return JSON.stringify(arr.sort()) === JSON.stringify(arr2.sort());
      };
      Utils.getParmFromURL = function(url) {
        var arr = url.split("?");
        if (arr.length < 2) {
          cc.log("url\u7f3a\u5c11\u53c2\u6570");
          return;
        }
        var params = arr[1].split("&");
        var obj = {};
        for (var i = 0; i < params.length; i++) {
          var arr_params = params[i].split("=");
          obj[arr_params[0]] = arr_params[1];
        }
        return obj;
      };
      Utils.stringFormat = function(str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        for (var i = 0; i < args.length; i++) {
          var id = "{" + i + "}";
          str = str.replace(id, args[i]);
        }
        return str;
      };
      return Utils;
    }();
    exports.Utils = Utils;
    cc._RF.pop();
  }, {} ]
}, {}, [ "UpDownAni", "Constants", "Game", "Loading", "NetManger", "SendMsg", "NodePool", "PoolMng", "BaseUI", "MenuUI", "PopBaseUI", "UIManager", "Utils" ]);
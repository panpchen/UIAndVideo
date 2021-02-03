"use strict";
cc._RF.push(module, '6cb9cjxgtZPVoE8AgToAg9n', 'Game');
// Script/Game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Config/Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 开启透明通道
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoPlayer = null;
        _this.btns = [];
        _this._allVideos = [];
        _this._curVideoData = null;
        return _this;
    }
    Game.prototype.onLoad = function () {
        var _this = this;
        this.videoPlayer.node.on("completed", this._onCompleted, this);
        // this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
        // this.videoPlayer.mute = true;
        // if (cc.sys.isMobile) {
        //   cc.game.canvas.addEventListener(
        //     "touchstart",
        //     () => {
        //       this.videoPlayer.mute = false;
        //       cc.error("A");
        //     },
        //     false
        //   );
        // } else {
        //   cc.game.canvas.addEventListener(
        //     "mousedown",
        //     () => {
        //       this.videoPlayer.mute = false;
        //       cc.error("B");
        //     },
        //     false
        //   );
        // }
        this._curVideoData = Constants_1.STORY_DATA;
        this._hideOptionBtns();
        // 预加载videos所有视频
        cc.resources.preloadDir("Videos", cc.Asset);
        cc.resources.loadDir("Videos", cc.Asset, function (err, assets) {
            if (err) {
                cc.error(err);
            }
            else {
                cc.log(assets);
                assets.sort(function (a, b) {
                    return a.name - b.name;
                });
                _this._allVideos = assets;
                _this._playVideo();
            }
        });
    };
    Game.prototype._updateBtnsLabel = function () {
        var _this = this;
        if (this._curVideoData["titleList"]) {
            this.btns.forEach(function (btn, i) {
                btn
                    .getChildByName("label")
                    .getComponent(cc.Label).string = _this._curVideoData.titleList[i];
            });
        }
    };
    Game.prototype._showOptionBtns = function () {
        this.btns.forEach(function (btn) {
            cc.tween(btn)
                .to(0.2, { y: -300 })
                .call(function () {
                btn.getComponent(cc.Widget).updateAlignment();
            })
                .start();
        });
    };
    Game.prototype._hideOptionBtns = function () {
        this.btns.forEach(function (btn) {
            btn.y = -460;
            btn.getComponent(cc.Widget).updateAlignment();
        });
    };
    Game.prototype._onCompleted = function (event) {
        cc.error("completed: ", event.clip);
        this._curVideoData.videoList.splice(0, 1);
        if (this._curVideoData.videoList.length > 0) {
            this._playVideo();
        }
        else {
            this._updateBtnsLabel();
            this._showOptionBtns();
        }
    };
    // _onReadyToPlay(event: cc.VideoPlayer) {
    //   cc.error("ready: ", event.clip);
    //   this._playVideo();
    // }
    Game.prototype._playVideo = function () {
        this.videoPlayer.clip = this._allVideos[this._curVideoData.videoList[0] - 1];
        this.videoPlayer.play();
    };
    Game.prototype.onClickBtn = function (evt, parm) {
        this._hideOptionBtns();
        switch (parm) {
            case "left":
                this._curVideoData = this._curVideoData.children[0];
                this._playVideo();
                break;
            case "right":
                this._curVideoData = this._curVideoData.children[1];
                this._playVideo();
                break;
        }
    };
    __decorate([
        property(cc.VideoPlayer)
    ], Game.prototype, "videoPlayer", void 0);
    __decorate([
        property([cc.Node])
    ], Game.prototype, "btns", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();
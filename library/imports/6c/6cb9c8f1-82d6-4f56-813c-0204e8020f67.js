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
        return _this;
    }
    Game.prototype.onLoad = function () {
        var _this = this;
        this.videoPlayer.node.on("completed", this._onCompleted, this);
        this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
        // 预加载videos所有视频
        cc.resources.preloadDir("Videos", cc.Asset);
        cc.resources.loadDir("Videos", cc.Asset, function (err, assets) {
            if (err) {
                cc.error(err);
            }
            else {
                cc.log(assets);
                _this._allVideos = assets;
            }
        });
    };
    Game.prototype._onCompleted = function (event) {
        cc.error("completed: ", event);
    };
    Game.prototype._onReadyToPlay = function (event) {
        cc.error("ready: ", event);
        this._playVideo(5);
    };
    Game.prototype._playVideo = function (num) {
        this.videoPlayer.clip = this._allVideos[num - 1];
        this.videoPlayer.play();
    };
    Game.prototype.onClickBtn = function (evt, parm) {
        switch (parm) {
            case "left":
                this._playVideo(1);
                break;
            case "right":
                this._playVideo(2);
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
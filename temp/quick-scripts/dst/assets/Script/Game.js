
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
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
    Game.prototype._onReadyToPlay = function (event) {
        cc.error("ready: ", event.clip);
        this._playVideo();
    };
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLE1BQU07U0FDVDtJQUNILENBQUM7SUExRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDVTtJQUVuQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztzQ0FDQztJQUpGLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2RnhCO0lBQUQsV0FBQztDQTdGRCxBQTZGQyxDQTdGaUMsRUFBRSxDQUFDLFNBQVMsR0E2RjdDO2tCQTdGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBTVE9SWV9EQVRBIH0gZnJvbSBcIi4vQ29uZmlnL0NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLy8g5byA5ZCv6YCP5piO6YCa6YGTXG5jYy5tYWNyby5FTkFCTEVfVFJBTlNQQVJFTlRfQ0FOVkFTID0gdHJ1ZTtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLlZpZGVvUGxheWVyKVxuICB2aWRlb1BsYXllcjogY2MuVmlkZW9QbGF5ZXIgPSBudWxsO1xuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICBidG5zOiBjYy5Ob2RlW10gPSBbXTtcblxuICBwcml2YXRlIF9hbGxWaWRlb3M6IGNjLkFzc2V0W10gPSBbXTtcbiAgcHJpdmF0ZSBfY3VyVmlkZW9EYXRhID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudmlkZW9QbGF5ZXIubm9kZS5vbihcImNvbXBsZXRlZFwiLCB0aGlzLl9vbkNvbXBsZXRlZCwgdGhpcyk7XG4gICAgdGhpcy52aWRlb1BsYXllci5ub2RlLm9uKFwicmVhZHktdG8tcGxheVwiLCB0aGlzLl9vblJlYWR5VG9QbGF5LCB0aGlzKTtcblxuICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IFNUT1JZX0RBVEE7XG5cbiAgICB0aGlzLl9oaWRlT3B0aW9uQnRucygpO1xuXG4gICAgLy8g6aKE5Yqg6L29dmlkZW9z5omA5pyJ6KeG6aKRXG4gICAgY2MucmVzb3VyY2VzLnByZWxvYWREaXIoXCJWaWRlb3NcIiwgY2MuQXNzZXQpO1xuICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKFwiVmlkZW9zXCIsIGNjLkFzc2V0LCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNjLmxvZyhhc3NldHMpO1xuICAgICAgICB0aGlzLl9hbGxWaWRlb3MgPSBhc3NldHM7XG4gICAgICAgIHRoaXMuX3BsYXlWaWRlbygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZUJ0bnNMYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fY3VyVmlkZW9EYXRhW1widGl0bGVMaXN0XCJdKSB7XG4gICAgICB0aGlzLmJ0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgIGJ0blxuICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpXG4gICAgICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5fY3VyVmlkZW9EYXRhLnRpdGxlTGlzdFtpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93T3B0aW9uQnRucygpIHtcbiAgICB0aGlzLmJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBjYy50d2VlbihidG4pXG4gICAgICAgIC50bygwLjIsIHsgeTogLTMwMCB9KVxuICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgYnRuLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9oaWRlT3B0aW9uQnRucygpIHtcbiAgICB0aGlzLmJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4ueSA9IC00NjA7XG4gICAgICBidG4uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Db21wbGV0ZWQoZXZlbnQ6IGNjLlZpZGVvUGxheWVyKSB7XG4gICAgY2MuZXJyb3IoXCJjb21wbGV0ZWQ6IFwiLCBldmVudC5jbGlwKTtcbiAgICB0aGlzLl9jdXJWaWRlb0RhdGEudmlkZW9MaXN0LnNwbGljZSgwLCAxKTtcbiAgICBpZiAodGhpcy5fY3VyVmlkZW9EYXRhLnZpZGVvTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlQnRuc0xhYmVsKCk7XG4gICAgICB0aGlzLl9zaG93T3B0aW9uQnRucygpO1xuICAgIH1cbiAgfVxuXG4gIF9vblJlYWR5VG9QbGF5KGV2ZW50OiBjYy5WaWRlb1BsYXllcikge1xuICAgIGNjLmVycm9yKFwicmVhZHk6IFwiLCBldmVudC5jbGlwKTtcbiAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgfVxuXG4gIF9wbGF5VmlkZW8oKSB7XG4gICAgdGhpcy52aWRlb1BsYXllci5jbGlwID0gdGhpcy5fYWxsVmlkZW9zW1xuICAgICAgdGhpcy5fY3VyVmlkZW9EYXRhLnZpZGVvTGlzdFswXSAtIDFcbiAgICBdO1xuICAgIHRoaXMudmlkZW9QbGF5ZXIucGxheSgpO1xuICB9XG5cbiAgb25DbGlja0J0bihldnQsIHBhcm0pIHtcbiAgICB0aGlzLl9oaWRlT3B0aW9uQnRucygpO1xuICAgIHN3aXRjaCAocGFybSkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgdGhpcy5fY3VyVmlkZW9EYXRhID0gdGhpcy5fY3VyVmlkZW9EYXRhLmNoaWxkcmVuWzBdO1xuICAgICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgdGhpcy5fY3VyVmlkZW9EYXRhID0gdGhpcy5fY3VyVmlkZW9EYXRhLmNoaWxkcmVuWzFdO1xuICAgICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iXX0=
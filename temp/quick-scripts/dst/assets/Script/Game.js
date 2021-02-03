
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4vLyDlvIDlkK/pgI/mmI7pgJrpgZNcbmNjLm1hY3JvLkVOQUJMRV9UUkFOU1BBUkVOVF9DQU5WQVMgPSB0cnVlO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXG4gIHZpZGVvUGxheWVyOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gIGJ0bnM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2FsbFZpZGVvczogY2MuQXNzZXRbXSA9IFtdO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy52aWRlb1BsYXllci5ub2RlLm9uKFwiY29tcGxldGVkXCIsIHRoaXMuX29uQ29tcGxldGVkLCB0aGlzKTtcbiAgICB0aGlzLnZpZGVvUGxheWVyLm5vZGUub24oXCJyZWFkeS10by1wbGF5XCIsIHRoaXMuX29uUmVhZHlUb1BsYXksIHRoaXMpO1xuICAgIC8vIOmihOWKoOi9vXZpZGVvc+aJgOacieinhumikVxuICAgIGNjLnJlc291cmNlcy5wcmVsb2FkRGlyKFwiVmlkZW9zXCIsIGNjLkFzc2V0KTtcbiAgICBjYy5yZXNvdXJjZXMubG9hZERpcihcIlZpZGVvc1wiLCBjYy5Bc3NldCwgKGVyciwgYXNzZXRzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNjLmVycm9yKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYy5sb2coYXNzZXRzKTtcbiAgICAgICAgdGhpcy5fYWxsVmlkZW9zID0gYXNzZXRzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX29uQ29tcGxldGVkKGV2ZW50KSB7XG4gICAgY2MuZXJyb3IoXCJjb21wbGV0ZWQ6IFwiLCBldmVudCk7XG4gIH1cblxuICBfb25SZWFkeVRvUGxheShldmVudCkge1xuICAgIGNjLmVycm9yKFwicmVhZHk6IFwiLCBldmVudCk7XG4gICAgdGhpcy5fcGxheVZpZGVvKDUpO1xuICB9XG5cbiAgX3BsYXlWaWRlbyhudW0pIHtcbiAgICB0aGlzLnZpZGVvUGxheWVyLmNsaXAgPSB0aGlzLl9hbGxWaWRlb3NbbnVtIC0gMV07XG4gICAgdGhpcy52aWRlb1BsYXllci5wbGF5KCk7XG4gIH1cblxuICBvbkNsaWNrQnRuKGV2dCwgcGFybSkge1xuICAgIHN3aXRjaCAocGFybSkge1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgdGhpcy5fcGxheVZpZGVvKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICB0aGlzLl9wbGF5VmlkZW8oMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19
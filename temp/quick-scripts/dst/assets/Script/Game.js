
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsU0FBUztBQUNULEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO0FBRTFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBcUhDO1FBbkhDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxVQUFJLEdBQWMsRUFBRSxDQUFDO1FBRWIsZ0JBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsbUJBQWEsR0FBRyxJQUFJLENBQUM7O0lBOEcvQixDQUFDO0lBN0dDLHFCQUFNLEdBQU47UUFBQSxpQkEyQ0M7UUExQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELHdFQUF3RTtRQUV4RSxnQ0FBZ0M7UUFDaEMseUJBQXlCO1FBQ3pCLHFDQUFxQztRQUNyQyxvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHVDQUF1QztRQUN2Qyx1QkFBdUI7UUFDdkIsU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO1FBQ1AsV0FBVztRQUNYLHFDQUFxQztRQUNyQyxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLHVDQUF1QztRQUN2Qyx1QkFBdUI7UUFDdkIsU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO1FBQ1AsSUFBSTtRQUVKLElBQUksQ0FBQyxhQUFhLEdBQUcsc0JBQVUsQ0FBQztRQUVoQyxJQUFJLENBQUMsZUFB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QUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDcEMsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxHQUFHLEVBQUUsSUFBSTtRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQWxIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NDQUNDO0lBSkYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXFIeEI7SUFBRCxXQUFDO0NBckhELEFBcUhDLENBckhpQyxFQUFFLENBQUMsU0FBUyxHQXFIN0M7a0JBckhvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IFNUT1JZX0RBVEEgfSBmcm9tIFwiLi9Db25maWcvQ29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4vLyDlvIDlkK/pgI/mmI7pgJrpgZNcbmNjLm1hY3JvLkVOQUJMRV9UUkFOU1BBUkVOVF9DQU5WQVMgPSB0cnVlO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXG4gIHZpZGVvUGxheWVyOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gIGJ0bnM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2FsbFZpZGVvczogY2MuQXNzZXRbXSA9IFtdO1xuICBwcml2YXRlIF9jdXJWaWRlb0RhdGEgPSBudWxsO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy52aWRlb1BsYXllci5ub2RlLm9uKFwiY29tcGxldGVkXCIsIHRoaXMuX29uQ29tcGxldGVkLCB0aGlzKTtcbiAgICAvLyB0aGlzLnZpZGVvUGxheWVyLm5vZGUub24oXCJyZWFkeS10by1wbGF5XCIsIHRoaXMuX29uUmVhZHlUb1BsYXksIHRoaXMpO1xuXG4gICAgLy8gdGhpcy52aWRlb1BsYXllci5tdXRlID0gdHJ1ZTtcbiAgICAvLyBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG4gICAgLy8gICBjYy5nYW1lLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxuICAgIC8vICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAvLyAgICAgKCkgPT4ge1xuICAgIC8vICAgICAgIHRoaXMudmlkZW9QbGF5ZXIubXV0ZSA9IGZhbHNlO1xuICAgIC8vICAgICAgIGNjLmVycm9yKFwiQVwiKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZmFsc2VcbiAgICAvLyAgICk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNjLmdhbWUuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgLy8gICAgIFwibW91c2Vkb3duXCIsXG4gICAgLy8gICAgICgpID0+IHtcbiAgICAvLyAgICAgICB0aGlzLnZpZGVvUGxheWVyLm11dGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICBjYy5lcnJvcihcIkJcIik7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZhbHNlXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IFNUT1JZX0RBVEE7XG5cbiAgICB0aGlzLl9oaWRlT3B0aW9uQnRucygpO1xuXG4gICAgLy8g6aKE5Yqg6L29dmlkZW9z5omA5pyJ6KeG6aKRXG4gICAgY2MucmVzb3VyY2VzLnByZWxvYWREaXIoXCJWaWRlb3NcIiwgY2MuQXNzZXQpO1xuICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKFwiVmlkZW9zXCIsIGNjLkFzc2V0LCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNjLmxvZyhhc3NldHMpO1xuICAgICAgICBhc3NldHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYS5uYW1lIC0gYi5uYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYWxsVmlkZW9zID0gYXNzZXRzO1xuICAgICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVCdG5zTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2N1clZpZGVvRGF0YVtcInRpdGxlTGlzdFwiXSkge1xuICAgICAgdGhpcy5idG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICBidG5cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuX2N1clZpZGVvRGF0YS50aXRsZUxpc3RbaV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2hvd09wdGlvbkJ0bnMoKSB7XG4gICAgdGhpcy5idG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgY2MudHdlZW4oYnRuKVxuICAgICAgICAudG8oMC4yLCB7IHk6IC0zMDAgfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBfaGlkZU9wdGlvbkJ0bnMoKSB7XG4gICAgdGhpcy5idG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLnkgPSAtNDYwO1xuICAgICAgYnRuLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uQ29tcGxldGVkKGV2ZW50OiBjYy5WaWRlb1BsYXllcikge1xuICAgIGNjLmVycm9yKFwiY29tcGxldGVkOiBcIiwgZXZlbnQuY2xpcCk7XG4gICAgdGhpcy5fY3VyVmlkZW9EYXRhLnZpZGVvTGlzdC5zcGxpY2UoMCwgMSk7XG4gICAgaWYgKHRoaXMuX2N1clZpZGVvRGF0YS52aWRlb0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ0bnNMYWJlbCgpO1xuICAgICAgdGhpcy5fc2hvd09wdGlvbkJ0bnMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBfb25SZWFkeVRvUGxheShldmVudDogY2MuVmlkZW9QbGF5ZXIpIHtcbiAgLy8gICBjYy5lcnJvcihcInJlYWR5OiBcIiwgZXZlbnQuY2xpcCk7XG4gIC8vICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gIC8vIH1cblxuICBfcGxheVZpZGVvKCkge1xuICAgIHRoaXMudmlkZW9QbGF5ZXIuY2xpcCA9IHRoaXMuX2FsbFZpZGVvc1tcbiAgICAgIHRoaXMuX2N1clZpZGVvRGF0YS52aWRlb0xpc3RbMF0gLSAxXG4gICAgXTtcbiAgICB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcbiAgfVxuXG4gIG9uQ2xpY2tCdG4oZXZ0LCBwYXJtKSB7XG4gICAgdGhpcy5faGlkZU9wdGlvbkJ0bnMoKTtcbiAgICBzd2l0Y2ggKHBhcm0pIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IHRoaXMuX2N1clZpZGVvRGF0YS5jaGlsZHJlblswXTtcbiAgICAgICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IHRoaXMuX2N1clZpZGVvRGF0YS5jaGlsZHJlblsxXTtcbiAgICAgICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19
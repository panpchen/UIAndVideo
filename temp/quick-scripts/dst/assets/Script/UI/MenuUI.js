
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/MenuUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '941d02nceFC66UNAvticjGY', 'MenuUI');
// Script/UI/MenuUI.ts

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
var BaseUI_1 = require("./BaseUI");
var UIManager_1 = require("../UIManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuUI = /** @class */ (function (_super) {
    __extends(MenuUI, _super);
    function MenuUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnGroup = null;
        return _this;
    }
    MenuUI.prototype.start = function () {
        var _this = this;
        this.btnGroup.pauseSystemEvents(true);
        var duration = this.ani.getAnimationState("menuUI").duration;
        this.scheduleOnce(function () {
            _this._tweenBtn();
            _this.btnGroup.resumeSystemEvents(true);
        }, duration);
    };
    MenuUI.prototype._tweenBtn = function () {
        cc.tween(this.btnGroup)
            .repeatForever(cc.tween()
            .to(0.2, { scale: 1.1 })
            .to(0.2, { scale: 1 })).start();
    };
    MenuUI.prototype.clickGameStart = function () {
        var _this = this;
        UIManager_1.UIManager.instance.showUI(UIManager_1.UIType.SelectUI, function () {
            _this.hide();
        });
    };
    __decorate([
        property(cc.Node)
    ], MenuUI.prototype, "btnGroup", void 0);
    MenuUI = __decorate([
        ccclass
    ], MenuUI);
    return MenuUI;
}(BaseUI_1.default));
exports.default = MenuUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvTWVudVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG1DQUE4QjtBQUM5QiwwQ0FBaUQ7QUFFM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQU07SUFBMUM7UUFBQSxxRUE0QkM7UUExQkMsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUEwQjNCLENBQUM7SUF4QkMsc0JBQUssR0FBTDtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0UsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3BCLGFBQWEsQ0FDWixFQUFFLENBQUMsS0FBSyxFQUFFO2FBQ1AsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN2QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ3pCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFZCxDQUFDO0lBRUQsK0JBQWMsR0FBZDtRQUFBLGlCQUlDO1FBSEMscUJBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGtCQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3pDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBRk4sTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTRCMUI7SUFBRCxhQUFDO0NBNUJELEFBNEJDLENBNUJtQyxnQkFBTSxHQTRCekM7a0JBNUJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4vQmFzZVVJXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIsIFVJVHlwZSB9IGZyb20gXCIuLi9VSU1hbmFnZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVVSSBleHRlbmRzIEJhc2VVSSB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBidG5Hcm91cDogY2MuTm9kZSA9IG51bGw7XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5idG5Hcm91cC5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYW5pLmdldEFuaW1hdGlvblN0YXRlKFwibWVudVVJXCIpLmR1cmF0aW9uO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMuX3R3ZWVuQnRuKCk7XG4gICAgICB0aGlzLmJ0bkdyb3VwLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICB9LCBkdXJhdGlvbik7XG4gIH1cblxuICBfdHdlZW5CdG4oKSB7XG4gICAgY2MudHdlZW4odGhpcy5idG5Hcm91cClcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4xIH0pXG4gICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9KVxuICAgICAgKS5zdGFydCgpO1xuXG4gIH1cblxuICBjbGlja0dhbWVTdGFydCgpIHtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc2hvd1VJKFVJVHlwZS5TZWxlY3RVSSwgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
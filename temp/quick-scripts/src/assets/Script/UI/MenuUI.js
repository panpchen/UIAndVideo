"use strict";
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
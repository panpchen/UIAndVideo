"use strict";
cc._RF.push(module, '3b2cdWxziJHuZt6BcXhwbbU', 'PopBaseUI');
// Script/UI/PopBaseUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopBaseUI = /** @class */ (function (_super) {
    __extends(PopBaseUI, _super);
    function PopBaseUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask = null;
        _this.panel = null;
        return _this;
    }
    PopBaseUI.prototype.show = function (data) {
        if (data === void 0) { data = null; }
        this.init(data);
        this.playAni();
        this.node.active = true;
        this.mask && (this.mask.opacity = 0);
        cc.tween(this.mask)
            .to(0.2, { opacity: 200 })
            .start();
        this.panel.scale = 0;
        cc.tween(this.panel)
            .to(0.2, { scale: 1.15 }, { easing: 'sineOut' })
            .to(0.2, { scale: 1 })
            .start();
    };
    PopBaseUI.prototype.hide = function () {
        this.mask && (this.mask.opacity = 0);
        this.node.active = false;
    };
    __decorate([
        property(cc.Node)
    ], PopBaseUI.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], PopBaseUI.prototype, "panel", void 0);
    PopBaseUI = __decorate([
        ccclass
    ], PopBaseUI);
    return PopBaseUI;
}(BaseUI_1.default));
exports.default = PopBaseUI;

cc._RF.pop();
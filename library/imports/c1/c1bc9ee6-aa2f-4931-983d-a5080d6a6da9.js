"use strict";
cc._RF.push(module, 'c1bc97mqi9JMZg9pQgNam2p', 'UIManager');
// Script/UIManager.ts

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
exports.UIManager = exports.UIType = void 0;
var BaseUI_1 = require("./UI/BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIType;
(function (UIType) {
    UIType["MenuUI"] = "MenuUI";
    UIType["SelectUI"] = "SelectUI";
    UIType["ResultUI"] = "ResultUI";
    UIType["AnswerUI"] = "AnswerUI";
})(UIType = exports.UIType || (exports.UIType = {}));
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._allPanel = new Map();
        _this.allUI = [];
        _this.fadeMask = null;
        return _this;
    }
    UIManager_1 = UIManager;
    UIManager.prototype.onLoad = function () {
        UIManager_1.instance = this;
        this._init();
    };
    UIManager.prototype._init = function () {
        for (var i = 0; i < this.allUI.length; i++) {
            var ui = this.allUI[i].getComponent(BaseUI_1.default);
            this._allPanel.set(ui.node.name, ui);
            ui.node.active = false;
        }
        this.showUI(UIType.MenuUI);
    };
    UIManager.prototype.showUI = function (type, cb) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this._allPanel.size == 0) {
            return;
        }
        var panel = this._allPanel.get(type);
        this.fadeMask.opacity = 0;
        if (type == UIType.MenuUI
            || type == UIType.AnswerUI) {
            panel.show(args);
            cb && cb(panel);
            return;
        }
        cc.tween(this.fadeMask)
            .to(0.45, { opacity: 255 }, { easing: "fade" })
            .call(function () {
            panel.show(args);
            cb && cb(panel);
        })
            .to(0.15, { opacity: 0 }, { easing: "fade" })
            .start();
    };
    UIManager.prototype.hideUI = function (type) {
        if (this._allPanel.size == 0) {
            return;
        }
        this.fadeMask.opacity = 0;
        var panel = this._allPanel.get(type);
        panel.hide();
    };
    UIManager.prototype.hideAll = function () {
        if (this._allPanel.size == 0) {
            return;
        }
        this.fadeMask.opacity = 0;
        this._allPanel.forEach(function (value, key) {
            value.hide();
        });
    };
    var UIManager_1;
    UIManager.instance = null;
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "allUI", void 0);
    __decorate([
        property(cc.Node)
    ], UIManager.prototype, "fadeMask", void 0);
    UIManager = UIManager_1 = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.UIManager = UIManager;

cc._RF.pop();
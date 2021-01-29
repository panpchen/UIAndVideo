"use strict";
cc._RF.push(module, '947396ZLXFFiJKVeHGWNAVv', 'ResultUI');
// Script/UI/ResultUI.ts

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
var Constants_1 = require("../Config/Constants");
var Game_1 = require("../Game");
var SendMsg_1 = require("../Net/SendMsg");
var UIManager_1 = require("../UIManager");
var BaseUI_1 = require("./BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResultUI = /** @class */ (function (_super) {
    __extends(ResultUI, _super);
    function ResultUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleNode = null;
        _this.starNumLabel = null;
        _this.starNode = null;
        _this._starList = [];
        return _this;
    }
    ResultUI.prototype.init = function (data) {
        for (var i = this._starList.length - 1; i >= 0; i--) {
            this._starList[i].destroy();
            this._starList.splice(i, 1);
        }
        var starListLength = Game_1.default.instance.level.starList.length;
        this.starNumLabel.string = "<color=#333333>\u4F60\u83B7\u5F97\u4E86<color=#DA6700><size=50>" + starListLength + "</size></c>\u9897\u661F\u7684\u5956\u52B1</color>";
        for (var i = 0; i < starListLength; i++) {
            this._showStar();
        }
        this.titleNode.angle = 0;
        cc.tween(this.titleNode)
            .delay(1)
            .repeatForever(cc.tween()
            .to(1.5, { angle: -5 })
            .to(1.5, { angle: 5 })).start();
        SendMsg_1.SendMsg.reqSaveAssessStatistics(Constants_1.Constants.AssessStatisticsJson);
    };
    ResultUI.prototype._showStar = function () {
        if (this.starNode) {
            var star = cc.instantiate(this.starNode);
            star.parent = this.starNode.parent;
            this._starList.push(star);
            star.active = true;
        }
    };
    ResultUI.prototype.clickBackGame = function () {
        this.hide();
        Game_1.default.instance.reset();
        UIManager_1.UIManager.instance.showUI(UIManager_1.UIType.MenuUI);
    };
    __decorate([
        property(cc.Node)
    ], ResultUI.prototype, "titleNode", void 0);
    __decorate([
        property(cc.RichText)
    ], ResultUI.prototype, "starNumLabel", void 0);
    __decorate([
        property(cc.Node)
    ], ResultUI.prototype, "starNode", void 0);
    ResultUI = __decorate([
        ccclass
    ], ResultUI);
    return ResultUI;
}(BaseUI_1.default));
exports.default = ResultUI;

cc._RF.pop();
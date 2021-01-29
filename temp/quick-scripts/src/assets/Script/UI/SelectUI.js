"use strict";
cc._RF.push(module, '97d1de6LeBNHIvDTmQWxHmS', 'SelectUI');
// Script/UI/SelectUI.ts

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
var UIManager_1 = require("../UIManager");
var BaseUI_1 = require("./BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SelectUI = /** @class */ (function (_super) {
    __extends(SelectUI, _super);
    function SelectUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentList = [];
        _this.bubbleLabels = [];
        _this._gameInstance = null;
        return _this;
    }
    SelectUI.prototype.init = function () {
        this._gameInstance = Game_1.default.instance;
        this.showConetentByIndex(-1);
    };
    SelectUI.prototype.showConetentByIndex = function (index) {
        if (index === -1) {
            this.contentList[0].active = false;
            this.contentList[1].active = false;
            return;
        }
        var playerData = Constants_1.Constants.getPlayerById(index);
        if (playerData) {
            Game_1.default.instance.lastSelectPlayerIdList.push(index);
            for (var i = 0; i < this.bubbleLabels.length; i++) {
                if (i === index) {
                    this.bubbleLabels[i].string = playerData.info;
                    break;
                }
            }
        }
        this.contentList[0].active = index === 0;
        this.contentList[1].active = index === 1;
    };
    SelectUI.prototype.onClickEvent = function (evt, parm) {
        if (parm === "go") {
            UIManager_1.UIManager.instance.hideAll();
            var lastSelectPlayerId = this._gameInstance.lastSelectPlayerIdList[this._gameInstance.lastSelectPlayerIdList.length - 1];
            cc.director.emit("gameStart", lastSelectPlayerId);
        }
        else if (parm === "0" || parm === "1") {
            evt.target.getComponent(cc.Button).interactable = false;
            this.showConetentByIndex(Number(parm));
        }
    };
    __decorate([
        property(cc.Node)
    ], SelectUI.prototype, "contentList", void 0);
    __decorate([
        property(cc.Label)
    ], SelectUI.prototype, "bubbleLabels", void 0);
    SelectUI = __decorate([
        ccclass
    ], SelectUI);
    return SelectUI;
}(BaseUI_1.default));
exports.default = SelectUI;

cc._RF.pop();
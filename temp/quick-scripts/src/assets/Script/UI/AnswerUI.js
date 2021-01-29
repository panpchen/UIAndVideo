"use strict";
cc._RF.push(module, 'cc236AFrLJE8IpU15cyEycH', 'AnswerUI');
// Script/UI/AnswerUI.ts

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
var AnswerUI = /** @class */ (function (_super) {
    __extends(AnswerUI, _super);
    function AnswerUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.win = null;
        _this.fail = null;
        _this.winAni = null;
        return _this;
    }
    AnswerUI.prototype.onLoad = function () {
        var _this = this;
        this.winAni.on("finished", function () {
            _this._onNextLevel(true);
        }, this);
    };
    AnswerUI.prototype.init = function (args) {
        var _this = this;
        var isCorrect = args[0];
        var haveWrong = args[1];
        this.win.active = isCorrect;
        this.fail.active = !isCorrect;
        if (isCorrect) {
            if (!haveWrong) {
                this.winAni.play();
            }
            else {
                this._onNextLevel(false);
            }
        }
        else {
            this.scheduleOnce(function () {
                _this.hide();
            }, 1);
        }
    };
    AnswerUI.prototype._onNextLevel = function (isShowAni) {
        this.hide();
        this.scheduleOnce(function () {
            cc.director.emit("gameNextLevel", isShowAni);
        }, 0.3);
    };
    __decorate([
        property(cc.Node)
    ], AnswerUI.prototype, "win", void 0);
    __decorate([
        property(cc.Node)
    ], AnswerUI.prototype, "fail", void 0);
    __decorate([
        property(cc.Animation)
    ], AnswerUI.prototype, "winAni", void 0);
    AnswerUI = __decorate([
        ccclass
    ], AnswerUI);
    return AnswerUI;
}(BaseUI_1.default));
exports.default = AnswerUI;

cc._RF.pop();
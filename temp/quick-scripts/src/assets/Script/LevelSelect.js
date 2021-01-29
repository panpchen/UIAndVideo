"use strict";
cc._RF.push(module, '0cdbadNbIhGPq3v6qzASoMp', 'LevelSelect');
// Script/LevelSelect.ts

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
var Game_1 = require("./Game");
var LevelBase_1 = require("./LevelBase");
var UIManager_1 = require("./UIManager");
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelSelect = /** @class */ (function (_super) {
    __extends(LevelSelect, _super);
    function LevelSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listBgSpf = [];
        _this.bgSp = null;
        _this.titleLabel = null;
        _this.titleNode = null;
        _this.listOption = [];
        _this.listOptionSpf = [];
        _this.overPanel = null;
        _this.allOverPanel = null;
        _this.bubble = null;
        _this.playerList = [];
        _this.bubbleLabel = null;
        _this.btnLabel = null;
        _this.topStarNode = null;
        _this._topicId = 0;
        _this._topicData = null;
        _this._optionBtnList = [];
        _this._lastPlayerId = -1;
        _this._haveWrong = false;
        _this._starList = [];
        return _this;
    }
    Object.defineProperty(LevelSelect.prototype, "starList", {
        get: function () {
            return this._starList;
        },
        enumerable: false,
        configurable: true
    });
    LevelSelect.prototype.onLoad = function () {
        cc.director.on("gameNextLevel", this._newLevel, this);
    };
    LevelSelect.prototype.init = function (playerId) {
        this._topicId = 0;
        this._topicData = null;
        this._lastPlayerId = playerId;
        this.overPanel.active = false;
        this.allOverPanel.active = false;
        this._loadTopic();
    };
    LevelSelect.prototype._loadTopic = function () {
        var _this = this;
        this._topicData = Constants_1.Constants.getConfigById(this._lastPlayerId)[this._topicId];
        this.titleLabel.string = this._topicData.title;
        this.listOption.forEach(function (option, i) {
            _this.listOption[i].active = i == _this._topicData.optionId;
        });
        this._optionBtnList = this.listOption[this._topicData.optionId].getComponentsInChildren(cc.Button);
        this._optionBtnList.forEach(function (btn, i) {
            btn.node.getComponent(cc.Sprite).spriteFrame = _this.listOptionSpf[0];
            // btn.node.getChildByName("label").getComponent(cc.Label).string = this._topicData.options[i];
        });
        this.bgSp.spriteFrame = this.listBgSpf[this._topicData.bgId];
        this.bgSp.node.opacity = 0;
        cc.tween(this.bgSp.node)
            .to(0.5, { opacity: 255 })
            .start();
        this.titleNode.y = 756;
        cc.tween(this.titleNode)
            .to(1, { y: 472 }, { easing: "elasticInOut" })
            .start();
        this._haveWrong = false;
    };
    LevelSelect.prototype._loadNextTopic = function () {
        var _this = this;
        if (this._topicId === Constants_1.Constants.getConfigLength(this._lastPlayerId) - 1) {
            if (Game_1.default.instance.lastSelectPlayerIdList.length === 1) {
                this._topicId = 0;
                this.overPanel.active = true;
                this.bubble.scaleX = this._lastPlayerId == 0 ? 1 : -1;
                var otherPlayerData = Constants_1.Constants.getPlayerById(this._getOtherPlayerId());
                this.bubbleLabel.string = Utils_1.Utils.stringFormat(Constants_1.Constants.allGameString.str0, otherPlayerData.name);
                this.btnLabel.string = Utils_1.Utils.stringFormat(Constants_1.Constants.allGameString.str1, otherPlayerData.name);
                this.playerList.forEach(function (player, index) {
                    player.active = index == _this._lastPlayerId;
                });
            }
            else if (Game_1.default.instance.lastSelectPlayerIdList.length === 2) {
                this.allOverPanel.active = true;
                this.scheduleOnce(function () {
                    UIManager_1.UIManager.instance.showUI(UIManager_1.UIType.ResultUI);
                }, 1.5);
            }
            return;
        }
        this._topicId++;
        this._loadTopic();
    };
    LevelSelect.prototype._getOtherPlayerId = function () {
        return this._lastPlayerId == 0 ? 1 : 0;
    };
    LevelSelect.prototype.onClickEvent = function (event, parm) {
        var _this = this;
        if (parm == "nextPlayer") {
            UIManager_1.UIManager.instance.showUI(UIManager_1.UIType.SelectUI, function (baseLevel) {
                baseLevel.showConetentByIndex(_this._getOtherPlayerId());
            });
            return;
        }
        var _loop_1 = function (i) {
            var name = this_1._optionBtnList[i].node.name;
            // 节点名称btn_0, btn_1，去最后数字判断点击哪个按钮
            if (name.substring(name.length - 1) == parm) {
                var sp = this_1._optionBtnList[i].node.getComponent(cc.Sprite).spriteFrame;
                // 按钮变红和灰的逻辑
                // if (sp.name == this.listOptionSpf[0].name) {
                //   this._optionBtnList[i].node.getComponent(cc.Sprite).spriteFrame = this.listOptionSpf[1];   // gray
                // } else {
                //   this._optionBtnList[i].node.getComponent(cc.Sprite).spriteFrame = this.listOptionSpf[0];   // red
                // }
                var isCorrect_1 = this_1._topicData.answers.includes(Number(parm));
                if (!this_1._haveWrong) {
                    this_1._haveWrong = !isCorrect_1;
                }
                this_1.scheduleOnce(function () {
                    UIManager_1.UIManager.instance.showUI(UIManager_1.UIType.AnswerUI, null, isCorrect_1, _this._haveWrong);
                }, 0.3);
                return "break";
            }
        };
        var this_1 = this;
        for (var i = 0; i < this._optionBtnList.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    LevelSelect.prototype._newLevel = function (isShowAni) {
        isShowAni && this._showStar();
        this._loadNextTopic();
    };
    LevelSelect.prototype._showStar = function () {
        if (this.topStarNode) {
            var star = cc.instantiate(this.topStarNode);
            star.parent = this.topStarNode.parent;
            this._starList.push(star);
            star.active = true;
        }
    };
    LevelSelect.prototype.reset = function () {
        for (var i = this._starList.length - 1; i >= 0; i--) {
            this._starList[i].destroy();
            this._starList.splice(i, 1);
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], LevelSelect.prototype, "listBgSpf", void 0);
    __decorate([
        property(cc.Sprite)
    ], LevelSelect.prototype, "bgSp", void 0);
    __decorate([
        property(cc.Label)
    ], LevelSelect.prototype, "titleLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "titleNode", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "listOption", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LevelSelect.prototype, "listOptionSpf", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "overPanel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "allOverPanel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "bubble", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "playerList", void 0);
    __decorate([
        property(cc.Label)
    ], LevelSelect.prototype, "bubbleLabel", void 0);
    __decorate([
        property(cc.Label)
    ], LevelSelect.prototype, "btnLabel", void 0);
    __decorate([
        property(cc.Node)
    ], LevelSelect.prototype, "topStarNode", void 0);
    LevelSelect = __decorate([
        ccclass
    ], LevelSelect);
    return LevelSelect;
}(LevelBase_1.default));
exports.default = LevelSelect;

cc._RF.pop();
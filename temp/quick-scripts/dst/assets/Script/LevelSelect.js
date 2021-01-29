
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LevelSelect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTGV2ZWxTZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsZ0RBQStDO0FBQy9DLCtCQUEwQjtBQUMxQix5Q0FBb0M7QUFFcEMseUNBQWdEO0FBQ2hELGlDQUFnQztBQUUxQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBUztJQUFsRDtRQUFBLHFFQThKQztRQTVKQyxlQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUVqQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxFQUFFLENBQUM7UUFFM0IsbUJBQWEsR0FBcUIsRUFBRSxDQUFDO1FBRXJDLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFjLEVBQUUsQ0FBQztRQUUzQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixvQkFBYyxHQUFnQixFQUFFLENBQUM7UUFDakMsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMzQixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFTLEdBQWMsRUFBRSxDQUFDOztJQTZIcEMsQ0FBQztJQTVIQyxzQkFBVyxp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TUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUEzSkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1k7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDVTtJQTFCVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEovQjtJQUFELGtCQUFDO0NBOUpELEFBOEpDLENBOUp3QyxtQkFBUyxHQThKakQ7a0JBOUpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL0NvbmZpZy9Db25zdGFudHNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcbmltcG9ydCBMZXZlbEJhc2UgZnJvbSBcIi4vTGV2ZWxCYXNlXCI7XG5pbXBvcnQgU2VsZWN0VUkgZnJvbSBcIi4vVUkvU2VsZWN0VUlcIjtcbmltcG9ydCB7IFVJTWFuYWdlciwgVUlUeXBlIH0gZnJvbSBcIi4vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbFNlbGVjdCBleHRlbmRzIExldmVsQmFzZSB7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgbGlzdEJnU3BmOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIGJnU3A6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGl0bGVMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgdGl0bGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxpc3RPcHRpb246IGNjLk5vZGVbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGxpc3RPcHRpb25TcGY6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG92ZXJQYW5lbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBhbGxPdmVyUGFuZWw6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYnViYmxlOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBsYXllckxpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGJ1YmJsZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgYnRuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHRvcFN0YXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBwcml2YXRlIF90b3BpY0lkID0gMDtcbiAgcHJpdmF0ZSBfdG9waWNEYXRhID0gbnVsbDtcbiAgcHJpdmF0ZSBfb3B0aW9uQnRuTGlzdDogY2MuQnV0dG9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfbGFzdFBsYXllcklkOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBfaGF2ZVdyb25nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXJMaXN0OiBjYy5Ob2RlW10gPSBbXTtcbiAgcHVibGljIGdldCBzdGFyTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3Rhckxpc3Q7XG4gIH1cblxuICBvbkxvYWQoKSB7XG4gICAgY2MuZGlyZWN0b3Iub24oXCJnYW1lTmV4dExldmVsXCIsIHRoaXMuX25ld0xldmVsLCB0aGlzKTtcbiAgfVxuXG4gIGluaXQocGxheWVySWQ/OiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3BpY0lkID0gMDtcbiAgICB0aGlzLl90b3BpY0RhdGEgPSBudWxsO1xuICAgIHRoaXMuX2xhc3RQbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgIHRoaXMub3ZlclBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWxsT3ZlclBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2xvYWRUb3BpYygpO1xuICB9XG5cbiAgX2xvYWRUb3BpYygpIHtcbiAgICB0aGlzLl90b3BpY0RhdGEgPSBDb25zdGFudHMuZ2V0Q29uZmlnQnlJZCh0aGlzLl9sYXN0UGxheWVySWQpW3RoaXMuX3RvcGljSWRdO1xuICAgIHRoaXMudGl0bGVMYWJlbC5zdHJpbmcgPSB0aGlzLl90b3BpY0RhdGEudGl0bGU7XG4gICAgdGhpcy5saXN0T3B0aW9uLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgdGhpcy5saXN0T3B0aW9uW2ldLmFjdGl2ZSA9IGkgPT0gdGhpcy5fdG9waWNEYXRhLm9wdGlvbklkO1xuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbkJ0bkxpc3QgPSB0aGlzLmxpc3RPcHRpb25bdGhpcy5fdG9waWNEYXRhLm9wdGlvbklkXS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5CdXR0b24pO1xuICAgIHRoaXMuX29wdGlvbkJ0bkxpc3QuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICBidG4ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdE9wdGlvblNwZlswXTtcbiAgICAgIC8vIGJ0bi5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLl90b3BpY0RhdGEub3B0aW9uc1tpXTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmdTcC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdEJnU3BmW3RoaXMuX3RvcGljRGF0YS5iZ0lkXTtcbiAgICB0aGlzLmJnU3Aubm9kZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2Vlbih0aGlzLmJnU3Aubm9kZSlcbiAgICAgIC50bygwLjUsIHsgb3BhY2l0eTogMjU1IH0pXG4gICAgICAuc3RhcnQoKTtcblxuICAgIHRoaXMudGl0bGVOb2RlLnkgPSA3NTY7XG4gICAgY2MudHdlZW4odGhpcy50aXRsZU5vZGUpXG4gICAgICAudG8oMSwgeyB5OiA0NzIgfSwgeyBlYXNpbmc6IFwiZWxhc3RpY0luT3V0XCIgfSlcbiAgICAgIC5zdGFydCgpO1xuXG4gICAgdGhpcy5faGF2ZVdyb25nID0gZmFsc2U7XG4gIH1cblxuICBfbG9hZE5leHRUb3BpYygpIHtcbiAgICBpZiAodGhpcy5fdG9waWNJZCA9PT0gQ29uc3RhbnRzLmdldENvbmZpZ0xlbmd0aCh0aGlzLl9sYXN0UGxheWVySWQpIC0gMSkge1xuICAgICAgaWYgKEdhbWUuaW5zdGFuY2UubGFzdFNlbGVjdFBsYXllcklkTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5fdG9waWNJZCA9IDA7XG4gICAgICAgIHRoaXMub3ZlclBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnViYmxlLnNjYWxlWCA9IHRoaXMuX2xhc3RQbGF5ZXJJZCA9PSAwID8gMSA6IC0xO1xuICAgICAgICBjb25zdCBvdGhlclBsYXllckRhdGEgPSBDb25zdGFudHMuZ2V0UGxheWVyQnlJZCh0aGlzLl9nZXRPdGhlclBsYXllcklkKCkpO1xuICAgICAgICB0aGlzLmJ1YmJsZUxhYmVsLnN0cmluZyA9IFV0aWxzLnN0cmluZ0Zvcm1hdChDb25zdGFudHMuYWxsR2FtZVN0cmluZy5zdHIwLCBvdGhlclBsYXllckRhdGEubmFtZSk7XG4gICAgICAgIHRoaXMuYnRuTGFiZWwuc3RyaW5nID0gVXRpbHMuc3RyaW5nRm9ybWF0KENvbnN0YW50cy5hbGxHYW1lU3RyaW5nLnN0cjEsIG90aGVyUGxheWVyRGF0YS5uYW1lKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJMaXN0LmZvckVhY2goKHBsYXllciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBwbGF5ZXIuYWN0aXZlID0gaW5kZXggPT0gdGhpcy5fbGFzdFBsYXllcklkO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoR2FtZS5pbnN0YW5jZS5sYXN0U2VsZWN0UGxheWVySWRMaXN0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLmFsbE92ZXJQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgVUlNYW5hZ2VyLmluc3RhbmNlLnNob3dVSShVSVR5cGUuUmVzdWx0VUkpO1xuICAgICAgICB9LCAxLjUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90b3BpY0lkKys7XG4gICAgdGhpcy5fbG9hZFRvcGljKCk7XG4gIH1cblxuICBfZ2V0T3RoZXJQbGF5ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFzdFBsYXllcklkID09IDAgPyAxIDogMDtcbiAgfVxuXG4gIG9uQ2xpY2tFdmVudChldmVudCwgcGFybSkge1xuICAgIGlmIChwYXJtID09IFwibmV4dFBsYXllclwiKSB7XG4gICAgICBVSU1hbmFnZXIuaW5zdGFuY2Uuc2hvd1VJKFVJVHlwZS5TZWxlY3RVSSwgKGJhc2VMZXZlbDogU2VsZWN0VUkpID0+IHtcbiAgICAgICAgYmFzZUxldmVsLnNob3dDb25ldGVudEJ5SW5kZXgodGhpcy5fZ2V0T3RoZXJQbGF5ZXJJZCgpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fb3B0aW9uQnRuTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX29wdGlvbkJ0bkxpc3RbaV0ubm9kZS5uYW1lO1xuICAgICAgLy8g6IqC54K55ZCN56ewYnRuXzAsIGJ0bl8x77yM5Y675pyA5ZCO5pWw5a2X5Yik5pat54K55Ye75ZOq5Liq5oyJ6ZKuXG4gICAgICBpZiAobmFtZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggLSAxKSA9PSBwYXJtKSB7XG4gICAgICAgIGxldCBzcCA9IHRoaXMuX29wdGlvbkJ0bkxpc3RbaV0ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICAgICAgLy8g5oyJ6ZKu5Y+Y57qi5ZKM54Gw55qE6YC76L6RXG4gICAgICAgIC8vIGlmIChzcC5uYW1lID09IHRoaXMubGlzdE9wdGlvblNwZlswXS5uYW1lKSB7XG4gICAgICAgIC8vICAgdGhpcy5fb3B0aW9uQnRuTGlzdFtpXS5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0T3B0aW9uU3BmWzFdOyAgIC8vIGdyYXlcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICB0aGlzLl9vcHRpb25CdG5MaXN0W2ldLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RPcHRpb25TcGZbMF07ICAgLy8gcmVkXG4gICAgICAgIC8vIH1cblxuICAgICAgICBjb25zdCBpc0NvcnJlY3QgPSB0aGlzLl90b3BpY0RhdGEuYW5zd2Vycy5pbmNsdWRlcyhOdW1iZXIocGFybSkpO1xuICAgICAgICBpZiAoIXRoaXMuX2hhdmVXcm9uZykge1xuICAgICAgICAgIHRoaXMuX2hhdmVXcm9uZyA9ICFpc0NvcnJlY3Q7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zaG93VUkoVUlUeXBlLkFuc3dlclVJLCBudWxsLCBpc0NvcnJlY3QsIHRoaXMuX2hhdmVXcm9uZyk7XG4gICAgICAgIH0sIDAuMyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX25ld0xldmVsKGlzU2hvd0FuaSkge1xuICAgIGlzU2hvd0FuaSAmJiB0aGlzLl9zaG93U3RhcigpO1xuICAgIHRoaXMuX2xvYWROZXh0VG9waWMoKTtcbiAgfVxuXG4gIF9zaG93U3RhcigpIHtcbiAgICBpZiAodGhpcy50b3BTdGFyTm9kZSkge1xuICAgICAgY29uc3Qgc3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMudG9wU3Rhck5vZGUpO1xuICAgICAgc3Rhci5wYXJlbnQgPSB0aGlzLnRvcFN0YXJOb2RlLnBhcmVudDtcbiAgICAgIHRoaXMuX3N0YXJMaXN0LnB1c2goc3Rhcik7XG4gICAgICBzdGFyLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX3N0YXJMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0aGlzLl9zdGFyTGlzdFtpXS5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9zdGFyTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=
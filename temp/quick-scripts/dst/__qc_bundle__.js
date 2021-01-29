
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Ani/UpDownAni');
require('./assets/Script/Ani/fillEffect');
require('./assets/Script/Ani/progressBarMoveEffect');
require('./assets/Script/Config/Constants');
require('./assets/Script/Game');
require('./assets/Script/LevelBase');
require('./assets/Script/LevelSelect');
require('./assets/Script/Loading');
require('./assets/Script/Net/NetManger');
require('./assets/Script/Net/SendMsg');
require('./assets/Script/NodePool');
require('./assets/Script/PoolMng');
require('./assets/Script/UI/AnswerUI');
require('./assets/Script/UI/BaseUI');
require('./assets/Script/UI/MenuUI');
require('./assets/Script/UI/PopBaseUI');
require('./assets/Script/UI/ResultUI');
require('./assets/Script/UI/SelectUI');
require('./assets/Script/UIManager');
require('./assets/Script/Utils');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ani/progressBarMoveEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2efd6MCtuVJu4LHauw+MTL4', 'progressBarMoveEffect');
// Script/Ani/progressBarMoveEffect.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// 进度条效果
cc.Class({
  "extends": cc.Component,
  properties: {
    _callback: null
  },
  onLoad: function onLoad() {
    this.isLerp = false;
    this.timer = 0;
    this.lerpDuration = 0.2;
    this.ratio = 0;
    this.bar = this.node.getComponent(cc.ProgressBar);
  },
  updateProgress: function updateProgress(ratio, callback) {
    this._callback = callback;
    this.ratio = ratio;
    this.timer = 0;
    this.isLerp = true;
  },
  update: function update(dt) {
    if (!this.bar || !this.isLerp) {
      return;
    }

    this.timer += dt;

    if (this.timer >= this.lerpDuration) {
      this.timer = this.lerpDuration;
      this.isLerp = false;
    }

    this.bar.progress = cc.misc.lerp(this.bar.progress, this.ratio, this.timer / this.lerpDuration);
    this._callback && this._callback(this.bar.progress);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQW5pL3Byb2dyZXNzQmFyTW92ZUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9jYWxsYmFjayIsIm9uTG9hZCIsImlzTGVycCIsInRpbWVyIiwibGVycER1cmF0aW9uIiwicmF0aW8iLCJiYXIiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUHJvZ3Jlc3NCYXIiLCJ1cGRhdGVQcm9ncmVzcyIsImNhbGxiYWNrIiwidXBkYXRlIiwiZHQiLCJwcm9ncmVzcyIsIm1pc2MiLCJsZXJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFESCxHQUpQO0FBUUxDLEVBQUFBLE1BUkssb0JBUUk7QUFDTCxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixHQUFwQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlosRUFBRSxDQUFDYSxXQUExQixDQUFYO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsY0FoQkssMEJBZ0JVTCxLQWhCVixFQWdCaUJNLFFBaEJqQixFQWdCMkI7QUFDNUIsU0FBS1gsU0FBTCxHQUFpQlcsUUFBakI7QUFDQSxTQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtELE1BQUwsR0FBYyxJQUFkO0FBQ0gsR0FyQkk7QUF1QkxVLEVBQUFBLE1BdkJLLGtCQXVCRUMsRUF2QkYsRUF1Qk07QUFDUCxRQUFJLENBQUMsS0FBS1AsR0FBTixJQUFhLENBQUMsS0FBS0osTUFBdkIsRUFBK0I7QUFDM0I7QUFDSDs7QUFFRCxTQUFLQyxLQUFMLElBQWNVLEVBQWQ7O0FBQ0EsUUFBSSxLQUFLVixLQUFMLElBQWMsS0FBS0MsWUFBdkIsRUFBcUM7QUFDakMsV0FBS0QsS0FBTCxHQUFhLEtBQUtDLFlBQWxCO0FBQ0EsV0FBS0YsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7QUFFRCxTQUFLSSxHQUFMLENBQVNRLFFBQVQsR0FBb0JsQixFQUFFLENBQUNtQixJQUFILENBQVFDLElBQVIsQ0FBYSxLQUFLVixHQUFMLENBQVNRLFFBQXRCLEVBQWdDLEtBQUtULEtBQXJDLEVBQTRDLEtBQUtGLEtBQUwsR0FBYSxLQUFLQyxZQUE5RCxDQUFwQjtBQUNBLFNBQUtKLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlLEtBQUtNLEdBQUwsQ0FBU1EsUUFBeEIsQ0FBbEI7QUFDSDtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbi8vIOi/m+W6puadoeaViOaenFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfY2FsbGJhY2s6IG51bGxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmlzTGVycCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5sZXJwRHVyYXRpb24gPSAwLjI7XG4gICAgICAgIHRoaXMucmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVQcm9ncmVzcyhyYXRpbywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5pc0xlcnAgPSB0cnVlO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhciB8fCAhdGhpcy5pc0xlcnApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMubGVycER1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5sZXJwRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmlzTGVycCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYXIucHJvZ3Jlc3MgPSBjYy5taXNjLmxlcnAodGhpcy5iYXIucHJvZ3Jlc3MsIHRoaXMucmF0aW8sIHRoaXMudGltZXIgLyB0aGlzLmxlcnBEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrICYmIHRoaXMuX2NhbGxiYWNrKHRoaXMuYmFyLnByb2dyZXNzKTtcbiAgICB9XG59KTsiXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LevelBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c283nEvFNNl609NO4MIpDT', 'LevelBase');
// Script/LevelBase.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelBase = /** @class */ (function (_super) {
    __extends(LevelBase, _super);
    function LevelBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelBase.prototype.init = function (data) { };
    LevelBase.prototype.onBaseClickEvent = function (event, parm) {
        switch (parm) {
            case "showHelp":
                break;
        }
    };
    LevelBase = __decorate([
        ccclass
    ], LevelBase);
    return LevelBase;
}(cc.Component));
exports.default = LevelBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTGV2ZWxCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EOztJQVVBLENBQUM7SUFURyx3QkFBSSxHQUFKLFVBQUssSUFBSyxJQUFJLENBQUM7SUFFZixvQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUk7UUFDeEIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLFVBQVU7Z0JBQ1gsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQVJnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBVTdCO0lBQUQsZ0JBQUM7Q0FWRCxBQVVDLENBVnNDLEVBQUUsQ0FBQyxTQUFTLEdBVWxEO2tCQVZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbEJhc2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGluaXQoZGF0YT8pIHsgfVxuXG4gICAgb25CYXNlQ2xpY2tFdmVudChldmVudCwgcGFybSkge1xuICAgICAgICBzd2l0Y2ggKHBhcm0pIHtcbiAgICAgICAgICAgIGNhc2UgXCJzaG93SGVscFwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ab7eSvrT1OGKJ7qYgnvWwe', 'Constants');
// Script/Config/Constants.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Utils_1 = require("../Utils");
// { playerId: topic}
var TopicConfigs = {
    "0": [{
            id: 0,
            title: "小明要到马路对面，小明该走哪条路线呢？",
            // options: ["A", "B"],
            answers: [0],
            bgId: 0,
            optionId: 0
        },
        {
            id: 1,
            title: "信号灯是哪种状态时，小明可以过斑马线？",
            // options: ["A", "B", "C"],
            answers: [0],
            bgId: 0,
            optionId: 1
        },
        {
            id: 2,
            title: "公园就在马路对面了，小明可以选择哪条路线过马路？",
            // options: ["A", "B"],
            answers: [1],
            bgId: 1,
            optionId: 2
        }],
    "1": [{
            id: 0,
            title: "马路边停车两辆车，小朋选择乘坐哪辆车去公园？",
            // options: ["A", "B"],
            answers: [1],
            bgId: 2,
            optionId: 3
        },
        {
            id: 1,
            title: "小朋应该选择坐在哪个位置？",
            // options: ["A", "B", "C"],
            answers: [1, 2],
            bgId: 3,
            optionId: 4
        },
        {
            id: 2,
            title: "在车内时，哪种行为小朋可以做的？",
            // options: ["A", "B", "C"],
            answers: [0],
            bgId: 3,
            optionId: 5
        },
        {
            id: 3,
            title: "到公园了，小朋可以从那边下车？",
            // options: ["A", "B"],
            answers: [1],
            bgId: 4,
            optionId: 6
        }]
};
var PlayersConfig = [
    {
        id: 0,
        name: "小明",
        info: "“我要步行到公园”",
        isArrive: false
    },
    {
        id: 1,
        name: "小朋",
        info: "“我要乘车到公园”",
        isArrive: false
    }
];
var allGameString;
(function (allGameString) {
    /**
     * `“{0}还没到，我等等他，他会选择什么方式到公园呢？”`
     */
    allGameString["str0"] = "\u201C{0}\u8FD8\u6CA1\u5230\uFF0C\u6211\u7B49\u7B49\u4ED6\uFF0C\u4ED6\u4F1A\u9009\u62E9\u4EC0\u4E48\u65B9\u5F0F\u5230\u516C\u56ED\u5462\uFF1F\u201D";
    /**
     * `揭晓{0}出行方式`,
     */
    allGameString["str1"] = "\u63ED\u6653{0}\u51FA\u884C\u65B9\u5F0F";
})(allGameString || (allGameString = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.storeParmForAssessStatistics = function () {
        this.AssessStatisticsJson = JSON.stringify(Utils_1.Utils.getParmFromURL(window.location.href));
    };
    Constants.getConfigById = function (id) {
        return TopicConfigs[id];
    };
    Constants.getConfigLength = function (id) {
        return TopicConfigs[id].length;
    };
    Constants.getPlayerById = function (id) {
        return PlayersConfig[id];
    };
    Constants.allGameString = allGameString;
    return Constants;
}());
exports.Constants = Constants;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnL0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUVsRixrQ0FBaUM7QUFFakMscUJBQXFCO0FBQ3JCLElBQU0sWUFBWSxHQUFHO0lBQ2pCLEdBQUcsRUFBRSxDQUFDO1lBQ0YsRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUscUJBQXFCO1lBQzVCLHVCQUF1QjtZQUN2QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLHFCQUFxQjtZQUM1Qiw0QkFBNEI7WUFDNUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsQ0FBQztTQUNkO1FBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSwwQkFBMEI7WUFDakMsdUJBQXVCO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDZCxDQUFDO0lBQ0YsR0FBRyxFQUFFLENBQUM7WUFDRixFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSx3QkFBd0I7WUFDL0IsdUJBQXVCO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsZUFBZTtZQUN0Qiw0QkFBNEI7WUFDNUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLDRCQUE0QjtZQUM1QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4Qix1QkFBdUI7WUFDdkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7Q0FDTCxDQUFBO0FBRUQsSUFBTSxhQUFhLEdBQUc7SUFDbEI7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUUsS0FBSztLQUNsQjtDQUNKLENBQUE7QUFFRCxJQUFLLGFBU0o7QUFURCxXQUFLLGFBQWE7SUFDZDs7T0FFRztJQUNILDZLQUFvQyxDQUFBO0lBQ3BDOztPQUVHO0lBQ0gsaUVBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQVRJLGFBQWEsS0FBYixhQUFhLFFBU2pCO0FBRUQ7SUFBQTtJQXFCQSxDQUFDO0lBakJVLHNDQUE0QixHQUFuQztRQUNJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTSx1QkFBYSxHQUFwQixVQUFxQixFQUFFO1FBQ25CLE9BQU8sWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSx5QkFBZSxHQUF0QixVQUF1QixFQUFFO1FBQ3JCLE9BQU8sWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRU0sdUJBQWEsR0FBcEIsVUFBcUIsRUFBRTtRQUNuQixPQUFPLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sdUJBQWEsR0FBRyxhQUFhLENBQUM7SUFDekMsZ0JBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQXJCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9VdGlsc1wiO1xuXG4vLyB7IHBsYXllcklkOiB0b3BpY31cbmNvbnN0IFRvcGljQ29uZmlncyA9IHtcbiAgICBcIjBcIjogW3tcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIHRpdGxlOiBcIuWwj+aYjuimgeWIsOmprOi3r+Wvuemdou+8jOWwj+aYjuivpei1sOWTquadoei3r+e6v+WRou+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiXSxcbiAgICAgICAgYW5zd2VyczogWzBdLFxuICAgICAgICBiZ0lkOiAwLFxuICAgICAgICBvcHRpb25JZDogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwi5L+h5Y+354Gv5piv5ZOq56eN54q25oCB5pe277yM5bCP5piO5Y+v5Lul6L+H5paR6ams57q/77yfXCIsXG4gICAgICAgIC8vIG9wdGlvbnM6IFtcIkFcIiwgXCJCXCIsIFwiQ1wiXSxcbiAgICAgICAgYW5zd2VyczogWzBdLFxuICAgICAgICBiZ0lkOiAwLFxuICAgICAgICBvcHRpb25JZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwi5YWs5Zut5bCx5Zyo6ams6Lev5a+56Z2i5LqG77yM5bCP5piO5Y+v5Lul6YCJ5oup5ZOq5p2h6Lev57q/6L+H6ams6Lev77yfXCIsXG4gICAgICAgIC8vIG9wdGlvbnM6IFtcIkFcIiwgXCJCXCJdLFxuICAgICAgICBhbnN3ZXJzOiBbMV0sXG4gICAgICAgIGJnSWQ6IDEsXG4gICAgICAgIG9wdGlvbklkOiAyXG4gICAgfV0sXG4gICAgXCIxXCI6IFt7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0aXRsZTogXCLpqazot6/ovrnlgZzovabkuKTovobovabvvIzlsI/mnIvpgInmi6nkuZjlnZDlk6rovobovabljrvlhazlm63vvJ9cIixcbiAgICAgICAgLy8gb3B0aW9uczogW1wiQVwiLCBcIkJcIl0sXG4gICAgICAgIGFuc3dlcnM6IFsxXSxcbiAgICAgICAgYmdJZDogMixcbiAgICAgICAgb3B0aW9uSWQ6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIuWwj+aci+W6lOivpemAieaLqeWdkOWcqOWTquS4quS9jee9ru+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiLCBcIkNcIl0sXG4gICAgICAgIGFuc3dlcnM6IFsxLCAyXSxcbiAgICAgICAgYmdJZDogMyxcbiAgICAgICAgb3B0aW9uSWQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIuWcqOi9puWGheaXtu+8jOWTquenjeihjOS4uuWwj+aci+WPr+S7peWBmueahO+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiLCBcIkNcIl0sXG4gICAgICAgIGFuc3dlcnM6IFswXSxcbiAgICAgICAgYmdJZDogMyxcbiAgICAgICAgb3B0aW9uSWQ6IDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIuWIsOWFrOWbreS6hu+8jOWwj+aci+WPr+S7peS7jumCo+i+ueS4i+i9pu+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiXSxcbiAgICAgICAgYW5zd2VyczogWzFdLFxuICAgICAgICBiZ0lkOiA0LFxuICAgICAgICBvcHRpb25JZDogNlxuICAgIH1dXG59XG5cbmNvbnN0IFBsYXllcnNDb25maWcgPSBbXG4gICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCLlsI/mmI5cIixcbiAgICAgICAgaW5mbzogXCLigJzmiJHopoHmraXooYzliLDlhazlm63igJ1cIixcbiAgICAgICAgaXNBcnJpdmU6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIuWwj+aci1wiLFxuICAgICAgICBpbmZvOiBcIuKAnOaIkeimgeS5mOi9puWIsOWFrOWbreKAnVwiLFxuICAgICAgICBpc0Fycml2ZTogZmFsc2VcbiAgICB9XG5dXG5cbmVudW0gYWxsR2FtZVN0cmluZyB7XG4gICAgLyoqXG4gICAgICogYOKAnHswfei/mOayoeWIsO+8jOaIkeetieetieS7lu+8jOS7luS8mumAieaLqeS7gOS5iOaWueW8j+WIsOWFrOWbreWRou+8n+KAnWBcbiAgICAgKi9cbiAgICBzdHIwID0gYOKAnHswfei/mOayoeWIsO+8jOaIkeetieetieS7lu+8jOS7luS8mumAieaLqeS7gOS5iOaWueW8j+WIsOWFrOWbreWRou+8n+KAnWAsXG4gICAgLyoqXG4gICAgICogYOaPreaZk3swfeWHuuihjOaWueW8j2AsXG4gICAgICovXG4gICAgc3RyMSA9IGDmj63mmZN7MH3lh7rooYzmlrnlvI9gLFxufVxuXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICAvLyDor7fmsYLor4TkvLDnu5/orqHnu5nlkI7lj7DlnKjmuLjmiI/nu5PmnZ/ml7ZcbiAgICBzdGF0aWMgQXNzZXNzU3RhdGlzdGljc0pzb246IHN0cmluZztcblxuICAgIHN0YXRpYyBzdG9yZVBhcm1Gb3JBc3Nlc3NTdGF0aXN0aWNzKCkge1xuICAgICAgICB0aGlzLkFzc2Vzc1N0YXRpc3RpY3NKc29uID0gSlNPTi5zdHJpbmdpZnkoVXRpbHMuZ2V0UGFybUZyb21VUkwod2luZG93LmxvY2F0aW9uLmhyZWYpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gVG9waWNDb25maWdzW2lkXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnTGVuZ3RoKGlkKSB7XG4gICAgICAgIHJldHVybiBUb3BpY0NvbmZpZ3NbaWRdLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGxheWVyQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gUGxheWVyc0NvbmZpZ1tpZF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFsbEdhbWVTdHJpbmcgPSBhbGxHYW1lU3RyaW5nO1xufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Net/SendMsg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b9eaUomnZLQ6L1debgROfM', 'SendMsg');
// Script/Net/SendMsg.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMsg = void 0;
var NetManger_1 = require("./NetManger");
var URL_LIST = {
    SaveAssessStatistics: "http://192.168.16.11:8081/question/saveAssessStatistics",
};
var SendMsg = /** @class */ (function () {
    function SendMsg() {
    }
    // 请求评估统计
    SendMsg.reqSaveAssessStatistics = function (data, callback, errorCallback) {
        if (callback === void 0) { callback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        NetManger_1.NetManager.send(URL_LIST.SaveAssessStatistics, "POST", data, function (response) {
            callback && callback(data);
        }, function () {
            errorCallback && errorCallback();
        });
    };
    return SendMsg;
}());
exports.SendMsg = SendMsg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTmV0L1NlbmRNc2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7QUFFbkcseUNBQXlDO0FBRXpDLElBQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CLEVBQUUseURBQXlEO0NBQ2hGLENBQUE7QUFFRDtJQUFBO0lBU0EsQ0FBQztJQVJDLFNBQVM7SUFDRiwrQkFBdUIsR0FBOUIsVUFBK0IsSUFBWSxFQUFFLFFBQWUsRUFBRSxhQUFvQjtRQUFyQyx5QkFBQSxFQUFBLGVBQWU7UUFBRSw4QkFBQSxFQUFBLG9CQUFvQjtRQUNoRixzQkFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFDLFFBQVE7WUFDcEUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUU7WUFDRCxhQUFhLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBOZXRNYW5hZ2VyIH0gZnJvbSBcIi4vTmV0TWFuZ2VyXCI7XG5cbmNvbnN0IFVSTF9MSVNUID0ge1xuICBTYXZlQXNzZXNzU3RhdGlzdGljczogXCJodHRwOi8vMTkyLjE2OC4xNi4xMTo4MDgxL3F1ZXN0aW9uL3NhdmVBc3Nlc3NTdGF0aXN0aWNzXCIsXG59XG5cbmV4cG9ydCBjbGFzcyBTZW5kTXNnIHtcbiAgLy8g6K+35rGC6K+E5Lyw57uf6K6hXG4gIHN0YXRpYyByZXFTYXZlQXNzZXNzU3RhdGlzdGljcyhkYXRhOiBzdHJpbmcsIGNhbGxiYWNrID0gbnVsbCwgZXJyb3JDYWxsYmFjayA9IG51bGwpIHtcbiAgICBOZXRNYW5hZ2VyLnNlbmQoVVJMX0xJU1QuU2F2ZUFzc2Vzc1N0YXRpc3RpY3MsIFwiUE9TVFwiLCBkYXRhLCAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0sICgpID0+IHtcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PoolMng.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dec94EAWV9KR4jwWgSEP/LF', 'PoolMng');
// Script/PoolMng.ts

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
var NodePool_1 = require("./NodePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolMng = /** @class */ (function (_super) {
    __extends(PoolMng, _super);
    function PoolMng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scorePool = null;
        return _this;
    }
    PoolMng.prototype.init = function () {
        this.scorePool.init();
    };
    PoolMng.prototype.createItems = function () {
    };
    PoolMng.prototype.returnItemsPool = function (node) {
    };
    PoolMng.prototype.showScore = function () {
        return this.scorePool.requestPool();
    };
    PoolMng.prototype.returnScorePool = function (node) {
        this.scorePool.returnPool(node);
    };
    __decorate([
        property(NodePool_1.NodePool)
    ], PoolMng.prototype, "scorePool", void 0);
    PoolMng = __decorate([
        ccclass
    ], PoolMng);
    return PoolMng;
}(cc.Component));
exports.default = PoolMng;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUG9vbE1uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix1Q0FBc0M7QUFHaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFxQkM7UUFuQkMsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUFtQjdCLENBQUM7SUFqQkMsc0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDZCQUFXLEdBQVg7SUFDQSxDQUFDO0lBRUQsaUNBQWUsR0FBZixVQUFnQixJQUFJO0lBQ3BCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQWxCRDtRQURDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDOzhDQUNRO0lBRlIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXFCM0I7SUFBRCxjQUFDO0NBckJELEFBcUJDLENBckJvQyxFQUFFLENBQUMsU0FBUyxHQXFCaEQ7a0JBckJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IE5vZGVQb29sIH0gZnJvbSBcIi4vTm9kZVBvb2xcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9vbE1uZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShOb2RlUG9vbClcbiAgc2NvcmVQb29sOiBOb2RlUG9vbCA9IG51bGw7XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnNjb3JlUG9vbC5pbml0KCk7XG4gIH1cblxuICBjcmVhdGVJdGVtcygpIHtcbiAgfVxuXG4gIHJldHVybkl0ZW1zUG9vbChub2RlKSB7XG4gIH1cblxuICBzaG93U2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NvcmVQb29sLnJlcXVlc3RQb29sKCk7XG4gIH1cblxuICByZXR1cm5TY29yZVBvb2wobm9kZSkge1xuICAgIHRoaXMuc2NvcmVQb29sLnJldHVyblBvb2wobm9kZSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/SelectUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvU2VsZWN0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsaURBQWdEO0FBQ2hELGdDQUEyQjtBQUMzQiwwQ0FBeUM7QUFDekMsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBZ0RDO1FBOUNDLGlCQUFXLEdBQWMsRUFBRSxDQUFDO1FBRTVCLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBRXRCLG1CQUFhLEdBQVMsSUFBSSxDQUFDOztJQTBDckMsQ0FBQztJQXhDQyx1QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQ0FBbUIsR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25DLE9BQU87U0FDUjtRQUVELElBQU0sVUFBVSxHQUFHLHFCQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksVUFBVSxFQUFFO1lBQ2QsY0FBSSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDOUMsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxHQUFHLEVBQUUsSUFBSTtRQUNwQixJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakIscUJBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFN0IsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNILEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDdkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFFeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQTdDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1c7SUFKWCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLGdCQUFNLEdBZ0QzQztrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0NvbmZpZy9Db25zdGFudHNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi4vVUlNYW5hZ2VyXCI7XG5pbXBvcnQgQmFzZVVJIGZyb20gXCIuL0Jhc2VVSVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0VUkgZXh0ZW5kcyBCYXNlVUkge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgY29udGVudExpc3Q6IGNjLk5vZGVbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGJ1YmJsZUxhYmVsczogY2MuTGFiZWxbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2dhbWVJbnN0YW5jZTogR2FtZSA9IG51bGw7XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLl9nYW1lSW5zdGFuY2UgPSBHYW1lLmluc3RhbmNlO1xuICAgIHRoaXMuc2hvd0NvbmV0ZW50QnlJbmRleCgtMSk7XG4gIH1cblxuICBzaG93Q29uZXRlbnRCeUluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmNvbnRlbnRMaXN0WzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250ZW50TGlzdFsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF5ZXJEYXRhID0gQ29uc3RhbnRzLmdldFBsYXllckJ5SWQoaW5kZXgpO1xuICAgIGlmIChwbGF5ZXJEYXRhKSB7XG4gICAgICBHYW1lLmluc3RhbmNlLmxhc3RTZWxlY3RQbGF5ZXJJZExpc3QucHVzaChpbmRleCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idWJibGVMYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgdGhpcy5idWJibGVMYWJlbHNbaV0uc3RyaW5nID0gcGxheWVyRGF0YS5pbmZvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50TGlzdFswXS5hY3RpdmUgPSBpbmRleCA9PT0gMDtcbiAgICB0aGlzLmNvbnRlbnRMaXN0WzFdLmFjdGl2ZSA9IGluZGV4ID09PSAxO1xuICB9XG5cbiAgb25DbGlja0V2ZW50KGV2dCwgcGFybSkge1xuICAgIGlmIChwYXJtID09PSBcImdvXCIpIHtcbiAgICAgIFVJTWFuYWdlci5pbnN0YW5jZS5oaWRlQWxsKCk7XG5cbiAgICAgIGNvbnN0IGxhc3RTZWxlY3RQbGF5ZXJJZCA9IHRoaXMuX2dhbWVJbnN0YW5jZS5sYXN0U2VsZWN0UGxheWVySWRMaXN0W3RoaXMuX2dhbWVJbnN0YW5jZS5sYXN0U2VsZWN0UGxheWVySWRMaXN0Lmxlbmd0aCAtIDFdO1xuICAgICAgY2MuZGlyZWN0b3IuZW1pdChcImdhbWVTdGFydFwiLCBsYXN0U2VsZWN0UGxheWVySWQpO1xuICAgIH0gZWxzZSBpZiAocGFybSA9PT0gXCIwXCIgfHwgcGFybSA9PT0gXCIxXCIpIHtcbiAgICAgIGV2dC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2hvd0NvbmV0ZW50QnlJbmRleChOdW1iZXIocGFybSkpO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ani/fillEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1b7avi+YlNWIjvXSu8Nu1P', 'fillEffect');
// Script/Ani/fillEffect.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// 缓动填充效果
cc.Class({
  "extends": cc.Component,
  properties: {
    _callback: null
  },
  onLoad: function onLoad() {
    this.isLerp = false;
    this.timer = 0;
    this.lerpDuration = 0.2;
    this.ratio = 0;
    this.bar = this.node.getComponent(cc.Sprite);
  },
  updateProgress: function updateProgress(ratio, callback) {
    this._callback = callback;
    this.ratio = ratio;
    this.timer = 0;
    this.isLerp = true;
  },
  update: function update(dt) {
    if (!this.bar || !this.isLerp) {
      return;
    }

    this.timer += dt;

    if (this.timer >= this.lerpDuration) {
      this.timer = this.lerpDuration;
      this.isLerp = false;
    }

    this.bar.fillStart = cc.misc.lerp(this.bar.fillStart, this.ratio, this.timer / this.lerpDuration);
    this._callback && this._callback(this.bar.fillStart);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQW5pL2ZpbGxFZmZlY3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfY2FsbGJhY2siLCJvbkxvYWQiLCJpc0xlcnAiLCJ0aW1lciIsImxlcnBEdXJhdGlvbiIsInJhdGlvIiwiYmFyIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInVwZGF0ZVByb2dyZXNzIiwiY2FsbGJhY2siLCJ1cGRhdGUiLCJkdCIsImZpbGxTdGFydCIsIm1pc2MiLCJsZXJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFESCxHQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0k7QUFDTCxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixHQUFwQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlosRUFBRSxDQUFDYSxNQUExQixDQUFYO0FBQ0gsR0FiSTtBQWVMQyxFQUFBQSxjQWZLLDBCQWVVTCxLQWZWLEVBZWlCTSxRQWZqQixFQWUyQjtBQUM1QixTQUFLWCxTQUFMLEdBQWlCVyxRQUFqQjtBQUNBLFNBQUtOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtGLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0QsTUFBTCxHQUFjLElBQWQ7QUFDSCxHQXBCSTtBQXNCTFUsRUFBQUEsTUF0Qkssa0JBc0JFQyxFQXRCRixFQXNCTTtBQUNQLFFBQUksQ0FBQyxLQUFLUCxHQUFOLElBQWEsQ0FBQyxLQUFLSixNQUF2QixFQUErQjtBQUMzQjtBQUNIOztBQUVELFNBQUtDLEtBQUwsSUFBY1UsRUFBZDs7QUFDQSxRQUFJLEtBQUtWLEtBQUwsSUFBYyxLQUFLQyxZQUF2QixFQUFxQztBQUNqQyxXQUFLRCxLQUFMLEdBQWEsS0FBS0MsWUFBbEI7QUFDQSxXQUFLRixNQUFMLEdBQWMsS0FBZDtBQUNIOztBQUVELFNBQUtJLEdBQUwsQ0FBU1EsU0FBVCxHQUFxQmxCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUMsSUFBUixDQUFhLEtBQUtWLEdBQUwsQ0FBU1EsU0FBdEIsRUFBaUMsS0FBS1QsS0FBdEMsRUFBNkMsS0FBS0YsS0FBTCxHQUFhLEtBQUtDLFlBQS9ELENBQXJCO0FBQ0EsU0FBS0osU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWUsS0FBS00sR0FBTCxDQUFTUSxTQUF4QixDQUFsQjtBQUNIO0FBbkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuLy8g57yT5Yqo5aGr5YWF5pWI5p6cXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfY2FsbGJhY2s6IG51bGxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmlzTGVycCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5sZXJwRHVyYXRpb24gPSAwLjI7XG4gICAgICAgIHRoaXMucmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlUHJvZ3Jlc3MocmF0aW8sIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuaXNMZXJwID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5iYXIgfHwgIXRoaXMuaXNMZXJwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmxlcnBEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMubGVycER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5pc0xlcnAgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdGFydCA9IGNjLm1pc2MubGVycCh0aGlzLmJhci5maWxsU3RhcnQsIHRoaXMucmF0aW8sIHRoaXMudGltZXIgLyB0aGlzLmxlcnBEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrICYmIHRoaXMuX2NhbGxiYWNrKHRoaXMuYmFyLmZpbGxTdGFydCk7XG4gICAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NodePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1cdc4PPqSpPOKaVBRd+rDZw', 'NodePool');
// Script/NodePool.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodePool = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NodePool = /** @class */ (function () {
    function NodePool() {
        this.prefab = null;
        this.size = 0;
        this._pool = null;
    }
    NodePool.prototype.init = function () {
        if (!this._pool) {
            this._pool = new cc.NodePool();
        }
        for (var i = 0; i < this.size; i++) {
            var node = cc.instantiate(this.prefab);
            this._pool.put(node);
        }
    };
    NodePool.prototype.requestPool = function () {
        var node = null;
        if (this._pool.size() > 0) {
            node = this._pool.get();
        }
        else {
            node = cc.instantiate(this.prefab);
        }
        return node;
    };
    NodePool.prototype.returnPool = function (node) {
        this._pool.put(node);
    };
    __decorate([
        property(cc.Prefab)
    ], NodePool.prototype, "prefab", void 0);
    __decorate([
        property(cc.Integer)
    ], NodePool.prototype, "size", void 0);
    NodePool = __decorate([
        ccclass("NodePool")
    ], NodePool);
    return NodePool;
}());
exports.NodePool = NodePool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTm9kZVBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLFdBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVULFVBQUssR0FBZ0IsSUFBSSxDQUFDO0lBeUJ0QyxDQUFDO0lBdkJHLHVCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNILElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBDQUNKO0lBTFIsUUFBUTtRQURwQixPQUFPLENBQUMsVUFBVSxDQUFDO09BQ1AsUUFBUSxDQWdDcEI7SUFBRCxlQUFDO0NBaENELEFBZ0NDLElBQUE7QUFoQ1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJOb2RlUG9vbFwiKVxuZXhwb3J0IGNsYXNzIE5vZGVQb29sIHtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNpemU6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIF9wb29sOiBjYy5Ob2RlUG9vbCA9IG51bGw7XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Bvb2wpIHtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvb2wucHV0KG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdFBvb2woKSB7XG4gICAgICAgIGxldCBub2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3Bvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgICAgICAgbm9kZSA9IHRoaXMuX3Bvb2wuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVyblBvb2wobm9kZSkge1xuICAgICAgICB0aGlzLl9wb29sLnB1dChub2RlKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fb23HfAINOmLyoq290MApx', 'Utils');
// Script/Utils.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // 格式化秒转换00:00
    Utils.countDownFormat = function (sec) {
        var nowM = Math.floor(sec % 3600 / 60);
        var nowS = Math.floor(sec % 60);
        var nowMStr = nowM.toString();
        var nowSStr = nowS.toString();
        if (nowM < 10) {
            nowMStr = "0" + nowM;
        }
        if (nowS < 10) {
            nowSStr = "0" + nowS;
        }
        return nowMStr + ":" + nowSStr;
    };
    // 数组随机排序
    Utils.getRandomList = function (list) {
        list.sort(function (a, b) {
            return 0.5 - Math.random();
        });
        return list;
    };
    // 去重数组
    Utils.getUniqueArray = function (originArray) {
        var result = originArray.filter(function (v, i, arr) {
            return arr.indexOf(v, 0) === i;
        });
        return result;
    };
    // 获取范围内随机小数
    Utils.getRangeRandom = function (min, max) {
        return Math.random() * (max - min + 1) + min;
    };
    // 获取范围内随机整数
    Utils.getRangeRandomInteger = function (min, max) {
        var result = this.getRangeRandom(min, max);
        return Math.floor(result);
    };
    // 获取范围内随机不重复数组
    Utils.getRandomArrayNoRepeat = function (min, max, arrayLength) {
        var n = 0;
        if (min <= 0) {
            n = Math.abs(min) + 1;
        }
        var array = new Array(max + n)
            .fill(0)
            .map(function (v, i) { return i + min; })
            .sort(function () { return 0.5 - Math.random(); })
            .filter(function (v, i) { return v <= max + n && i < arrayLength; });
        return array;
    };
    // 世界坐标转本地坐标
    Utils.worldConvertLocalPointAR = function (node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    };
    // 本地坐标转世界坐标
    Utils.localConvertWorldPointAR = function (node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    };
    // 获取字符串中的数字
    Utils.getNumberFromStr = function (str) {
        return str.replace(/[^0-9]/ig, "");
    };
    // 两个数组是否相同 只对数字
    Utils.isEqualsArray = function (arr, arr2) {
        return JSON.stringify(arr.sort()) === JSON.stringify(arr2.sort());
    };
    // url参数 解析为一个对象
    Utils.getParmFromURL = function (url) {
        // 先将字符串通过 split 方法，以 "?" 为分割符将其分割成数组；
        // 该数组有两个元素，第一个为空字符串，第二个为 url 参数字符串
        var arr = url.split('?');
        if (arr.length < 2) {
            cc.log("url缺少参数");
            return;
        }
        // 将参数字符串以 "&" 符号为分隔符进行分割
        var params = arr[1].split('&');
        // 定义一个数组用于存储参数
        var obj = {};
        // 通过循环将参数以键值对的形式存储在变量 obj 中
        for (var i = 0; i < params.length; i++) {
            var arr_params = params[i].split('=');
            obj[arr_params[0]] = arr_params[1];
        }
        return obj;
    };
    Utils.stringFormat = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            var id = "{" + i + "}";
            str = str.replace(id, args[i]);
        }
        return str;
    };
    return Utils;
}());
exports.Utils = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUU7WUFDaEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QixlQUFlO1FBQ2YsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ1osNEJBQTRCO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNyQztRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUVNLGtCQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLEVBQUUsR0FBRyxNQUFJLENBQUMsTUFBRyxDQUFDO1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQS9HQSxBQStHQyxJQUFBO0FBL0dZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgLy8g5qC85byP5YyW56eS6L2s5o2iMDA6MDBcbiAgICBzdGF0aWMgY291bnREb3duRm9ybWF0KHNlYzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBub3dNID0gTWF0aC5mbG9vcihzZWMgJSAzNjAwIC8gNjApO1xuICAgICAgICBsZXQgbm93UyA9IE1hdGguZmxvb3Ioc2VjICUgNjApO1xuICAgICAgICBsZXQgbm93TVN0ciA9IG5vd00udG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IG5vd1NTdHIgPSBub3dTLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChub3dNIDwgMTApIHtcbiAgICAgICAgICAgIG5vd01TdHIgPSBgMCR7bm93TX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub3dTIDwgMTApIHtcbiAgICAgICAgICAgIG5vd1NTdHIgPSBgMCR7bm93U31gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub3dNU3RyICsgXCI6XCIgKyBub3dTU3RyO1xuICAgIH1cblxuICAgIC8vIOaVsOe7hOmaj+acuuaOkuW6j1xuICAgIHN0YXRpYyBnZXRSYW5kb21MaXN0KGxpc3QpIHtcbiAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIC8vIOWOu+mHjeaVsOe7hFxuICAgIHN0YXRpYyBnZXRVbmlxdWVBcnJheTxUPihvcmlnaW5BcnJheTogQXJyYXk8VD4pOiBBcnJheTxUPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbkFycmF5LmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLmluZGV4T2YodiwgMCkgPT09IGk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOiOt+WPluiMg+WbtOWGhemaj+acuuWwj+aVsFxuICAgIHN0YXRpYyBnZXRSYW5nZVJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbjtcbiAgICB9XG5cbiAgICAvLyDojrflj5bojIPlm7TlhoXpmo/mnLrmlbTmlbBcbiAgICBzdGF0aWMgZ2V0UmFuZ2VSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZ2VSYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluiMg+WbtOWGhemaj+acuuS4jemHjeWkjeaVsOe7hFxuICAgIHN0YXRpYyBnZXRSYW5kb21BcnJheU5vUmVwZWF0KG1pbiwgbWF4LCBhcnJheUxlbmd0aCkge1xuICAgICAgICBsZXQgbiA9IDA7XG4gICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgbiA9IE1hdGguYWJzKG1pbikgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KG1heCArIG4pXG4gICAgICAgICAgICAuZmlsbCgwKVxuICAgICAgICAgICAgLm1hcCgodiwgaSkgPT4gaSArIG1pbilcbiAgICAgICAgICAgIC5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB2IDw9IG1heCArIG4gJiYgaSA8IGFycmF5TGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIOS4lueVjOWdkOagh+i9rOacrOWcsOWdkOagh1xuICAgIHN0YXRpYyB3b3JsZENvbnZlcnRMb2NhbFBvaW50QVIobm9kZSwgd29ybGRQb2ludCkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8g5pys5Zyw5Z2Q5qCH6L2s5LiW55WM5Z2Q5qCHXG4gICAgc3RhdGljIGxvY2FsQ29udmVydFdvcmxkUG9pbnRBUihub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluWtl+espuS4suS4reeahOaVsOWtl1xuICAgIHN0YXRpYyBnZXROdW1iZXJGcm9tU3RyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XG4gICAgfVxuXG4gICAgLy8g5Lik5Liq5pWw57uE5piv5ZCm55u45ZCMIOWPquWvueaVsOWtl1xuICAgIHN0YXRpYyBpc0VxdWFsc0FycmF5KGFycjogQXJyYXk8bnVtYmVyPiwgYXJyMjogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJyLnNvcnQoKSkgPT09IEpTT04uc3RyaW5naWZ5KGFycjIuc29ydCgpKTtcbiAgICB9XG5cbiAgICAvLyB1cmzlj4LmlbAg6Kej5p6Q5Li65LiA5Liq5a+56LGhXG4gICAgc3RhdGljIGdldFBhcm1Gcm9tVVJMKHVybDogc3RyaW5nKSB7XG4gICAgICAgIC8vIOWFiOWwhuWtl+espuS4sumAmui/hyBzcGxpdCDmlrnms5XvvIzku6UgXCI/XCIg5Li65YiG5Ymy56ym5bCG5YW25YiG5Ymy5oiQ5pWw57uE77ybXG4gICAgICAgIC8vIOivpeaVsOe7hOacieS4pOS4quWFg+e0oO+8jOesrOS4gOS4quS4uuepuuWtl+espuS4su+8jOesrOS6jOS4quS4uiB1cmwg5Y+C5pWw5a2X56ym5LiyXG4gICAgICAgIGxldCBhcnIgPSB1cmwuc3BsaXQoJz8nKVxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcInVybOe8uuWwkeWPguaVsFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDlsIblj4LmlbDlrZfnrKbkuLLku6UgXCImXCIg56ym5Y+35Li65YiG6ZqU56ym6L+b6KGM5YiG5YmyXG4gICAgICAgIGxldCBwYXJhbXMgPSBhcnJbMV0uc3BsaXQoJyYnKVxuICAgICAgICAvLyDlrprkuYnkuIDkuKrmlbDnu4TnlKjkuo7lrZjlgqjlj4LmlbBcbiAgICAgICAgbGV0IG9iaiA9IHt9XG4gICAgICAgIC8vIOmAmui/h+W+queOr+WwhuWPguaVsOS7pemUruWAvOWvueeahOW9ouW8j+WtmOWCqOWcqOWPmOmHjyBvYmog5LitXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJyX3BhcmFtcyA9IHBhcmFtc1tpXS5zcGxpdCgnPScpXG4gICAgICAgICAgICBvYmpbYXJyX3BhcmFtc1swXV0gPSBhcnJfcGFyYW1zWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIHN0YXRpYyBzdHJpbmdGb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGlkID0gYHske2l9fWA7XG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShpZCwgYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ani/UpDownAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '315276mGyROOoXy8ukIb3QW', 'UpDownAni');
// Script/Ani/UpDownAni.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UpDownAni = /** @class */ (function (_super) {
    __extends(UpDownAni, _super);
    function UpDownAni() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpDownAni.prototype.start = function () {
        cc.tween(this.node)
            .repeatForever(cc.tween().by(1, { y: 15 })
            .by(1, { y: -15 })).start();
    };
    UpDownAni = __decorate([
        ccclass
    ], UpDownAni);
    return UpDownAni;
}(cc.Component));
exports.default = UpDownAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQW5pL1VwRG93bkFuaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFTQSxDQUFDO0lBUkMseUJBQUssR0FBTDtRQUNFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixhQUFhLENBQ1osRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDeEIsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3JCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFZCxDQUFDO0lBUmtCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FTN0I7SUFBRCxnQkFBQztDQVRELEFBU0MsQ0FUc0MsRUFBRSxDQUFDLFNBQVMsR0FTbEQ7a0JBVG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwRG93bkFuaSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIHN0YXJ0KCkge1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjYy50d2VlbigpLmJ5KDEsIHsgeTogMTUgfSlcbiAgICAgICAgICAuYnkoMSwgeyB5OiAtMTUgfSlcbiAgICAgICkuc3RhcnQoKTtcblxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/AnswerUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvQW5zd2VyVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBd0NDO1FBdENDLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQWlCLElBQUksQ0FBQzs7SUFrQzlCLENBQUM7SUFoQ0MseUJBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxJQUFXO1FBQWhCLGlCQWtCQztRQWpCQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUU5QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxTQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNLO0lBTlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdDNUI7SUFBRCxlQUFDO0NBeENELEFBd0NDLENBeENxQyxnQkFBTSxHQXdDM0M7a0JBeENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4vQmFzZVVJXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbnN3ZXJVSSBleHRlbmRzIEJhc2VVSSB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB3aW46IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZmFpbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gIHdpbkFuaTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy53aW5Bbmkub24oXCJmaW5pc2hlZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9vbk5leHRMZXZlbCh0cnVlKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIGluaXQoYXJnczogYW55W10pIHtcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBhcmdzWzBdO1xuICAgIGNvbnN0IGhhdmVXcm9uZyA9IGFyZ3NbMV07XG5cbiAgICB0aGlzLndpbi5hY3RpdmUgPSBpc0NvcnJlY3Q7XG4gICAgdGhpcy5mYWlsLmFjdGl2ZSA9ICFpc0NvcnJlY3Q7XG5cbiAgICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgICBpZiAoIWhhdmVXcm9uZykge1xuICAgICAgICB0aGlzLndpbkFuaS5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbk5leHRMZXZlbChmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9LCAxKTtcbiAgICB9XG4gIH1cblxuICBfb25OZXh0TGV2ZWwoaXNTaG93QW5pOiBib29sZWFuKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgY2MuZGlyZWN0b3IuZW1pdChcImdhbWVOZXh0TGV2ZWxcIiwgaXNTaG93QW5pKTtcbiAgICB9LCAwLjMpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/PopBaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvUG9wQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQTBCQztRQXhCQyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7O0lBc0J4QixDQUFDO0lBcEJDLHdCQUFJLEdBQUosVUFBSyxJQUFnQjtRQUFoQixxQkFBQSxFQUFBLFdBQWdCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN6QixLQUFLLEVBQUUsQ0FBQztRQUVYLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDakIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUMvQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3JCLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNJO0lBSkgsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTBCN0I7SUFBRCxnQkFBQztDQTFCRCxBQTBCQyxDQTFCc0MsZ0JBQU0sR0EwQjVDO2tCQTFCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQmFzZVVJIGZyb20gXCIuL0Jhc2VVSVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wQmFzZVVJIGV4dGVuZHMgQmFzZVVJIHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGFuZWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gIHNob3coZGF0YTogYW55ID0gbnVsbCkge1xuICAgIHRoaXMuaW5pdChkYXRhKTtcbiAgICB0aGlzLnBsYXlBbmkoKTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLm1hc2sgJiYgKHRoaXMubWFzay5vcGFjaXR5ID0gMCk7XG4gICAgY2MudHdlZW4odGhpcy5tYXNrKVxuICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAyMDAgfSlcbiAgICAgIC5zdGFydCgpO1xuXG4gICAgdGhpcy5wYW5lbC5zY2FsZSA9IDA7XG4gICAgY2MudHdlZW4odGhpcy5wYW5lbClcbiAgICAgIC50bygwLjIsIHsgc2NhbGU6IDEuMTUgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KVxuICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9KVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubWFzayAmJiAodGhpcy5tYXNrLm9wYWNpdHkgPSAwKTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixzQ0FBaUM7QUFFM0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBa0IsTUFLakI7QUFMRCxXQUFrQixNQUFNO0lBQ3RCLDJCQUFpQixDQUFBO0lBQ2pCLCtCQUFxQixDQUFBO0lBQ3JCLCtCQUFxQixDQUFBO0lBQ3JCLCtCQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFMaUIsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBS3ZCO0FBR0Q7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUFtRUM7UUFoRVMsZUFBUyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBRzlDLFdBQUssR0FBYyxFQUFFLENBQUM7UUFFdEIsY0FBUSxHQUFZLElBQUksQ0FBQzs7SUEyRDNCLENBQUM7a0JBbkVZLFNBQVM7SUFVcEIsMEJBQU0sR0FBTjtRQUNFLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLElBQVksRUFBRSxFQUFhO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDaEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNO2VBQ3BCLElBQUksSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixPQUFPO1NBQ1I7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDcEIsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUM5QyxJQUFJLENBQUM7WUFDSixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUM1QyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUNoQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBaEVhLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBSXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTztJQVJkLFNBQVM7UUFEckIsT0FBTztPQUNLLFNBQVMsQ0FtRXJCO0lBQUQsZ0JBQUM7Q0FuRUQsQUFtRUMsQ0FuRThCLEVBQUUsQ0FBQyxTQUFTLEdBbUUxQztBQW5FWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQmFzZVVJIGZyb20gXCIuL1VJL0Jhc2VVSVwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZXhwb3J0IGNvbnN0IGVudW0gVUlUeXBlIHtcbiAgTWVudVVJID0gXCJNZW51VUlcIixcbiAgU2VsZWN0VUkgPSBcIlNlbGVjdFVJXCIsXG4gIFJlc3VsdFVJID0gXCJSZXN1bHRVSVwiLFxuICBBbnN3ZXJVSSA9IFwiQW5zd2VyVUlcIixcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IFVJTWFuYWdlciA9IG51bGw7XG4gIHByaXZhdGUgX2FsbFBhbmVsID0gbmV3IE1hcDxzdHJpbmcsIEJhc2VVST4oKTtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYWxsVUk6IGNjLk5vZGVbXSA9IFtdO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZmFkZU1hc2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICBVSU1hbmFnZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hbGxVSS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdWkgPSB0aGlzLmFsbFVJW2ldLmdldENvbXBvbmVudChCYXNlVUkpO1xuICAgICAgdGhpcy5fYWxsUGFuZWwuc2V0KHVpLm5vZGUubmFtZSwgdWkpO1xuICAgICAgdWkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zaG93VUkoVUlUeXBlLk1lbnVVSSk7XG4gIH1cblxuICBzaG93VUkodHlwZTogVUlUeXBlLCBjYj86IEZ1bmN0aW9uLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIGlmICh0aGlzLl9hbGxQYW5lbC5zaXplID09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFuZWw6IEJhc2VVSSA9IHRoaXMuX2FsbFBhbmVsLmdldCh0eXBlKTtcbiAgICB0aGlzLmZhZGVNYXNrLm9wYWNpdHkgPSAwO1xuXG4gICAgaWYgKHR5cGUgPT0gVUlUeXBlLk1lbnVVSVxuICAgICAgfHwgdHlwZSA9PSBVSVR5cGUuQW5zd2VyVUkpIHtcbiAgICAgIHBhbmVsLnNob3coYXJncyk7XG4gICAgICBjYiAmJiBjYihwYW5lbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2MudHdlZW4odGhpcy5mYWRlTWFzaylcbiAgICAgIC50bygwLjQ1LCB7IG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJmYWRlXCIgfSlcbiAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgcGFuZWwuc2hvdyhhcmdzKTtcbiAgICAgICAgY2IgJiYgY2IocGFuZWwpO1xuICAgICAgfSlcbiAgICAgIC50bygwLjE1LCB7IG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IFwiZmFkZVwiIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIGhpZGVVSSh0eXBlOiBVSVR5cGUpIHtcbiAgICBpZiAodGhpcy5fYWxsUGFuZWwuc2l6ZSA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmFkZU1hc2sub3BhY2l0eSA9IDA7XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLl9hbGxQYW5lbC5nZXQodHlwZSk7XG4gICAgcGFuZWwuaGlkZSgpO1xuICB9XG5cbiAgaGlkZUFsbCgpIHtcbiAgICBpZiAodGhpcy5fYWxsUGFuZWwuc2l6ZSA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mYWRlTWFzay5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLl9hbGxQYW5lbC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB2YWx1ZS5oaWRlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Net/NetManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4681fK5QQNFQo/P+kErr4b3', 'NetManger');
// Script/Net/NetManger.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetManager = void 0;
var NetManager = /** @class */ (function () {
    function NetManager() {
    }
    NetManager.send = function (url, method, data, successCallback, errorCallback) {
        if (data === void 0) { data = null; }
        if (successCallback === void 0) { successCallback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        cc.log("请求数据", url, method, data);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 3000;
        xhr.onreadystatechange = function () {
            cc.log("连接状态：", xhr.readyState, xhr.status, xhr.statusText);
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.response);
                if (response["code"] == 500) {
                    errorCallback && errorCallback(response["msg"]);
                }
                else if (response["code"] == 200) {
                    successCallback && successCallback(response["data"]);
                }
            }
        };
        // xhr.responseType = "json";
        xhr.addEventListener("load", function (evt) {
            cc.log(evt);
        });
        xhr.addEventListener("error", function (evt) {
            cc.error(evt);
        });
        xhr.addEventListener("timeout", function (evt) {
            cc.error(evt);
        });
        // xhr.addEventListener("abort", (evt) => {
        //     cc.error(evt);
        // });
        // xhr.addEventListener("progress", (evt) => {
        //     cc.error(evt);
        // });
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        if (!data) {
            xhr.send();
        }
        else {
            xhr.send(data);
        }
    };
    return NetManager;
}());
exports.NetManager = NetManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTmV0L05ldE1hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7OztBQUVuRztJQUFBO0lBK0NBLENBQUM7SUE5Q1EsZUFBSSxHQUFYLFVBQ0UsR0FBVyxFQUNYLE1BQWMsRUFDZCxJQUFXLEVBQ1gsZUFBc0IsRUFDdEIsYUFBb0I7UUFGcEIscUJBQUEsRUFBQSxXQUFXO1FBQ1gsZ0NBQUEsRUFBQSxzQkFBc0I7UUFDdEIsOEJBQUEsRUFBQSxvQkFBb0I7UUFFcEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3ZCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDaEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTtvQkFDM0IsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDakQ7cUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO29CQUNsQyxlQUFlLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN0RDthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsNkJBQTZCO1FBQzdCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHO1lBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRztZQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsMkNBQTJDO1FBQzNDLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sOENBQThDO1FBQzlDLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQS9DWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmV4cG9ydCBjbGFzcyBOZXRNYW5hZ2VyIHtcbiAgc3RhdGljIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgZGF0YSA9IG51bGwsXG4gICAgc3VjY2Vzc0NhbGxiYWNrID0gbnVsbCxcbiAgICBlcnJvckNhbGxiYWNrID0gbnVsbFxuICApIHtcbiAgICBjYy5sb2coXCLor7fmsYLmlbDmja5cIiwgdXJsLCBtZXRob2QsIGRhdGEpO1xuICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIudGltZW91dCA9IDMwMDA7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmxvZyhcIui/nuaOpeeKtuaAge+8mlwiLCB4aHIucmVhZHlTdGF0ZSwgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQpO1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlW1wiY29kZVwiXSA9PSA1MDApIHtcbiAgICAgICAgICBlcnJvckNhbGxiYWNrICYmIGVycm9yQ2FsbGJhY2socmVzcG9uc2VbXCJtc2dcIl0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlW1wiY29kZVwiXSA9PSAyMDApIHtcbiAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgJiYgc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlW1wiZGF0YVwiXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHhoci5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2dCkgPT4ge1xuICAgICAgY2MubG9nKGV2dCk7XG4gICAgfSk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXZ0KSA9PiB7XG4gICAgICBjYy5lcnJvcihldnQpO1xuICAgIH0pO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoZXZ0KSA9PiB7XG4gICAgICBjYy5lcnJvcihldnQpO1xuICAgIH0pO1xuICAgIC8vIHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKGV2dCkgPT4ge1xuICAgIC8vICAgICBjYy5lcnJvcihldnQpO1xuICAgIC8vIH0pO1xuICAgIC8vIHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4ge1xuICAgIC8vICAgICBjYy5lcnJvcihldnQpO1xuICAgIC8vIH0pO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgfVxuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'Loading');
// Script/Loading.ts

"use strict";
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
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.greenGirds = null;
        _this._greenGirds = [];
        return _this;
    }
    Loading.prototype.onLoad = function () {
        cc.macro.ENABLE_MULTI_TOUCH = false;
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        // manager.enabledDebugDraw = true;
        Constants_1.Constants.storeParmForAssessStatistics();
        this.preloadGameScene();
    };
    Loading.prototype.start = function () {
        this._greenGirds = this.greenGirds.children;
    };
    Loading.prototype.preloadGameScene = function () {
        var _this = this;
        cc.director.preloadScene('game', function (completeCount, totalCount, item) {
            var v = completeCount / totalCount;
            _this.label.string = Math.floor(v * 100) + "%";
            v = Math.floor(v * 10);
            for (var i = 0, len = _this._greenGirds.length; i < len; i++) {
                if (i <= v) {
                    _this._greenGirds[i].active = true;
                }
            }
        }, function () {
            cc.director.loadScene("game");
            cc.log('game scene preloaded');
        });
    };
    __decorate([
        property(cc.Label)
    ], Loading.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Loading.prototype, "greenGirds", void 0);
    Loading = __decorate([
        ccclass
    ], Loading);
    return Loading;
}(cc.Component));
exports.default = Loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBK0M7QUFFekMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFxQ0M7UUFsQ0MsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFjLEVBQUUsQ0FBQzs7SUE4QnRDLENBQUM7SUE1QkMsd0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixtQ0FBbUM7UUFDbkMscUJBQVMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQUEsaUJBY0M7UUFiQyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUk7WUFDL0QsSUFBSSxDQUFDLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBRyxDQUFDO1lBQzlDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBRTtZQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBTFIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXFDM0I7SUFBRCxjQUFDO0NBckNELEFBcUNDLENBckNvQyxFQUFFLENBQUMsU0FBUyxHQXFDaEQ7a0JBckNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uZmlnL0NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ3JlZW5HaXJkczogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfZ3JlZW5HaXJkczogY2MuTm9kZVtdID0gW107XG5cbiAgb25Mb2FkKCkge1xuICAgIGNjLm1hY3JvLkVOQUJMRV9NVUxUSV9UT1VDSCA9IGZhbHNlO1xuICAgIGNvbnN0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgIENvbnN0YW50cy5zdG9yZVBhcm1Gb3JBc3Nlc3NTdGF0aXN0aWNzKCk7XG4gICAgdGhpcy5wcmVsb2FkR2FtZVNjZW5lKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLl9ncmVlbkdpcmRzID0gdGhpcy5ncmVlbkdpcmRzLmNoaWxkcmVuO1xuICB9XG5cbiAgcHJlbG9hZEdhbWVTY2VuZSgpIHtcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2dhbWUnLCAoY29tcGxldGVDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xuICAgICAgbGV0IHYgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcbiAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gYCR7TWF0aC5mbG9vcih2ICogMTAwKX0lYDtcbiAgICAgIHYgPSBNYXRoLmZsb29yKHYgKiAxMCk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZ3JlZW5HaXJkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaSA8PSB2KSB7XG4gICAgICAgICAgdGhpcy5fZ3JlZW5HaXJkc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcbiAgICAgIGNjLmxvZygnZ2FtZSBzY2VuZSBwcmVsb2FkZWQnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/BaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1792aP8x6NGPK9HhqOlU1E1', 'BaseUI');
// Script/UI/BaseUI.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ani = null;
        return _this;
    }
    BaseUI.prototype.onLoad = function () {
        this.ani = this.node.getComponent(cc.Animation);
    };
    BaseUI.prototype.init = function (args) {
    };
    BaseUI.prototype.show = function (args) {
        this.node.active = true;
        this.init(args);
        this.playAni();
    };
    BaseUI.prototype.playAni = function () {
        if (this.ani) {
            this.ani.play();
        }
    };
    BaseUI.prototype.hide = function () {
        this.node.active = false;
    };
    BaseUI = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(cc.Component));
exports.default = BaseUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvQmFzZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBeUJDO1FBeEJXLFNBQUcsR0FBaUIsSUFBSSxDQUFDOztJQXdCckMsQ0FBQztJQXRCQyx1QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHFCQUFJLEdBQUosVUFBSyxJQUFXO0lBQ2hCLENBQUM7SUFFRCxxQkFBSSxHQUFKLFVBQUssSUFBVztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsd0JBQU8sR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELHFCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQXhCa0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXlCMUI7SUFBRCxhQUFDO0NBekJELEFBeUJDLENBekJtQyxFQUFFLENBQUMsU0FBUyxHQXlCL0M7a0JBekJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBwcm90ZWN0ZWQgYW5pOiBjYy5BbmltYXRpb24gPSBudWxsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmFuaSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgfVxuXG4gIGluaXQoYXJnczogYW55W10pIHtcbiAgfVxuXG4gIHNob3coYXJnczogYW55W10pIHtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoYXJncyk7XG4gICAgdGhpcy5wbGF5QW5pKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGxheUFuaSgpIHtcbiAgICBpZiAodGhpcy5hbmkpIHtcbiAgICAgIHRoaXMuYW5pLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/ResultUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvUmVzdWx0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsaURBQWdEO0FBQ2hELGdDQUEyQjtBQUMzQiwwQ0FBeUM7QUFDekMsMENBQWlEO0FBQ2pELG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQWdEQztRQTlDQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWdCLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRWpCLGVBQVMsR0FBYyxFQUFFLENBQUM7O0lBd0NwQyxDQUFDO0lBdENDLHVCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQU0sY0FBYyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsb0VBQThDLGNBQWMsc0RBQTBCLENBQUM7UUFDbEgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDUixhQUFhLENBQ1osRUFBRSxDQUFDLEtBQUssRUFBRTthQUNQLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN0QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ3pCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFWixpQkFBTyxDQUFDLHVCQUF1QixDQUFDLHFCQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixjQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLHFCQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxrQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUE3Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tEQUNXO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0Q1QjtJQUFELGVBQUM7Q0FoREQsQUFnREMsQ0FoRHFDLGdCQUFNLEdBZ0QzQztrQkFoRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL0NvbmZpZy9Db25zdGFudHNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi9HYW1lXCI7XG5pbXBvcnQgeyBTZW5kTXNnIH0gZnJvbSBcIi4uL05ldC9TZW5kTXNnXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIsIFVJVHlwZSB9IGZyb20gXCIuLi9VSU1hbmFnZXJcIjtcbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4vQmFzZVVJXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRVSSBleHRlbmRzIEJhc2VVSSB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0aXRsZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gIHN0YXJOdW1MYWJlbDogY2MuUmljaFRleHQgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgc3Rhck5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIHByaXZhdGUgX3N0YXJMaXN0OiBjYy5Ob2RlW10gPSBbXTtcblxuICBpbml0KGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5fc3Rhckxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMuX3N0YXJMaXN0W2ldLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX3N0YXJMaXN0LnNwbGljZShpLCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFyTGlzdExlbmd0aCA9IEdhbWUuaW5zdGFuY2UubGV2ZWwuc3Rhckxpc3QubGVuZ3RoO1xuICAgIHRoaXMuc3Rhck51bUxhYmVsLnN0cmluZyA9IGA8Y29sb3I9IzMzMzMzMz7kvaDojrflvpfkuoY8Y29sb3I9I0RBNjcwMD48c2l6ZT01MD4ke3N0YXJMaXN0TGVuZ3RofTwvc2l6ZT48L2M+6aKX5pif55qE5aWW5YqxPC9jb2xvcj5gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Rhckxpc3RMZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fc2hvd1N0YXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpdGxlTm9kZS5hbmdsZSA9IDA7XG4gICAgY2MudHdlZW4odGhpcy50aXRsZU5vZGUpXG4gICAgICAuZGVsYXkoMSlcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjYy50d2VlbigpXG4gICAgICAgICAgLnRvKDEuNSwgeyBhbmdsZTogLTUgfSlcbiAgICAgICAgICAudG8oMS41LCB7IGFuZ2xlOiA1IH0pXG4gICAgICApLnN0YXJ0KCk7XG5cbiAgICBTZW5kTXNnLnJlcVNhdmVBc3Nlc3NTdGF0aXN0aWNzKENvbnN0YW50cy5Bc3Nlc3NTdGF0aXN0aWNzSnNvbik7XG4gIH1cblxuICBfc2hvd1N0YXIoKSB7XG4gICAgaWYgKHRoaXMuc3Rhck5vZGUpIHtcbiAgICAgIGNvbnN0IHN0YXIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnN0YXJOb2RlKTtcbiAgICAgIHN0YXIucGFyZW50ID0gdGhpcy5zdGFyTm9kZS5wYXJlbnQ7XG4gICAgICB0aGlzLl9zdGFyTGlzdC5wdXNoKHN0YXIpO1xuICAgICAgc3Rhci5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrQmFja0dhbWUoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgR2FtZS5pbnN0YW5jZS5yZXNldCgpO1xuICAgIFVJTWFuYWdlci5pbnN0YW5jZS5zaG93VUkoVUlUeXBlLk1lbnVVSSk7XG4gIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

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
var LevelSelect_1 = require("./LevelSelect");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelPrefab = null;
        _this.levelParent = null;
        _this._level = null;
        _this.lastSelectPlayerIdList = [];
        return _this;
    }
    Game_1 = Game;
    Object.defineProperty(Game.prototype, "level", {
        get: function () {
            return this._level;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.onLoad = function () {
        Game_1.instance = this;
        cc.director.on("gameStart", this._startGame, this);
    };
    Game.prototype._startGame = function (playerId) {
        if (!this._level) {
            this._level = cc.instantiate(this.levelPrefab).getComponent(LevelSelect_1.default);
            this._level.node.parent = this.levelParent;
        }
        this._level.init(playerId);
    };
    Game.prototype.reset = function () {
        this.lastSelectPlayerIdList = [];
        this.level.reset();
    };
    var Game_1;
    Game.instance = null;
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "levelPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "levelParent", void 0);
    Game = Game_1 = __decorate([
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw2Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4QkM7UUE1QkMsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFHcEIsWUFBTSxHQUFnQixJQUFJLENBQUM7UUFJNUIsNEJBQXNCLEdBQWEsRUFBRSxDQUFDOztJQW1CL0MsQ0FBQzthQTlCb0IsSUFBSTtJQVF2QixzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUdELHFCQUFNLEdBQU47UUFDRSxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7O0lBdkJhLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFKcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNVO0lBSlQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThCeEI7SUFBRCxXQUFDO0NBOUJELEFBOEJDLENBOUJpQyxFQUFFLENBQUMsU0FBUyxHQThCN0M7a0JBOUJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBMZXZlbFNlbGVjdCBmcm9tIFwiLi9MZXZlbFNlbGVjdFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGxldmVsUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbGV2ZWxQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWUgPSBudWxsO1xuICBwcml2YXRlIF9sZXZlbDogTGV2ZWxTZWxlY3QgPSBudWxsO1xuICBwdWJsaWMgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9sZXZlbDtcbiAgfVxuICBwdWJsaWMgbGFzdFNlbGVjdFBsYXllcklkTGlzdDogbnVtYmVyW10gPSBbXTtcblxuICBvbkxvYWQoKSB7XG4gICAgR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgY2MuZGlyZWN0b3Iub24oXCJnYW1lU3RhcnRcIiwgdGhpcy5fc3RhcnRHYW1lLCB0aGlzKTtcbiAgfVxuXG4gIF9zdGFydEdhbWUocGxheWVySWQ6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5fbGV2ZWwpIHtcbiAgICAgIHRoaXMuX2xldmVsID0gY2MuaW5zdGFudGlhdGUodGhpcy5sZXZlbFByZWZhYikuZ2V0Q29tcG9uZW50KExldmVsU2VsZWN0KTtcbiAgICAgIHRoaXMuX2xldmVsLm5vZGUucGFyZW50ID0gdGhpcy5sZXZlbFBhcmVudDtcbiAgICB9XG4gICAgdGhpcy5fbGV2ZWwuaW5pdChwbGF5ZXJJZCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmxhc3RTZWxlY3RQbGF5ZXJJZExpc3QgPSBbXTtcbiAgICB0aGlzLmxldmVsLnJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

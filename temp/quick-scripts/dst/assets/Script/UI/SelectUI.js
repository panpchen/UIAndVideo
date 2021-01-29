
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
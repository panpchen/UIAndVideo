
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
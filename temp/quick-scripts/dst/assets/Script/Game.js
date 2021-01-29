
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
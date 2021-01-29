"use strict";
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
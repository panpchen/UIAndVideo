"use strict";
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
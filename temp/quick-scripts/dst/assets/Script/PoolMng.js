
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
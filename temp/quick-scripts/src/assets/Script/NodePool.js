"use strict";
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
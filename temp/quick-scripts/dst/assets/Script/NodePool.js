
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
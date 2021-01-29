
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
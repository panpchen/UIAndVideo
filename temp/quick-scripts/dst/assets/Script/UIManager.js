
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
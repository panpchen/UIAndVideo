
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9hZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBK0M7QUFFekMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFBakQ7UUFBQSxxRUFxQ0M7UUFsQ0MsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBVyxHQUFjLEVBQUUsQ0FBQzs7SUE4QnRDLENBQUM7SUE1QkMsd0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixtQ0FBbUM7UUFDbkMscUJBQVMsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQUEsaUJBY0M7UUFiQyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLElBQUk7WUFDL0QsSUFBSSxDQUFDLEdBQUcsYUFBYSxHQUFHLFVBQVUsQ0FBQztZQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBRyxDQUFDO1lBQzlDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBRTtZQUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBTFIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXFDM0I7SUFBRCxjQUFDO0NBckNELEFBcUNDLENBckNvQyxFQUFFLENBQUMsU0FBUyxHQXFDaEQ7a0JBckNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uZmlnL0NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ3JlZW5HaXJkczogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfZ3JlZW5HaXJkczogY2MuTm9kZVtdID0gW107XG5cbiAgb25Mb2FkKCkge1xuICAgIGNjLm1hY3JvLkVOQUJMRV9NVUxUSV9UT1VDSCA9IGZhbHNlO1xuICAgIGNvbnN0IG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgIENvbnN0YW50cy5zdG9yZVBhcm1Gb3JBc3Nlc3NTdGF0aXN0aWNzKCk7XG4gICAgdGhpcy5wcmVsb2FkR2FtZVNjZW5lKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLl9ncmVlbkdpcmRzID0gdGhpcy5ncmVlbkdpcmRzLmNoaWxkcmVuO1xuICB9XG5cbiAgcHJlbG9hZEdhbWVTY2VuZSgpIHtcbiAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2dhbWUnLCAoY29tcGxldGVDb3VudCwgdG90YWxDb3VudCwgaXRlbSkgPT4ge1xuICAgICAgbGV0IHYgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcbiAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gYCR7TWF0aC5mbG9vcih2ICogMTAwKX0lYDtcbiAgICAgIHYgPSBNYXRoLmZsb29yKHYgKiAxMCk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZ3JlZW5HaXJkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaSA8PSB2KSB7XG4gICAgICAgICAgdGhpcy5fZ3JlZW5HaXJkc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgKCkgPT4ge1xuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZ2FtZVwiKTtcbiAgICAgIGNjLmxvZygnZ2FtZSBzY2VuZSBwcmVsb2FkZWQnKTtcbiAgICB9KTtcbiAgfVxufVxuIl19
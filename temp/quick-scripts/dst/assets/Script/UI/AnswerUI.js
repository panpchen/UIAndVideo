
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/UI/AnswerUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc236AFrLJE8IpU15cyEycH', 'AnswerUI');
// Script/UI/AnswerUI.ts

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
var AnswerUI = /** @class */ (function (_super) {
    __extends(AnswerUI, _super);
    function AnswerUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.win = null;
        _this.fail = null;
        _this.winAni = null;
        return _this;
    }
    AnswerUI.prototype.onLoad = function () {
        var _this = this;
        this.winAni.on("finished", function () {
            _this._onNextLevel(true);
        }, this);
    };
    AnswerUI.prototype.init = function (args) {
        var _this = this;
        var isCorrect = args[0];
        var haveWrong = args[1];
        this.win.active = isCorrect;
        this.fail.active = !isCorrect;
        if (isCorrect) {
            if (!haveWrong) {
                this.winAni.play();
            }
            else {
                this._onNextLevel(false);
            }
        }
        else {
            this.scheduleOnce(function () {
                _this.hide();
            }, 1);
        }
    };
    AnswerUI.prototype._onNextLevel = function (isShowAni) {
        this.hide();
        this.scheduleOnce(function () {
            cc.director.emit("gameNextLevel", isShowAni);
        }, 0.3);
    };
    __decorate([
        property(cc.Node)
    ], AnswerUI.prototype, "win", void 0);
    __decorate([
        property(cc.Node)
    ], AnswerUI.prototype, "fail", void 0);
    __decorate([
        property(cc.Animation)
    ], AnswerUI.prototype, "winAni", void 0);
    AnswerUI = __decorate([
        ccclass
    ], AnswerUI);
    return AnswerUI;
}(BaseUI_1.default));
exports.default = AnswerUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVUkvQW5zd2VyVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBd0NDO1FBdENDLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFFcEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixZQUFNLEdBQWlCLElBQUksQ0FBQzs7SUFrQzlCLENBQUM7SUFoQ0MseUJBQU0sR0FBTjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxJQUFXO1FBQWhCLGlCQWtCQztRQWpCQyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUU5QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNQO0lBQ0gsQ0FBQztJQUVELCtCQUFZLEdBQVosVUFBYSxTQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBckNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNLO0lBTlQsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXdDNUI7SUFBRCxlQUFDO0NBeENELEFBd0NDLENBeENxQyxnQkFBTSxHQXdDM0M7a0JBeENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBCYXNlVUkgZnJvbSBcIi4vQmFzZVVJXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbnN3ZXJVSSBleHRlbmRzIEJhc2VVSSB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB3aW46IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZmFpbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXG4gIHdpbkFuaTogY2MuQW5pbWF0aW9uID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy53aW5Bbmkub24oXCJmaW5pc2hlZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9vbk5leHRMZXZlbCh0cnVlKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIGluaXQoYXJnczogYW55W10pIHtcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBhcmdzWzBdO1xuICAgIGNvbnN0IGhhdmVXcm9uZyA9IGFyZ3NbMV07XG5cbiAgICB0aGlzLndpbi5hY3RpdmUgPSBpc0NvcnJlY3Q7XG4gICAgdGhpcy5mYWlsLmFjdGl2ZSA9ICFpc0NvcnJlY3Q7XG5cbiAgICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgICBpZiAoIWhhdmVXcm9uZykge1xuICAgICAgICB0aGlzLndpbkFuaS5wbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbk5leHRMZXZlbChmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9LCAxKTtcbiAgICB9XG4gIH1cblxuICBfb25OZXh0TGV2ZWwoaXNTaG93QW5pOiBib29sZWFuKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgY2MuZGlyZWN0b3IuZW1pdChcImdhbWVOZXh0TGV2ZWxcIiwgaXNTaG93QW5pKTtcbiAgICB9LCAwLjMpO1xuICB9XG59XG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Net/SendMsg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b9eaUomnZLQ6L1debgROfM', 'SendMsg');
// Script/Net/SendMsg.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMsg = void 0;
var NetManger_1 = require("./NetManger");
var URL_LIST = {
    SaveAssessStatistics: "http://192.168.16.11:8081/question/saveAssessStatistics",
};
var SendMsg = /** @class */ (function () {
    function SendMsg() {
    }
    // 请求评估统计
    SendMsg.reqSaveAssessStatistics = function (data, callback, errorCallback) {
        if (callback === void 0) { callback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        NetManger_1.NetManager.send(URL_LIST.SaveAssessStatistics, "POST", data, function (response) {
            callback && callback(data);
        }, function () {
            errorCallback && errorCallback();
        });
    };
    return SendMsg;
}());
exports.SendMsg = SendMsg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTmV0L1NlbmRNc2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HOzs7QUFFbkcseUNBQXlDO0FBRXpDLElBQU0sUUFBUSxHQUFHO0lBQ2Ysb0JBQW9CLEVBQUUseURBQXlEO0NBQ2hGLENBQUE7QUFFRDtJQUFBO0lBU0EsQ0FBQztJQVJDLFNBQVM7SUFDRiwrQkFBdUIsR0FBOUIsVUFBK0IsSUFBWSxFQUFFLFFBQWUsRUFBRSxhQUFvQjtRQUFyQyx5QkFBQSxFQUFBLGVBQWU7UUFBRSw4QkFBQSxFQUFBLG9CQUFvQjtRQUNoRixzQkFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFDLFFBQVE7WUFDcEUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUU7WUFDRCxhQUFhLElBQUksYUFBYSxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsY0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBOZXRNYW5hZ2VyIH0gZnJvbSBcIi4vTmV0TWFuZ2VyXCI7XG5cbmNvbnN0IFVSTF9MSVNUID0ge1xuICBTYXZlQXNzZXNzU3RhdGlzdGljczogXCJodHRwOi8vMTkyLjE2OC4xNi4xMTo4MDgxL3F1ZXN0aW9uL3NhdmVBc3Nlc3NTdGF0aXN0aWNzXCIsXG59XG5cbmV4cG9ydCBjbGFzcyBTZW5kTXNnIHtcbiAgLy8g6K+35rGC6K+E5Lyw57uf6K6hXG4gIHN0YXRpYyByZXFTYXZlQXNzZXNzU3RhdGlzdGljcyhkYXRhOiBzdHJpbmcsIGNhbGxiYWNrID0gbnVsbCwgZXJyb3JDYWxsYmFjayA9IG51bGwpIHtcbiAgICBOZXRNYW5hZ2VyLnNlbmQoVVJMX0xJU1QuU2F2ZUFzc2Vzc1N0YXRpc3RpY3MsIFwiUE9TVFwiLCBkYXRhLCAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0sICgpID0+IHtcbiAgICAgIGVycm9yQ2FsbGJhY2sgJiYgZXJyb3JDYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG59Il19
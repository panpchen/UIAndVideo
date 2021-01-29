"use strict";
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
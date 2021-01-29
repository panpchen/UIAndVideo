"use strict";
cc._RF.push(module, '4681fK5QQNFQo/P+kErr4b3', 'NetManger');
// Script/Net/NetManger.ts

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
exports.NetManager = void 0;
var NetManager = /** @class */ (function () {
    function NetManager() {
    }
    NetManager.send = function (url, method, data, successCallback, errorCallback) {
        if (data === void 0) { data = null; }
        if (successCallback === void 0) { successCallback = null; }
        if (errorCallback === void 0) { errorCallback = null; }
        cc.log("请求数据", url, method, data);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 3000;
        xhr.onreadystatechange = function () {
            cc.log("连接状态：", xhr.readyState, xhr.status, xhr.statusText);
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
                var response = JSON.parse(xhr.response);
                if (response["code"] == 500) {
                    errorCallback && errorCallback(response["msg"]);
                }
                else if (response["code"] == 200) {
                    successCallback && successCallback(response["data"]);
                }
            }
        };
        // xhr.responseType = "json";
        xhr.addEventListener("load", function (evt) {
            cc.log(evt);
        });
        xhr.addEventListener("error", function (evt) {
            cc.error(evt);
        });
        xhr.addEventListener("timeout", function (evt) {
            cc.error(evt);
        });
        // xhr.addEventListener("abort", (evt) => {
        //     cc.error(evt);
        // });
        // xhr.addEventListener("progress", (evt) => {
        //     cc.error(evt);
        // });
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        if (!data) {
            xhr.send();
        }
        else {
            xhr.send(data);
        }
    };
    return NetManager;
}());
exports.NetManager = NetManager;

cc._RF.pop();
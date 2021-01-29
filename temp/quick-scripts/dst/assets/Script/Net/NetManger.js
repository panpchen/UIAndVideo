
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Net/NetManger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTmV0L05ldE1hbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7OztBQUVuRztJQUFBO0lBK0NBLENBQUM7SUE5Q1EsZUFBSSxHQUFYLFVBQ0UsR0FBVyxFQUNYLE1BQWMsRUFDZCxJQUFXLEVBQ1gsZUFBc0IsRUFDdEIsYUFBb0I7UUFGcEIscUJBQUEsRUFBQSxXQUFXO1FBQ1gsZ0NBQUEsRUFBQSxzQkFBc0I7UUFDdEIsOEJBQUEsRUFBQSxvQkFBb0I7UUFFcEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3ZCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDaEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTtvQkFDM0IsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDakQ7cUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO29CQUNsQyxlQUFlLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUN0RDthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsNkJBQTZCO1FBQzdCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHO1lBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRztZQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsMkNBQTJDO1FBQzNDLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sOENBQThDO1FBQzlDLHFCQUFxQjtRQUNyQixNQUFNO1FBQ04sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNaO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQS9DWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmV4cG9ydCBjbGFzcyBOZXRNYW5hZ2VyIHtcbiAgc3RhdGljIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgZGF0YSA9IG51bGwsXG4gICAgc3VjY2Vzc0NhbGxiYWNrID0gbnVsbCxcbiAgICBlcnJvckNhbGxiYWNrID0gbnVsbFxuICApIHtcbiAgICBjYy5sb2coXCLor7fmsYLmlbDmja5cIiwgdXJsLCBtZXRob2QsIGRhdGEpO1xuICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIudGltZW91dCA9IDMwMDA7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmxvZyhcIui/nuaOpeeKtuaAge+8mlwiLCB4aHIucmVhZHlTdGF0ZSwgeGhyLnN0YXR1cywgeGhyLnN0YXR1c1RleHQpO1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlW1wiY29kZVwiXSA9PSA1MDApIHtcbiAgICAgICAgICBlcnJvckNhbGxiYWNrICYmIGVycm9yQ2FsbGJhY2socmVzcG9uc2VbXCJtc2dcIl0pO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlW1wiY29kZVwiXSA9PSAyMDApIHtcbiAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgJiYgc3VjY2Vzc0NhbGxiYWNrKHJlc3BvbnNlW1wiZGF0YVwiXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHhoci5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2dCkgPT4ge1xuICAgICAgY2MubG9nKGV2dCk7XG4gICAgfSk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZXZ0KSA9PiB7XG4gICAgICBjYy5lcnJvcihldnQpO1xuICAgIH0pO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoZXZ0KSA9PiB7XG4gICAgICBjYy5lcnJvcihldnQpO1xuICAgIH0pO1xuICAgIC8vIHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKGV2dCkgPT4ge1xuICAgIC8vICAgICBjYy5lcnJvcihldnQpO1xuICAgIC8vIH0pO1xuICAgIC8vIHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGV2dCkgPT4ge1xuICAgIC8vICAgICBjYy5lcnJvcihldnQpO1xuICAgIC8vIH0pO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgXCIqXCIpO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgfVxuICB9XG59XG4iXX0=
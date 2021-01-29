
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fb23HfAINOmLyoq290MApx', 'Utils');
// Script/Utils.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // 格式化秒转换00:00
    Utils.countDownFormat = function (sec) {
        var nowM = Math.floor(sec % 3600 / 60);
        var nowS = Math.floor(sec % 60);
        var nowMStr = nowM.toString();
        var nowSStr = nowS.toString();
        if (nowM < 10) {
            nowMStr = "0" + nowM;
        }
        if (nowS < 10) {
            nowSStr = "0" + nowS;
        }
        return nowMStr + ":" + nowSStr;
    };
    // 数组随机排序
    Utils.getRandomList = function (list) {
        list.sort(function (a, b) {
            return 0.5 - Math.random();
        });
        return list;
    };
    // 去重数组
    Utils.getUniqueArray = function (originArray) {
        var result = originArray.filter(function (v, i, arr) {
            return arr.indexOf(v, 0) === i;
        });
        return result;
    };
    // 获取范围内随机小数
    Utils.getRangeRandom = function (min, max) {
        return Math.random() * (max - min + 1) + min;
    };
    // 获取范围内随机整数
    Utils.getRangeRandomInteger = function (min, max) {
        var result = this.getRangeRandom(min, max);
        return Math.floor(result);
    };
    // 获取范围内随机不重复数组
    Utils.getRandomArrayNoRepeat = function (min, max, arrayLength) {
        var n = 0;
        if (min <= 0) {
            n = Math.abs(min) + 1;
        }
        var array = new Array(max + n)
            .fill(0)
            .map(function (v, i) { return i + min; })
            .sort(function () { return 0.5 - Math.random(); })
            .filter(function (v, i) { return v <= max + n && i < arrayLength; });
        return array;
    };
    // 世界坐标转本地坐标
    Utils.worldConvertLocalPointAR = function (node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
        return null;
    };
    // 本地坐标转世界坐标
    Utils.localConvertWorldPointAR = function (node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    };
    // 获取字符串中的数字
    Utils.getNumberFromStr = function (str) {
        return str.replace(/[^0-9]/ig, "");
    };
    // 两个数组是否相同 只对数字
    Utils.isEqualsArray = function (arr, arr2) {
        return JSON.stringify(arr.sort()) === JSON.stringify(arr2.sort());
    };
    // url参数 解析为一个对象
    Utils.getParmFromURL = function (url) {
        // 先将字符串通过 split 方法，以 "?" 为分割符将其分割成数组；
        // 该数组有两个元素，第一个为空字符串，第二个为 url 参数字符串
        var arr = url.split('?');
        if (arr.length < 2) {
            cc.log("url缺少参数");
            return;
        }
        // 将参数字符串以 "&" 符号为分隔符进行分割
        var params = arr[1].split('&');
        // 定义一个数组用于存储参数
        var obj = {};
        // 通过循环将参数以键值对的形式存储在变量 obj 中
        for (var i = 0; i < params.length; i++) {
            var arr_params = params[i].split('=');
            obj[arr_params[0]] = arr_params[1];
        }
        return obj;
    };
    Utils.stringFormat = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++) {
            var id = "{" + i + "}";
            str = str.replace(id, args[i]);
        }
        return str;
    };
    return Utils;
}());
exports.Utils = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUU7WUFDaEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQixPQUFPO1NBQ1Y7UUFDRCx5QkFBeUI7UUFDekIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QixlQUFlO1FBQ2YsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ1osNEJBQTRCO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNyQztRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUVNLGtCQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxJQUFJLEVBQUUsR0FBRyxNQUFJLENBQUMsTUFBRyxDQUFDO1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQS9HQSxBQStHQyxJQUFBO0FBL0dZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgLy8g5qC85byP5YyW56eS6L2s5o2iMDA6MDBcbiAgICBzdGF0aWMgY291bnREb3duRm9ybWF0KHNlYzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBub3dNID0gTWF0aC5mbG9vcihzZWMgJSAzNjAwIC8gNjApO1xuICAgICAgICBsZXQgbm93UyA9IE1hdGguZmxvb3Ioc2VjICUgNjApO1xuICAgICAgICBsZXQgbm93TVN0ciA9IG5vd00udG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IG5vd1NTdHIgPSBub3dTLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChub3dNIDwgMTApIHtcbiAgICAgICAgICAgIG5vd01TdHIgPSBgMCR7bm93TX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub3dTIDwgMTApIHtcbiAgICAgICAgICAgIG5vd1NTdHIgPSBgMCR7bm93U31gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub3dNU3RyICsgXCI6XCIgKyBub3dTU3RyO1xuICAgIH1cblxuICAgIC8vIOaVsOe7hOmaj+acuuaOkuW6j1xuICAgIHN0YXRpYyBnZXRSYW5kb21MaXN0KGxpc3QpIHtcbiAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIC8vIOWOu+mHjeaVsOe7hFxuICAgIHN0YXRpYyBnZXRVbmlxdWVBcnJheTxUPihvcmlnaW5BcnJheTogQXJyYXk8VD4pOiBBcnJheTxUPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbkFycmF5LmZpbHRlcigodiwgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLmluZGV4T2YodiwgMCkgPT09IGk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIOiOt+WPluiMg+WbtOWGhemaj+acuuWwj+aVsFxuICAgIHN0YXRpYyBnZXRSYW5nZVJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbjtcbiAgICB9XG5cbiAgICAvLyDojrflj5bojIPlm7TlhoXpmo/mnLrmlbTmlbBcbiAgICBzdGF0aWMgZ2V0UmFuZ2VSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZ2VSYW5kb20obWluLCBtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihyZXN1bHQpO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluiMg+WbtOWGhemaj+acuuS4jemHjeWkjeaVsOe7hFxuICAgIHN0YXRpYyBnZXRSYW5kb21BcnJheU5vUmVwZWF0KG1pbiwgbWF4LCBhcnJheUxlbmd0aCkge1xuICAgICAgICBsZXQgbiA9IDA7XG4gICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgbiA9IE1hdGguYWJzKG1pbikgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KG1heCArIG4pXG4gICAgICAgICAgICAuZmlsbCgwKVxuICAgICAgICAgICAgLm1hcCgodiwgaSkgPT4gaSArIG1pbilcbiAgICAgICAgICAgIC5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICAuZmlsdGVyKCh2LCBpKSA9PiB2IDw9IG1heCArIG4gJiYgaSA8IGFycmF5TGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cblxuICAgIC8vIOS4lueVjOWdkOagh+i9rOacrOWcsOWdkOagh1xuICAgIHN0YXRpYyB3b3JsZENvbnZlcnRMb2NhbFBvaW50QVIobm9kZSwgd29ybGRQb2ludCkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8g5pys5Zyw5Z2Q5qCH6L2s5LiW55WM5Z2Q5qCHXG4gICAgc3RhdGljIGxvY2FsQ29udmVydFdvcmxkUG9pbnRBUihub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluWtl+espuS4suS4reeahOaVsOWtl1xuICAgIHN0YXRpYyBnZXROdW1iZXJGcm9tU3RyKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1teMC05XS9pZywgXCJcIik7XG4gICAgfVxuXG4gICAgLy8g5Lik5Liq5pWw57uE5piv5ZCm55u45ZCMIOWPquWvueaVsOWtl1xuICAgIHN0YXRpYyBpc0VxdWFsc0FycmF5KGFycjogQXJyYXk8bnVtYmVyPiwgYXJyMjogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJyLnNvcnQoKSkgPT09IEpTT04uc3RyaW5naWZ5KGFycjIuc29ydCgpKTtcbiAgICB9XG5cbiAgICAvLyB1cmzlj4LmlbAg6Kej5p6Q5Li65LiA5Liq5a+56LGhXG4gICAgc3RhdGljIGdldFBhcm1Gcm9tVVJMKHVybDogc3RyaW5nKSB7XG4gICAgICAgIC8vIOWFiOWwhuWtl+espuS4sumAmui/hyBzcGxpdCDmlrnms5XvvIzku6UgXCI/XCIg5Li65YiG5Ymy56ym5bCG5YW25YiG5Ymy5oiQ5pWw57uE77ybXG4gICAgICAgIC8vIOivpeaVsOe7hOacieS4pOS4quWFg+e0oO+8jOesrOS4gOS4quS4uuepuuWtl+espuS4su+8jOesrOS6jOS4quS4uiB1cmwg5Y+C5pWw5a2X56ym5LiyXG4gICAgICAgIGxldCBhcnIgPSB1cmwuc3BsaXQoJz8nKVxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcInVybOe8uuWwkeWPguaVsFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDlsIblj4LmlbDlrZfnrKbkuLLku6UgXCImXCIg56ym5Y+35Li65YiG6ZqU56ym6L+b6KGM5YiG5YmyXG4gICAgICAgIGxldCBwYXJhbXMgPSBhcnJbMV0uc3BsaXQoJyYnKVxuICAgICAgICAvLyDlrprkuYnkuIDkuKrmlbDnu4TnlKjkuo7lrZjlgqjlj4LmlbBcbiAgICAgICAgbGV0IG9iaiA9IHt9XG4gICAgICAgIC8vIOmAmui/h+W+queOr+WwhuWPguaVsOS7pemUruWAvOWvueeahOW9ouW8j+WtmOWCqOWcqOWPmOmHjyBvYmog5LitXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJyX3BhcmFtcyA9IHBhcmFtc1tpXS5zcGxpdCgnPScpXG4gICAgICAgICAgICBvYmpbYXJyX3BhcmFtc1swXV0gPSBhcnJfcGFyYW1zWzFdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIHN0YXRpYyBzdHJpbmdGb3JtYXQoc3RyOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGlkID0gYHske2l9fWA7XG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShpZCwgYXJnc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG4iXX0=
"use strict";
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
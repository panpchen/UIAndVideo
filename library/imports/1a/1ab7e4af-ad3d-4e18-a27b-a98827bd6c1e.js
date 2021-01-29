"use strict";
cc._RF.push(module, '1ab7eSvrT1OGKJ7qYgnvWwe', 'Constants');
// Script/Config/Constants.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Utils_1 = require("../Utils");
// { playerId: topic}
var TopicConfigs = {
    "0": [{
            id: 0,
            title: "小明要到马路对面，小明该走哪条路线呢？",
            // options: ["A", "B"],
            answers: [0],
            bgId: 0,
            optionId: 0
        },
        {
            id: 1,
            title: "信号灯是哪种状态时，小明可以过斑马线？",
            // options: ["A", "B", "C"],
            answers: [0],
            bgId: 0,
            optionId: 1
        },
        {
            id: 2,
            title: "公园就在马路对面了，小明可以选择哪条路线过马路？",
            // options: ["A", "B"],
            answers: [1],
            bgId: 1,
            optionId: 2
        }],
    "1": [{
            id: 0,
            title: "马路边停车两辆车，小朋选择乘坐哪辆车去公园？",
            // options: ["A", "B"],
            answers: [1],
            bgId: 2,
            optionId: 3
        },
        {
            id: 1,
            title: "小朋应该选择坐在哪个位置？",
            // options: ["A", "B", "C"],
            answers: [1, 2],
            bgId: 3,
            optionId: 4
        },
        {
            id: 2,
            title: "在车内时，哪种行为小朋可以做的？",
            // options: ["A", "B", "C"],
            answers: [0],
            bgId: 3,
            optionId: 5
        },
        {
            id: 3,
            title: "到公园了，小朋可以从那边下车？",
            // options: ["A", "B"],
            answers: [1],
            bgId: 4,
            optionId: 6
        }]
};
var PlayersConfig = [
    {
        id: 0,
        name: "小明",
        info: "“我要步行到公园”",
        isArrive: false
    },
    {
        id: 1,
        name: "小朋",
        info: "“我要乘车到公园”",
        isArrive: false
    }
];
var allGameString;
(function (allGameString) {
    /**
     * `“{0}还没到，我等等他，他会选择什么方式到公园呢？”`
     */
    allGameString["str0"] = "\u201C{0}\u8FD8\u6CA1\u5230\uFF0C\u6211\u7B49\u7B49\u4ED6\uFF0C\u4ED6\u4F1A\u9009\u62E9\u4EC0\u4E48\u65B9\u5F0F\u5230\u516C\u56ED\u5462\uFF1F\u201D";
    /**
     * `揭晓{0}出行方式`,
     */
    allGameString["str1"] = "\u63ED\u6653{0}\u51FA\u884C\u65B9\u5F0F";
})(allGameString || (allGameString = {}));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.storeParmForAssessStatistics = function () {
        this.AssessStatisticsJson = JSON.stringify(Utils_1.Utils.getParmFromURL(window.location.href));
    };
    Constants.getConfigById = function (id) {
        return TopicConfigs[id];
    };
    Constants.getConfigLength = function (id) {
        return TopicConfigs[id].length;
    };
    Constants.getPlayerById = function (id) {
        return PlayersConfig[id];
    };
    Constants.allGameString = allGameString;
    return Constants;
}());
exports.Constants = Constants;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config/Constants.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnL0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7OztBQUVsRixrQ0FBaUM7QUFFakMscUJBQXFCO0FBQ3JCLElBQU0sWUFBWSxHQUFHO0lBQ2pCLEdBQUcsRUFBRSxDQUFDO1lBQ0YsRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUscUJBQXFCO1lBQzVCLHVCQUF1QjtZQUN2QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLHFCQUFxQjtZQUM1Qiw0QkFBNEI7WUFDNUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsQ0FBQztTQUNkO1FBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSwwQkFBMEI7WUFDakMsdUJBQXVCO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDZCxDQUFDO0lBQ0YsR0FBRyxFQUFFLENBQUM7WUFDRixFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSx3QkFBd0I7WUFDL0IsdUJBQXVCO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsZUFBZTtZQUN0Qiw0QkFBNEI7WUFDNUIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDZDtRQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLDRCQUE0QjtZQUM1QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7UUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLGlCQUFpQjtZQUN4Qix1QkFBdUI7WUFDdkIsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7Q0FDTCxDQUFBO0FBRUQsSUFBTSxhQUFhLEdBQUc7SUFDbEI7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUUsS0FBSztLQUNsQjtDQUNKLENBQUE7QUFFRCxJQUFLLGFBU0o7QUFURCxXQUFLLGFBQWE7SUFDZDs7T0FFRztJQUNILDZLQUFvQyxDQUFBO0lBQ3BDOztPQUVHO0lBQ0gsaUVBQWtCLENBQUE7QUFDdEIsQ0FBQyxFQVRJLGFBQWEsS0FBYixhQUFhLFFBU2pCO0FBRUQ7SUFBQTtJQXFCQSxDQUFDO0lBakJVLHNDQUE0QixHQUFuQztRQUNJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTSx1QkFBYSxHQUFwQixVQUFxQixFQUFFO1FBQ25CLE9BQU8sWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSx5QkFBZSxHQUF0QixVQUF1QixFQUFFO1FBQ3JCLE9BQU8sWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRU0sdUJBQWEsR0FBcEIsVUFBcUIsRUFBRTtRQUNuQixPQUFPLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sdUJBQWEsR0FBRyxhQUFhLENBQUM7SUFDekMsZ0JBQUM7Q0FyQkQsQUFxQkMsSUFBQTtBQXJCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9VdGlsc1wiO1xuXG4vLyB7IHBsYXllcklkOiB0b3BpY31cbmNvbnN0IFRvcGljQ29uZmlncyA9IHtcbiAgICBcIjBcIjogW3tcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIHRpdGxlOiBcIuWwj+aYjuimgeWIsOmprOi3r+Wvuemdou+8jOWwj+aYjuivpei1sOWTquadoei3r+e6v+WRou+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiXSxcbiAgICAgICAgYW5zd2VyczogWzBdLFxuICAgICAgICBiZ0lkOiAwLFxuICAgICAgICBvcHRpb25JZDogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwi5L+h5Y+354Gv5piv5ZOq56eN54q25oCB5pe277yM5bCP5piO5Y+v5Lul6L+H5paR6ams57q/77yfXCIsXG4gICAgICAgIC8vIG9wdGlvbnM6IFtcIkFcIiwgXCJCXCIsIFwiQ1wiXSxcbiAgICAgICAgYW5zd2VyczogWzBdLFxuICAgICAgICBiZ0lkOiAwLFxuICAgICAgICBvcHRpb25JZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwi5YWs5Zut5bCx5Zyo6ams6Lev5a+56Z2i5LqG77yM5bCP5piO5Y+v5Lul6YCJ5oup5ZOq5p2h6Lev57q/6L+H6ams6Lev77yfXCIsXG4gICAgICAgIC8vIG9wdGlvbnM6IFtcIkFcIiwgXCJCXCJdLFxuICAgICAgICBhbnN3ZXJzOiBbMV0sXG4gICAgICAgIGJnSWQ6IDEsXG4gICAgICAgIG9wdGlvbklkOiAyXG4gICAgfV0sXG4gICAgXCIxXCI6IFt7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0aXRsZTogXCLpqazot6/ovrnlgZzovabkuKTovobovabvvIzlsI/mnIvpgInmi6nkuZjlnZDlk6rovobovabljrvlhazlm63vvJ9cIixcbiAgICAgICAgLy8gb3B0aW9uczogW1wiQVwiLCBcIkJcIl0sXG4gICAgICAgIGFuc3dlcnM6IFsxXSxcbiAgICAgICAgYmdJZDogMixcbiAgICAgICAgb3B0aW9uSWQ6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiBcIuWwj+aci+W6lOivpemAieaLqeWdkOWcqOWTquS4quS9jee9ru+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiLCBcIkNcIl0sXG4gICAgICAgIGFuc3dlcnM6IFsxLCAyXSxcbiAgICAgICAgYmdJZDogMyxcbiAgICAgICAgb3B0aW9uSWQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIuWcqOi9puWGheaXtu+8jOWTquenjeihjOS4uuWwj+aci+WPr+S7peWBmueahO+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiLCBcIkNcIl0sXG4gICAgICAgIGFuc3dlcnM6IFswXSxcbiAgICAgICAgYmdJZDogMyxcbiAgICAgICAgb3B0aW9uSWQ6IDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIuWIsOWFrOWbreS6hu+8jOWwj+aci+WPr+S7peS7jumCo+i+ueS4i+i9pu+8n1wiLFxuICAgICAgICAvLyBvcHRpb25zOiBbXCJBXCIsIFwiQlwiXSxcbiAgICAgICAgYW5zd2VyczogWzFdLFxuICAgICAgICBiZ0lkOiA0LFxuICAgICAgICBvcHRpb25JZDogNlxuICAgIH1dXG59XG5cbmNvbnN0IFBsYXllcnNDb25maWcgPSBbXG4gICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCLlsI/mmI5cIixcbiAgICAgICAgaW5mbzogXCLigJzmiJHopoHmraXooYzliLDlhazlm63igJ1cIixcbiAgICAgICAgaXNBcnJpdmU6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIuWwj+aci1wiLFxuICAgICAgICBpbmZvOiBcIuKAnOaIkeimgeS5mOi9puWIsOWFrOWbreKAnVwiLFxuICAgICAgICBpc0Fycml2ZTogZmFsc2VcbiAgICB9XG5dXG5cbmVudW0gYWxsR2FtZVN0cmluZyB7XG4gICAgLyoqXG4gICAgICogYOKAnHswfei/mOayoeWIsO+8jOaIkeetieetieS7lu+8jOS7luS8mumAieaLqeS7gOS5iOaWueW8j+WIsOWFrOWbreWRou+8n+KAnWBcbiAgICAgKi9cbiAgICBzdHIwID0gYOKAnHswfei/mOayoeWIsO+8jOaIkeetieetieS7lu+8jOS7luS8mumAieaLqeS7gOS5iOaWueW8j+WIsOWFrOWbreWRou+8n+KAnWAsXG4gICAgLyoqXG4gICAgICogYOaPreaZk3swfeWHuuihjOaWueW8j2AsXG4gICAgICovXG4gICAgc3RyMSA9IGDmj63mmZN7MH3lh7rooYzmlrnlvI9gLFxufVxuXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICAvLyDor7fmsYLor4TkvLDnu5/orqHnu5nlkI7lj7DlnKjmuLjmiI/nu5PmnZ/ml7ZcbiAgICBzdGF0aWMgQXNzZXNzU3RhdGlzdGljc0pzb246IHN0cmluZztcblxuICAgIHN0YXRpYyBzdG9yZVBhcm1Gb3JBc3Nlc3NTdGF0aXN0aWNzKCkge1xuICAgICAgICB0aGlzLkFzc2Vzc1N0YXRpc3RpY3NKc29uID0gSlNPTi5zdHJpbmdpZnkoVXRpbHMuZ2V0UGFybUZyb21VUkwod2luZG93LmxvY2F0aW9uLmhyZWYpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gVG9waWNDb25maWdzW2lkXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnTGVuZ3RoKGlkKSB7XG4gICAgICAgIHJldHVybiBUb3BpY0NvbmZpZ3NbaWRdLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGxheWVyQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gUGxheWVyc0NvbmZpZ1tpZF07XG4gICAgfVxuXG4gICAgc3RhdGljIGFsbEdhbWVTdHJpbmcgPSBhbGxHYW1lU3RyaW5nO1xufVxuXG4iXX0=
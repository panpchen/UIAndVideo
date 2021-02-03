
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORY_DATA = void 0;
exports.STORY_DATA = {
    videoList: [5],
    titleList: ["A 放弃梦想,回家", "B 坚持梦想,寻求哥哥的帮助"],
    children: [
        {
            videoList: [1],
            titleList: ["A 继续努力练习,相信总会成功", "B 再去听听哥哥的意见吧"],
            children: [
                {
                    videoList: [3, 2],
                    titleList: ["A 去问问老师,看看有什么好方法", "B 只要努力,一定能行"],
                    children: [
                        {
                            videoList: [4, 3, 6],
                        },
                        {
                            videoList: [3, 4, 6],
                        },
                    ],
                },
                {
                    videoList: [2, 4, 3, 6],
                },
            ],
        },
        {
            videoList: [2],
            titleList: ["A 寻求老师的意见", "B 继续努力努力,相信总会成功"],
            children: [
                {
                    videoList: [4, 3, 6],
                },
                {
                    videoList: [3, 4, 6],
                },
            ],
        },
    ],
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnL0NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLFVBQVUsR0FBRztJQUN4QixTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZCxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7SUFDMUMsUUFBUSxFQUFFO1FBQ1I7WUFDRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUM7WUFDOUMsUUFBUSxFQUFFO2dCQUNSO29CQUNFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztvQkFDOUMsUUFBUSxFQUFFO3dCQUNSOzRCQUNFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNyQjt3QkFDRDs0QkFDRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDckI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7UUFDRDtZQUNFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNkLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztZQUMzQyxRQUFRLEVBQUU7Z0JBQ1I7b0JBQ0UsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3JCO2dCQUNEO29CQUNFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU1RPUllfREFUQSA9IHtcbiAgdmlkZW9MaXN0OiBbNV0sXG4gIHRpdGxlTGlzdDogW1wiQSDmlL7lvIPmoqbmg7Ms5Zue5a62XCIsIFwiQiDlnZrmjIHmoqbmg7Ms5a+75rGC5ZOl5ZOl55qE5biu5YqpXCJdLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHZpZGVvTGlzdDogWzFdLFxuICAgICAgdGl0bGVMaXN0OiBbXCJBIOe7p+e7reWKquWKm+e7g+S5oCznm7jkv6HmgLvkvJrmiJDlip9cIiwgXCJCIOWGjeWOu+WQrOWQrOWTpeWTpeeahOaEj+ingeWQp1wiXSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB2aWRlb0xpc3Q6IFszLCAyXSxcbiAgICAgICAgICB0aXRsZUxpc3Q6IFtcIkEg5Y676Zeu6Zeu6ICB5biILOeci+eci+acieS7gOS5iOWlveaWueazlVwiLCBcIkIg5Y+q6KaB5Yqq5YqbLOS4gOWumuiDveihjFwiXSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aWRlb0xpc3Q6IFs0LCAzLCA2XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZpZGVvTGlzdDogWzMsIDQsIDZdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmlkZW9MaXN0OiBbMiwgNCwgMywgNl0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdmlkZW9MaXN0OiBbMl0sXG4gICAgICB0aXRsZUxpc3Q6IFtcIkEg5a+75rGC6ICB5biI55qE5oSP6KeBXCIsIFwiQiDnu6fnu63liqrlipvliqrlipss55u45L+h5oC75Lya5oiQ5YqfXCJdLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHZpZGVvTGlzdDogWzQsIDMsIDZdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdmlkZW9MaXN0OiBbMywgNCwgNl0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Config/Constants');
require('./assets/Script/Game');
require('./assets/Script/Net/NetManger');
require('./assets/Script/Net/SendMsg');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cb9cjxgtZPVoE8AgToAg9n', 'Game');
// Script/Game.ts

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
var Constants_1 = require("./Config/Constants");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 开启透明通道
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.videoPlayer = null;
        _this.btns = [];
        _this._allVideos = [];
        _this._curVideoData = null;
        return _this;
    }
    Game.prototype.onLoad = function () {
        var _this = this;
        this.videoPlayer.node.on("completed", this._onCompleted, this);
        // this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
        // this.videoPlayer.mute = true;
        // if (cc.sys.isMobile) {
        //   cc.game.canvas.addEventListener(
        //     "touchstart",
        //     () => {
        //       // this.videoPlayer.mute = false;
        //       this._playVideo();
        //       cc.error("A");
        //     },
        //     false
        //   );
        // } else {
        //   cc.game.canvas.addEventListener(
        //     "mousedown",
        //     () => {
        //       // this.videoPlayer.mute = false;
        //       this._playVideo();
        //       cc.error("B");
        //     },
        //     false
        //   );
        // }
        this._curVideoData = Constants_1.STORY_DATA;
        this._hideOptionBtns();
        // 预加载videos所有视频
        cc.resources.preloadDir("Videos", cc.Asset);
        cc.resources.loadDir("Videos", cc.Asset, function (err, assets) {
            if (err) {
                cc.error(err);
            }
            else {
                cc.log(assets);
                assets.sort(function (a, b) {
                    return a.name - b.name;
                });
                _this._allVideos = assets;
                _this._playVideo();
            }
        });
    };
    Game.prototype._updateBtnsLabel = function () {
        var _this = this;
        if (this._curVideoData["titleList"]) {
            this.btns.forEach(function (btn, i) {
                btn
                    .getChildByName("label")
                    .getComponent(cc.Label).string = _this._curVideoData.titleList[i];
            });
        }
    };
    Game.prototype._showOptionBtns = function () {
        this.btns.forEach(function (btn) {
            cc.tween(btn)
                .to(0.2, { y: -300 })
                .call(function () {
                btn.getComponent(cc.Widget).updateAlignment();
            })
                .start();
        });
    };
    Game.prototype._hideOptionBtns = function () {
        this.btns.forEach(function (btn) {
            btn.y = -460;
            btn.getComponent(cc.Widget).updateAlignment();
        });
    };
    Game.prototype._onCompleted = function (event) {
        cc.error("completed: ", event.clip);
        this._curVideoData.videoList.splice(0, 1);
        if (this._curVideoData.videoList.length > 0) {
            this._playVideo();
        }
        else {
            if (!this._curVideoData.children) {
                cc.error("全部播完");
            }
            else {
                this._updateBtnsLabel();
                this._showOptionBtns();
            }
        }
    };
    // _onReadyToPlay(event: cc.VideoPlayer) {
    //   cc.error("ready: ", event.clip);
    //   this._playVideo();
    // }
    Game.prototype._playVideo = function () {
        this.videoPlayer.clip = this._allVideos[this._curVideoData.videoList[0] - 1];
        this.videoPlayer.play();
    };
    Game.prototype.onClickBtn = function (evt, parm) {
        this._hideOptionBtns();
        switch (parm) {
            case "left":
                this._curVideoData = this._curVideoData.children[0];
                this._playVideo();
                break;
            case "right":
                this._curVideoData = this._curVideoData.children[1];
                this._playVideo();
                break;
        }
    };
    __decorate([
        property(cc.VideoPlayer)
    ], Game.prototype, "videoPlayer", void 0);
    __decorate([
        property([cc.Node])
    ], Game.prototype, "btns", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRixnREFBZ0Q7QUFFMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsU0FBUztBQUNULEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO0FBRTFDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNEhDO1FBMUhDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxVQUFJLEdBQWMsRUFBRSxDQUFDO1FBRWIsZ0JBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsbUJBQWEsR0FBRyxJQUFJLENBQUM7O0lBcUgvQixDQUFDO0lBcEhDLHFCQUFNLEdBQU47UUFBQSxpQkE2Q0M7UUE1Q0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELHdFQUF3RTtRQUV4RSxnQ0FBZ0M7UUFDaEMseUJBQXlCO1FBQ3pCLHFDQUFxQztRQUNyQyxvQkFBb0I7UUFDcEIsY0FBYztRQUNkLDBDQUEwQztRQUMxQywyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLFNBQVM7UUFDVCxZQUFZO1FBQ1osT0FBTztRQUNQLFdBQVc7UUFDWCxxQ0FBcUM7UUFDckMsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCwwQ0FBMEM7UUFDMUMsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixTQUFTO1FBQ1QsWUFBWTtRQUNaLE9BQU87UUFDUCxJQUFJO1FBRUosSUFBSSxDQUFDLGFBQWEsR0FBRyxzQkFB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SUFFRCwwQ0FBMEM7SUFDMUMscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixJQUFJO0lBRUoseUJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDcEMsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxHQUFHLEVBQUUsSUFBSTtRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQXpIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNVO0lBRW5DO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NDQUNDO0lBSkYsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTRIeEI7SUFBRCxXQUFDO0NBNUhELEFBNEhDLENBNUhpQyxFQUFFLENBQUMsU0FBUyxHQTRIN0M7a0JBNUhvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCB7IFNUT1JZX0RBVEEgfSBmcm9tIFwiLi9Db25maWcvQ29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4vLyDlvIDlkK/pgI/mmI7pgJrpgZNcbmNjLm1hY3JvLkVOQUJMRV9UUkFOU1BBUkVOVF9DQU5WQVMgPSB0cnVlO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuVmlkZW9QbGF5ZXIpXG4gIHZpZGVvUGxheWVyOiBjYy5WaWRlb1BsYXllciA9IG51bGw7XG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gIGJ0bnM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2FsbFZpZGVvczogY2MuQXNzZXRbXSA9IFtdO1xuICBwcml2YXRlIF9jdXJWaWRlb0RhdGEgPSBudWxsO1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy52aWRlb1BsYXllci5ub2RlLm9uKFwiY29tcGxldGVkXCIsIHRoaXMuX29uQ29tcGxldGVkLCB0aGlzKTtcbiAgICAvLyB0aGlzLnZpZGVvUGxheWVyLm5vZGUub24oXCJyZWFkeS10by1wbGF5XCIsIHRoaXMuX29uUmVhZHlUb1BsYXksIHRoaXMpO1xuXG4gICAgLy8gdGhpcy52aWRlb1BsYXllci5tdXRlID0gdHJ1ZTtcbiAgICAvLyBpZiAoY2Muc3lzLmlzTW9iaWxlKSB7XG4gICAgLy8gICBjYy5nYW1lLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxuICAgIC8vICAgICBcInRvdWNoc3RhcnRcIixcbiAgICAvLyAgICAgKCkgPT4ge1xuICAgIC8vICAgICAgIC8vIHRoaXMudmlkZW9QbGF5ZXIubXV0ZSA9IGZhbHNlO1xuICAgIC8vICAgICAgIHRoaXMuX3BsYXlWaWRlbygpO1xuICAgIC8vICAgICAgIGNjLmVycm9yKFwiQVwiKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgZmFsc2VcbiAgICAvLyAgICk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNjLmdhbWUuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgLy8gICAgIFwibW91c2Vkb3duXCIsXG4gICAgLy8gICAgICgpID0+IHtcbiAgICAvLyAgICAgICAvLyB0aGlzLnZpZGVvUGxheWVyLm11dGUgPSBmYWxzZTtcbiAgICAvLyAgICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICAvLyAgICAgICBjYy5lcnJvcihcIkJcIik7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGZhbHNlXG4gICAgLy8gICApO1xuICAgIC8vIH1cblxuICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IFNUT1JZX0RBVEE7XG5cbiAgICB0aGlzLl9oaWRlT3B0aW9uQnRucygpO1xuXG4gICAgLy8g6aKE5Yqg6L29dmlkZW9z5omA5pyJ6KeG6aKRXG4gICAgY2MucmVzb3VyY2VzLnByZWxvYWREaXIoXCJWaWRlb3NcIiwgY2MuQXNzZXQpO1xuICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKFwiVmlkZW9zXCIsIGNjLkFzc2V0LCAoZXJyLCBhc3NldHMpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNjLmxvZyhhc3NldHMpO1xuICAgICAgICBhc3NldHMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gYS5uYW1lIC0gYi5uYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYWxsVmlkZW9zID0gYXNzZXRzO1xuICAgICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVCdG5zTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuX2N1clZpZGVvRGF0YVtcInRpdGxlTGlzdFwiXSkge1xuICAgICAgdGhpcy5idG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICBidG5cbiAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKVxuICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuX2N1clZpZGVvRGF0YS50aXRsZUxpc3RbaV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2hvd09wdGlvbkJ0bnMoKSB7XG4gICAgdGhpcy5idG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgY2MudHdlZW4oYnRuKVxuICAgICAgICAudG8oMC4yLCB7IHk6IC0zMDAgfSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBfaGlkZU9wdGlvbkJ0bnMoKSB7XG4gICAgdGhpcy5idG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLnkgPSAtNDYwO1xuICAgICAgYnRuLmdldENvbXBvbmVudChjYy5XaWRnZXQpLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uQ29tcGxldGVkKGV2ZW50OiBjYy5WaWRlb1BsYXllcikge1xuICAgIGNjLmVycm9yKFwiY29tcGxldGVkOiBcIiwgZXZlbnQuY2xpcCk7XG5cbiAgICB0aGlzLl9jdXJWaWRlb0RhdGEudmlkZW9MaXN0LnNwbGljZSgwLCAxKTtcbiAgICBpZiAodGhpcy5fY3VyVmlkZW9EYXRhLnZpZGVvTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9wbGF5VmlkZW8oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLl9jdXJWaWRlb0RhdGEuY2hpbGRyZW4pIHtcbiAgICAgICAgY2MuZXJyb3IoXCLlhajpg6jmkq3lroxcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl91cGRhdGVCdG5zTGFiZWwoKTtcbiAgICAgICAgdGhpcy5fc2hvd09wdGlvbkJ0bnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBfb25SZWFkeVRvUGxheShldmVudDogY2MuVmlkZW9QbGF5ZXIpIHtcbiAgLy8gICBjYy5lcnJvcihcInJlYWR5OiBcIiwgZXZlbnQuY2xpcCk7XG4gIC8vICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gIC8vIH1cblxuICBfcGxheVZpZGVvKCkge1xuICAgIHRoaXMudmlkZW9QbGF5ZXIuY2xpcCA9IHRoaXMuX2FsbFZpZGVvc1tcbiAgICAgIHRoaXMuX2N1clZpZGVvRGF0YS52aWRlb0xpc3RbMF0gLSAxXG4gICAgXTtcbiAgICB0aGlzLnZpZGVvUGxheWVyLnBsYXkoKTtcbiAgfVxuXG4gIG9uQ2xpY2tCdG4oZXZ0LCBwYXJtKSB7XG4gICAgdGhpcy5faGlkZU9wdGlvbkJ0bnMoKTtcbiAgICBzd2l0Y2ggKHBhcm0pIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IHRoaXMuX2N1clZpZGVvRGF0YS5jaGlsZHJlblswXTtcbiAgICAgICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHRoaXMuX2N1clZpZGVvRGF0YSA9IHRoaXMuX2N1clZpZGVvRGF0YS5jaGlsZHJlblsxXTtcbiAgICAgICAgdGhpcy5fcGxheVZpZGVvKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

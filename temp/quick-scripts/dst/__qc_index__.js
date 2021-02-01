
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
require('./assets/Script/Ani/UpDownAni');
require('./assets/Script/Config/Constants');
require('./assets/Script/Game');
require('./assets/Script/Loading');
require('./assets/Script/Net/NetManger');
require('./assets/Script/Net/SendMsg');
require('./assets/Script/NodePool');
require('./assets/Script/PoolMng');
require('./assets/Script/UI/BaseUI');
require('./assets/Script/UI/MenuUI');
require('./assets/Script/UI/PopBaseUI');
require('./assets/Script/UIManager');
require('./assets/Script/Utils');

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
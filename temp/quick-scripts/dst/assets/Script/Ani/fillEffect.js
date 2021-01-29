
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ani/fillEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1b7avi+YlNWIjvXSu8Nu1P', 'fillEffect');
// Script/Ani/fillEffect.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// 缓动填充效果
cc.Class({
  "extends": cc.Component,
  properties: {
    _callback: null
  },
  onLoad: function onLoad() {
    this.isLerp = false;
    this.timer = 0;
    this.lerpDuration = 0.2;
    this.ratio = 0;
    this.bar = this.node.getComponent(cc.Sprite);
  },
  updateProgress: function updateProgress(ratio, callback) {
    this._callback = callback;
    this.ratio = ratio;
    this.timer = 0;
    this.isLerp = true;
  },
  update: function update(dt) {
    if (!this.bar || !this.isLerp) {
      return;
    }

    this.timer += dt;

    if (this.timer >= this.lerpDuration) {
      this.timer = this.lerpDuration;
      this.isLerp = false;
    }

    this.bar.fillStart = cc.misc.lerp(this.bar.fillStart, this.ratio, this.timer / this.lerpDuration);
    this._callback && this._callback(this.bar.fillStart);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQW5pL2ZpbGxFZmZlY3QuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfY2FsbGJhY2siLCJvbkxvYWQiLCJpc0xlcnAiLCJ0aW1lciIsImxlcnBEdXJhdGlvbiIsInJhdGlvIiwiYmFyIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInVwZGF0ZVByb2dyZXNzIiwiY2FsbGJhY2siLCJ1cGRhdGUiLCJkdCIsImZpbGxTdGFydCIsIm1pc2MiLCJsZXJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFESCxHQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0k7QUFDTCxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixHQUFwQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlosRUFBRSxDQUFDYSxNQUExQixDQUFYO0FBQ0gsR0FiSTtBQWVMQyxFQUFBQSxjQWZLLDBCQWVVTCxLQWZWLEVBZWlCTSxRQWZqQixFQWUyQjtBQUM1QixTQUFLWCxTQUFMLEdBQWlCVyxRQUFqQjtBQUNBLFNBQUtOLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtGLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0QsTUFBTCxHQUFjLElBQWQ7QUFDSCxHQXBCSTtBQXNCTFUsRUFBQUEsTUF0Qkssa0JBc0JFQyxFQXRCRixFQXNCTTtBQUNQLFFBQUksQ0FBQyxLQUFLUCxHQUFOLElBQWEsQ0FBQyxLQUFLSixNQUF2QixFQUErQjtBQUMzQjtBQUNIOztBQUVELFNBQUtDLEtBQUwsSUFBY1UsRUFBZDs7QUFDQSxRQUFJLEtBQUtWLEtBQUwsSUFBYyxLQUFLQyxZQUF2QixFQUFxQztBQUNqQyxXQUFLRCxLQUFMLEdBQWEsS0FBS0MsWUFBbEI7QUFDQSxXQUFLRixNQUFMLEdBQWMsS0FBZDtBQUNIOztBQUVELFNBQUtJLEdBQUwsQ0FBU1EsU0FBVCxHQUFxQmxCLEVBQUUsQ0FBQ21CLElBQUgsQ0FBUUMsSUFBUixDQUFhLEtBQUtWLEdBQUwsQ0FBU1EsU0FBdEIsRUFBaUMsS0FBS1QsS0FBdEMsRUFBNkMsS0FBS0YsS0FBTCxHQUFhLEtBQUtDLFlBQS9ELENBQXJCO0FBQ0EsU0FBS0osU0FBTCxJQUFrQixLQUFLQSxTQUFMLENBQWUsS0FBS00sR0FBTCxDQUFTUSxTQUF4QixDQUFsQjtBQUNIO0FBbkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuLy8g57yT5Yqo5aGr5YWF5pWI5p6cXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfY2FsbGJhY2s6IG51bGxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmlzTGVycCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5sZXJwRHVyYXRpb24gPSAwLjI7XG4gICAgICAgIHRoaXMucmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlUHJvZ3Jlc3MocmF0aW8sIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbztcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuaXNMZXJwID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICghdGhpcy5iYXIgfHwgIXRoaXMuaXNMZXJwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgICAgICBpZiAodGhpcy50aW1lciA+PSB0aGlzLmxlcnBEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHRoaXMubGVycER1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5pc0xlcnAgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmFyLmZpbGxTdGFydCA9IGNjLm1pc2MubGVycCh0aGlzLmJhci5maWxsU3RhcnQsIHRoaXMucmF0aW8sIHRoaXMudGltZXIgLyB0aGlzLmxlcnBEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrICYmIHRoaXMuX2NhbGxiYWNrKHRoaXMuYmFyLmZpbGxTdGFydCk7XG4gICAgfVxufSk7Il19
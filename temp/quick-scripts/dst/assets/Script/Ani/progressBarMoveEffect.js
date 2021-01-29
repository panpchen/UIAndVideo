
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Ani/progressBarMoveEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2efd6MCtuVJu4LHauw+MTL4', 'progressBarMoveEffect');
// Script/Ani/progressBarMoveEffect.js

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
// 进度条效果
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
    this.bar = this.node.getComponent(cc.ProgressBar);
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

    this.bar.progress = cc.misc.lerp(this.bar.progress, this.ratio, this.timer / this.lerpDuration);
    this._callback && this._callback(this.bar.progress);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQW5pL3Byb2dyZXNzQmFyTW92ZUVmZmVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9jYWxsYmFjayIsIm9uTG9hZCIsImlzTGVycCIsInRpbWVyIiwibGVycER1cmF0aW9uIiwicmF0aW8iLCJiYXIiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiUHJvZ3Jlc3NCYXIiLCJ1cGRhdGVQcm9ncmVzcyIsImNhbGxiYWNrIiwidXBkYXRlIiwiZHQiLCJwcm9ncmVzcyIsIm1pc2MiLCJsZXJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBSUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUU7QUFESCxHQUpQO0FBUUxDLEVBQUFBLE1BUkssb0JBUUk7QUFDTCxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixHQUFwQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlosRUFBRSxDQUFDYSxXQUExQixDQUFYO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsY0FoQkssMEJBZ0JVTCxLQWhCVixFQWdCaUJNLFFBaEJqQixFQWdCMkI7QUFDNUIsU0FBS1gsU0FBTCxHQUFpQlcsUUFBakI7QUFDQSxTQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtELE1BQUwsR0FBYyxJQUFkO0FBQ0gsR0FyQkk7QUF1QkxVLEVBQUFBLE1BdkJLLGtCQXVCRUMsRUF2QkYsRUF1Qk07QUFDUCxRQUFJLENBQUMsS0FBS1AsR0FBTixJQUFhLENBQUMsS0FBS0osTUFBdkIsRUFBK0I7QUFDM0I7QUFDSDs7QUFFRCxTQUFLQyxLQUFMLElBQWNVLEVBQWQ7O0FBQ0EsUUFBSSxLQUFLVixLQUFMLElBQWMsS0FBS0MsWUFBdkIsRUFBcUM7QUFDakMsV0FBS0QsS0FBTCxHQUFhLEtBQUtDLFlBQWxCO0FBQ0EsV0FBS0YsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7QUFFRCxTQUFLSSxHQUFMLENBQVNRLFFBQVQsR0FBb0JsQixFQUFFLENBQUNtQixJQUFILENBQVFDLElBQVIsQ0FBYSxLQUFLVixHQUFMLENBQVNRLFFBQXRCLEVBQWdDLEtBQUtULEtBQXJDLEVBQTRDLEtBQUtGLEtBQUwsR0FBYSxLQUFLQyxZQUE5RCxDQUFwQjtBQUNBLFNBQUtKLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlLEtBQUtNLEdBQUwsQ0FBU1EsUUFBeEIsQ0FBbEI7QUFDSDtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbi8vIOi/m+W6puadoeaViOaenFxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfY2FsbGJhY2s6IG51bGxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmlzTGVycCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5sZXJwRHVyYXRpb24gPSAwLjI7XG4gICAgICAgIHRoaXMucmF0aW8gPSAwO1xuICAgICAgICB0aGlzLmJhciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVQcm9ncmVzcyhyYXRpbywgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5pc0xlcnAgPSB0cnVlO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJhciB8fCAhdGhpcy5pc0xlcnApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXIgKz0gZHQ7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID49IHRoaXMubGVycER1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gdGhpcy5sZXJwRHVyYXRpb247XG4gICAgICAgICAgICB0aGlzLmlzTGVycCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iYXIucHJvZ3Jlc3MgPSBjYy5taXNjLmxlcnAodGhpcy5iYXIucHJvZ3Jlc3MsIHRoaXMucmF0aW8sIHRoaXMudGltZXIgLyB0aGlzLmxlcnBEdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrICYmIHRoaXMuX2NhbGxiYWNrKHRoaXMuYmFyLnByb2dyZXNzKTtcbiAgICB9XG59KTsiXX0=
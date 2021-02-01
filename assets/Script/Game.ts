// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
// 开启透明通道
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
@ccclass
export default class Game extends cc.Component {
  @property(cc.VideoPlayer)
  videoPlayer: cc.VideoPlayer = null;
  onLoad() {
    this.videoPlayer.node.on("completed", this._onCompleted, this);
    this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
  }

  _onCompleted(event) {
    cc.error("completed: ", event.detail);
  }

  _onReadyToPlay(event) {
    cc.error("ready: ", event.detail);
    this.videoPlayer.play();
  }
}

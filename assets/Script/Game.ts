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
  @property([cc.Node])
  btns: cc.Node[] = [];

  private _allVideos: cc.Asset[] = [];
  onLoad() {
    this.videoPlayer.node.on("completed", this._onCompleted, this);
    this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);
    // 预加载videos所有视频
    cc.resources.preloadDir("Videos", cc.Asset);
    cc.resources.loadDir("Videos", cc.Asset, (err, assets) => {
      if (err) {
        cc.error(err);
      } else {
        cc.log(assets);
        this._allVideos = assets;
      }
    });
  }

  _onCompleted(event) {
    cc.error("completed: ", event);
  }

  _onReadyToPlay(event) {
    cc.error("ready: ", event);
    this._playVideo(5);
  }

  _playVideo(num) {
    this.videoPlayer.clip = this._allVideos[num - 1];
    this.videoPlayer.play();
  }

  onClickBtn(evt, parm) {
    switch (parm) {
      case "left":
        this._playVideo(1);
        break;
      case "right":
        this._playVideo(2);
        break;
    }
  }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { STORY_DATA } from "./Config/Constants";

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
  private _curVideoData = null;
  private _isReadyPlay: boolean = false;
  onLoad() {
    this.videoPlayer.node.on("completed", this._onCompleted, this);
    this.videoPlayer.node.on("ready-to-play", this._onReadyToPlay, this);

    this._curVideoData = STORY_DATA;

    this._hideOptionBtns();

    // 预加载videos所有视频
    cc.resources.preloadDir("Videos", cc.Asset);
    cc.resources.loadDir("Videos", cc.Asset, (err, assets) => {
      if (err) {
        cc.error(err);
      } else {
        cc.log(assets);
        assets.sort((a: any, b: any) => {
          return a.name - b.name;
        });
        this._allVideos = assets;
        this._setVideoClip();

        if (cc.sys.isBrowser) {
          cc.find("Canvas").on(
            "touchstart",
            () => {
              this._setVideoClip();
            },
            this
          );
        }
      }
    });
  }
  _updateBtnsLabel() {
    if (this._curVideoData["titleList"]) {
      this.btns.forEach((btn, i) => {
        btn
          .getChildByName("label")
          .getComponent(cc.Label).string = this._curVideoData.titleList[i];
      });
    }
  }

  _showOptionBtns() {
    this.btns.forEach((btn) => {
      cc.tween(btn)
        .to(0.2, { y: -300 })
        .call(() => {
          btn.getComponent(cc.Widget).updateAlignment();
        })
        .start();
    });
  }

  _hideOptionBtns() {
    this.btns.forEach((btn) => {
      btn.y = -460;
      btn.getComponent(cc.Widget).updateAlignment();
    });
  }

  _onCompleted(event: cc.VideoPlayer) {
    cc.error("completed: ", event.clip);

    this._curVideoData.videoList.splice(0, 1);
    if (this._curVideoData.videoList.length > 0) {
      this._setVideoClip();
    } else {
      if (!this._curVideoData.children) {
        cc.error("全部播完");
      } else {
        this._updateBtnsLabel();
        this._showOptionBtns();
      }
    }
  }

  _onReadyToPlay(event: cc.VideoPlayer) {
    cc.error("ready play video: ", event.clip);
    if (this._isReadyPlay) {
      this.videoPlayer.play();
    }
    this._isReadyPlay = false;
  }

  _setVideoClip() {
    this.videoPlayer.clip = this._allVideos[
      this._curVideoData.videoList[0] - 1
    ];
    this._isReadyPlay = true;
  }

  onClickBtn(evt, parm) {
    this._hideOptionBtns();
    switch (parm) {
      case "left":
        this._curVideoData = this._curVideoData.children[0];
        this._setVideoClip();
        break;
      case "right":
        this._curVideoData = this._curVideoData.children[1];
        this._setVideoClip();
        break;
    }
  }
}

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BaseUI from "./UI/BaseUI";

const { ccclass, property } = cc._decorator;
export const enum UIType {
  MenuUI = "MenuUI",
  SelectUI = "SelectUI",
  ResultUI = "ResultUI",
  AnswerUI = "AnswerUI",
}

@ccclass
export class UIManager extends cc.Component {

  public static instance: UIManager = null;
  private _allPanel = new Map<string, BaseUI>();

  @property(cc.Node)
  allUI: cc.Node[] = [];
  @property(cc.Node)
  fadeMask: cc.Node = null;

  onLoad() {
    UIManager.instance = this;
    this._init();
  }

  _init() {
    for (let i = 0; i < this.allUI.length; i++) {
      const ui = this.allUI[i].getComponent(BaseUI);
      this._allPanel.set(ui.node.name, ui);
      ui.node.active = false;
    }
    this.showUI(UIType.MenuUI);
  }

  showUI(type: UIType, cb?: Function, ...args: any[]) {
    if (this._allPanel.size == 0) {
      return;
    }
    const panel: BaseUI = this._allPanel.get(type);
    this.fadeMask.opacity = 0;

    if (type == UIType.MenuUI
      || type == UIType.AnswerUI) {
      panel.show(args);
      cb && cb(panel);
      return;
    }

    cc.tween(this.fadeMask)
      .to(0.45, { opacity: 255 }, { easing: "fade" })
      .call(() => {
        panel.show(args);
        cb && cb(panel);
      })
      .to(0.15, { opacity: 0 }, { easing: "fade" })
      .start();
  }

  hideUI(type: UIType) {
    if (this._allPanel.size == 0) {
      return;
    }
    this.fadeMask.opacity = 0;
    const panel = this._allPanel.get(type);
    panel.hide();
  }

  hideAll() {
    if (this._allPanel.size == 0) {
      return;
    }

    this.fadeMask.opacity = 0;
    this._allPanel.forEach((value, key) => {
      value.hide();
    });
  }
}

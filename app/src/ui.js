import document from 'document';
import {
  KEY_COLOR,
  KEY_DISPLAY_ELEMENT_FLAG,
  KEY_DISPLAY_ELEMENT,
  DISPLAY_ELEMENT_BATTERY,
  DISPLAY_ELEMENT_HEART,
} from '../../common/constants';
import HeartRate from './heartrate';
import Battery from './battery';
import Charger from './charger';
import FileStore from './fileStore';

export default class UI {
  static instance = new UI();

  constructor() {
    this.fileStore = FileStore.instance;
    this.colorConfigurableElements = document.getElementsByClassName('colored');
  }

  updateColor(color) {
    this.colorConfigurableElements.forEach((element) => {
      element.style.fill = color;
    });
  }

  restore() {
    const color = this.fileStore.getValue(KEY_COLOR);
    this.updateColor(color);
    const flag = this.fileStore.getValue(KEY_DISPLAY_ELEMENT_FLAG);
    this.setState(KEY_DISPLAY_ELEMENT_FLAG, flag);
  }

  setState(key, data) {
    if (key == KEY_DISPLAY_ELEMENT_FLAG) {
      if (data == false) {
        Battery.instance.hide();
        Charger.instance.hide();
        HeartRate.instance.stop();
      } else {
        this.setState(KEY_DISPLAY_ELEMENT, this.fileStore.getValue(KEY_DISPLAY_ELEMENT) || DISPLAY_ELEMENT_BATTERY);
      }
    } else {
      try {
        if (data && data.values && data.values[0] && data.values[0].value !== undefined) {
          data = data.values[0].value;
        }
      } catch (e) { }

      if (this.fileStore.getValue(KEY_DISPLAY_ELEMENT_FLAG) == true) {
        switch (data) {
          case DISPLAY_ELEMENT_HEART:
            Battery.instance.hide();
            HeartRate.instance.start();
            Charger.run();
            break;
          default:
            HeartRate.instance.stop();
            Battery.run();
            Charger.run();
            break;
        }
      }
    }
  }
}
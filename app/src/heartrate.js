import document from "document";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { BodyPresenceSensor } from "body-presence";
import { me as appbit } from "appbit";

export default class HeartRate {
  static instance = new HeartRate();

  constructor() {
    this.hrm = new HeartRateSensor({ frequency: 0.5, batch: 2 });
    this.txtHeartRate = document.getElementById('heartrate');
    this.imgHeartRate = document.getElementById('heartrate-icon');
    this.txtHeartRate.text = "--";

    this.hrm.onreading = () => {
      const hr = this.hrm.readings.heartRate[0];
      this.txtHeartRate.text = (hr !== undefined && hr !== null) ? hr : "--";
    };

    if (BodyPresenceSensor) {
      this.body = new BodyPresenceSensor();
      this.body.onreading = () => {
        if (this.body.present) {
          this.hrm.start();
        } else {
          this.hrm.stop();
          this.txtHeartRate.text = "--";
        }
      };
    }
  }

  show() {
    this.txtHeartRate.style.display = "inline";
    this.imgHeartRate.style.display = "inline";
  }

  hide() {
    this.txtHeartRate.style.display = "none";
    this.imgHeartRate.style.display = "none";
  }

  start() {
    if (HeartRateSensor && appbit.permissions.granted("access_heart_rate")) {
      this.show();
      display.onchange = () => {
        if (display.on) {
          if (this.body) this.body.start();
          if (!this.body || this.body.present) this.hrm.start();
        } else {
          if (this.body) this.body.stop();
          this.hrm.stop();
        }
      };
      if (this.body) this.body.start();
      if (!this.body || this.body.present) this.hrm.start();
    }
  }

  stop() {
    display.onchange = null;
    this.hrm.stop();
    if (this.body) this.body.stop();
    this.hide();
  }
}
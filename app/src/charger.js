import document from "document";
import { charger } from "power";
//import FileStore from "./fileStore";
export default class Charger {
  static instance = new Charger();

  constructor() {
    this.imgCharger = document.getElementById("charger-icon");
  }

  refresh() {
    this.imgCharger.style.display = charger.powerIsGood ? "inline" : "none";
  }
  hide() {
    this.imgCharger.style.display = "none";
  }
  static run() {
    let chargerHandler = Charger.instance;

    chargerHandler.refresh();

    charger.onchange = function () {
      chargerHandler.refresh();
    }
  }
}
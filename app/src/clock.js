import clock from "clock";
import { preferences } from "user-settings";
//import { zeroPad, format } from "../../common/utils";
import document from "document";
import { KEY_WEEKDAY_FORMAT, KEY_DATE_FORMAT } from '../../common/constants';

export default class Clock {
  static instance = new Clock();

  constructor() {
    this.txtHours = document.getElementById("hours");
    this.txtMinutes = document.getElementById("minutes");
    this.txtWeekday = document.getElementById("weekday");
    this.txtDate = document.getElementById("date");
  }

  init(fileStore) {
    clock.granularity = "minutes";
    // Update the clock / date every tick
    clock.ontick = (evt) => {
      this.refresh(evt.date, fileStore);
    }
  }

  refresh(today, fileStore) {
    let hours = today.getHours();
    hours = zeroPad((preferences.clockDisplay === "12h") ? hours % 12 || 12 : hours);
    let mins = zeroPad(today.getMinutes());

    // Print the clock
    this.txtHours.text = hours;
    this.txtMinutes.text = mins;

    //Print the date
    const dateFormat = fileStore.getValue(KEY_DATE_FORMAT);
    const weekdayFormat = fileStore.getValue(KEY_WEEKDAY_FORMAT);
    this.txtWeekday.text = format(today, weekdayFormat).toUpperCase();
    this.txtDate.text = format(today, dateFormat).toUpperCase();
  }

  static run(fileStore) {
    Clock.instance.init(fileStore);
  }

}

import { gettext } from "i18n";
const _repeat = (n) => {
  var str = "";
  for (var i = 0; i < n; i++) str += "0";
  return str;
};
const zeroPad = (n, zeros) => n < 10 ? _repeat(zeros || 1) + n : n.toString();
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  WEEKDAYS = ["su", "mo", "tu", "we", "th", "fr", "sa"],
  REGEX_FORMAT = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
  _getShortMonth = e => MONTHS[e.getMonth()], _getFullMonth = e => _getShortMonth(e) + "F",
  _getMinWeekday = e => WEEKDAYS[e.getDay()], _getShortWeekday = e => _getMinWeekday(e) + "S",
  _getFullWeekday = e => _getMinWeekday(e) + "F",
  _getMinHours = e => e.getHours() <= 12 ? e.getHours() : e.getHours() - 12,
  _getAMPM = e => e.getHours() <= 12 ? "AM" : "PM"; var _getTimezone = (date, withSeparator) => {
    var timezone = date.getTimezoneOffset();
    var sign = timezone < 0 ? "-" : "+";
    var separator = withSeparator ? ":" : "";
    var hours = Math.floor(Math.abs(timezone) / 60);
    var minutes = Math.abs(timezone) % 60;
    return `${sign}${zeroPad(hours)}${separator}${zeroPad(minutes)}`;
  };
const datefeather = (e, t) => {
  const g = {
    YY: e.getFullYear().toString().slice(-2), YYYY: e.getFullYear(), M: e.getMonth() + 1,
    MM: zeroPad(e.getMonth() + 1),
    MMM: gettext(_getShortMonth(e)),
    MMMM: gettext(_getFullMonth(e)),
    D: e.getDate().toString(),
    DD: zeroPad(e.getDate()), d: e.getDay().toString(),
    dd: gettext(_getMinWeekday(e)),
    ddd: gettext(_getShortWeekday(e)),
    dddd: gettext(_getFullWeekday(e)),
    H: e.getHours().toString(),
    HH: zeroPad(e.getHours()),
    h: _getMinHours(e),
    hh: zeroPad(_getMinHours(e)),
    A: _getAMPM(e),
    a: _getAMPM(e).toLowerCase(),
    m: e.getMinutes().toString(),
    mm: zeroPad(e.getMinutes()),
    s: e.getSeconds().toString(),
    ss: zeroPad(e.getSeconds()),
    SSS: zeroPad(e.getMilliseconds(), 2),
    Z: _getTimezone(e, !0),
    ZZ: _getTimezone(e)
  };
  return t.replace(REGEX_FORMAT, (e, o) => o || g[e] || t.replace(":", ""))
};
//export const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const format = (date, format) => datefeather(date, format);
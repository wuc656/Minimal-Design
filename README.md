# Minimal Design v2

[![Fitbit gallery](https://img.shields.io/badge/Fitbit%20gallery-%2300B0B9?style=flat-square&logo=fitbit&logoColor=white)](https://gallery.fitbit.com/details/c821aa5f-68c0-4ea5-ae33-bcbbe2cc3fd6)
![Release version](https://img.shields.io/github/v/release/wuc656/Minimal-Design?style=flat-square)

**Available only for Fitbit Sense 2,Versa3, Versa 4**

Minimal clock with support for:

- 24/12h formats
- Custom date formats
- All languages supported
- 3 different color configurations
- Battery percentage (optional)
- Heart rate (optional)
- 充電狀態顯示(開發中)

## Translated documentation

- [:cn: Traditional Chinese](./docs/zh-TW/README.md)

## Label mapping

- **Format 1 (red)**
- **Format 2 (yellow)**

![Label mapping](labels.png)

## List of all available date formats

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two-digit year                        |
| `YYYY` | 2018             | Four-digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name            |
| `MMMM` | January-December | The full month name                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month, 2-digits        |
| `d`    | 0-6              | The day of the week, with Sunday as 0 |
| `dd`   | Su-Sa            | The min name of the day of the week   |
| `ddd`  | Sun-Sat          | The short name of the day of the week |
| `dddd` | Sunday-Saturday  | The name of the day of the week       |
| `H`    | 0-23             | The hour                              |
| `HH`   | 00-23            | The hour, 2-digits                    |
| `h`    | 1-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock, 2-digits     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, 2-digits                  |
| `SSS`  | 000-999          | The millisecond, 3-digits             |
| `Z`    | +05:00           | The offset from UTC                   |
| `ZZ`   | +0500            | The offset from UTC, 2-digits         |
| `A`    | AM PM            |                                       |
| `a`    | am pm            |                                       |

## Other versions

- [laggelos](https://github.com/laggelos/Minimal-Design/tree/minimal_design_edited)
  - New colors
  - Show battery and heartrate at the same time

## Credits

Made with :heart: by [Nicolò Rebaioli](https://www.rebaioli.altervista.org)

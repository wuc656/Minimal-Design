# Minimal Design v2
[![Fitbit gallery](https://img.shields.io/badge/Fitbit%20gallery-%2300B0B9?style=flat-square&logo=fitbit&logoColor=white)](https://gallery.fitbit.com/details/c821aa5f-68c0-4ea5-ae33-bcbbe2cc3fd6)
![Release version](https://img.shields.io/github/v/release/wuc656/Minimal-Design?style=flat-square)

**適用於 Fitbit Sense 2、Versa 3、Versa 4**

極簡設計手錶錶面，支援以下功能：
- 24 / 12 小時制
- 自訂日期與星期格式
- 支援所有語言
- 3 種主題色彩配置
- 電量百分比顯示（可選）
- 即時心率顯示（可選）
- 充電狀態指示

## 標籤位置對照

- **格式 1 (紅色)**
- **格式 2 (黃色)**

![標籤映射](labels.png)

## 所有可用日期格式代碼列表
| 格式 | 輸出範例 | 說明 |
| ------ | ---------------- | ------------------------------------- |
| `YY` | 18 | 兩位數年份 |
| `YYYY` | 2018 | 四位數年份 |
| `M` | 1-12 | 月份（1-12） |
| `MM` | 01-12 | 月份（兩位數補零） |
| `MMM` | 1月-12月 / Jan-Dec | 簡稱月份名稱 |
| `MMMM` | 一月至十二月 / January-December | 完整月份名稱 |
| `D` | 1-31 | 日（1-31） |
| `DD` | 01-31 | 日（兩位數補零） |
| `d` | 0-6 | 星期幾（星期日為 0） |
| `dd` | 日-六 / Su-Sa | 星期極簡稱 |
| `ddd` | 週日-週六 / Sun-Sat | 星期簡稱 |
| `dddd` | 星期日-星期六 / Sunday-Saturday | 星期全稱 |
| `H` | 0-23 | 24 小時制小時 |
| `HH` | 00-23 | 24 小時制小時（兩位數補零） |
| `h` | 1-12 | 12 小時制小時 |
| `hh` | 01-12 | 12 小時制小時（兩位數補零） |
| `m` | 0-59 | 分鐘 |
| `mm` | 00-59 | 分鐘（兩位數補零） |
| `s` | 0-59 | 秒 |
| `ss` | 00-59 | 秒（兩位數補零） |
| `SSS` | 000-999 | 毫秒（三位數補零） |
| `Z` | +05:00 | 與 UTC 偏移量（含冒號） |
| `ZZ` | +0500 | 與 UTC 偏移量（不含冒號） |
| `A` | AM / PM | 上午或下午（大寫） |
| `a` | am / pm | 上午或下午（小寫） |

## 鳴謝
原版由 [Nicolò Rebaioli](https://www.rebaioli.altervista.org) 用 :heart: 製作。
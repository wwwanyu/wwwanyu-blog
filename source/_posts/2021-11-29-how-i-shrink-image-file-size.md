---
title: 已知用火之壓縮圖檔的這部分
date: 2021-11-29 08:12:06
category: note
tags: developent
---

原本我都是很認命的在 tinypng 首頁上傳下載來壓縮圖檔，直到最近才發現原來流程這麼輕易就可以簡化！
某天我在畫曬裝備團隊裡的[後端藝術家 —— Ruby](https://twitter.com/wwwanyuchang/status/1461121034644459520?s=20) 的髮型，畫一畫覺得好像另外一個人 ... 自己覺得很趣味因此截圖紀念。

<img src="screen-shot-smg-president-hair.png" alt="macOS Finder 檔案管理介面的截圖，主要顯示另外一張螢幕截圖：左手邊一半寬度是 Figma 軟體介面截圖，右手邊另一半寬度是台灣總統蔡英文女士的照片。" lazyload>

我慣用 macOS 內建的螢幕截圖功能，不知道以後會不會有優化檔案大小的功能，但現在似乎還是要自己處理，這張截圖大小高達 742 KB！

---

### 啊整天在那邊上傳下載上傳下載膩？

以前我的流程是前往 [tinypng](https://tinypng.com)，上傳圖檔，再下載壓縮好的圖檔。
742 KB 壓縮後變成精實的 160 KB！

<img src="tinypng.png" lazyload alt="TinyPng 的首頁截圖，顯示已經完成壓縮 screen-shot-smg-president-hair.png 圖檔的進度條，壓縮了 78% 的檔案大小。">

有時候同一張圖會重複好幾次，直到確定無法再壓縮。我覺得 tinypng 壓縮圖檔的品質非常好，但首頁上這個上傳下載的流程會消耗你珍貴的意志力。

直到最近我才注意到 tinypng 的 [Third-party](https://tinypng.com/third-party) 中有推薦 [TinyPng CLI](https://github.com/websperts/tinypng-cli) 跟 Figma plugin！

<img src="tinypng-thirdparty.png" lazyload alt="TinyPng 網站的 Third-party 選項中 Development 列表的畫面截圖，其中包含 npm CLI 跟 Figma plugin 的簡介與連結">

用 [TinyPng CLI](https://github.com/websperts/tinypng-cli) 的好處是不需要開網站，在電腦上的終端機輸入指令來壓縮圖檔，而且還可以指定圖檔長寬，這在瀏覽器是無法做到的！

我沒在用 Windows 跟 Linux，以下是我在 macOS 設定的步驟：

1.申請 tinypng 帳號取得 API key，免費方案一個月可以壓縮 500 次。

<img src="tinypng-api-dashboard.png" lazyload alt="TinyPng 網站的 API Dashbaord 畫面截圖，左手邊依序有使用者登入頭像、帳號設定功能、產品功能。中間是以長條圖來表示每個月的使用次數狀況，以及這個帳號的 API 號碼 與狀態。">

2.為了使用 npm ，要先裝 Node.js，身為美工的我推薦直接下載 [Node 安裝檔](https://nodejs.org/en/download/) 來完成安裝，尤其如果你不知道這是什麼的話。我真的覺得 Node.js 使用體驗很差餒，英文不好加上電腦也不好，錯誤訊息常常讀不懂，以及個人曾經發生過亂用指令導致電腦差點變磚塊的創傷，我個人強烈譴責非圖形介面。

3.安裝 [TinyPng CLI](https://github.com/websperts/tinypng-cli)，我個人覺得他的說明已經滿清楚就不贅述。但萬一你迷失了請不用害羞，歡迎在 [twitter](https://twitter.com/wwwanyuchang) 上 tag 我，或是 email: wwwanyuchang@gmail.com

用 TinyPng CLI 的指令來幫圖檔減肥就像這樣：

<img src="tinypng-terminal.png" lazyload alt="MacOS 的終端機畫面，顯示位於 wwwanyu 的 Desktop。顯示已輸入了 ls 指令列出 Desktop 上的檔案，以及顯示已輸入 tinypng 指令來壓縮圖檔，TinyPng 回傳 Panda just save you 568.6 KB for `smg-hair-looks-like-president.png`">

---

### 我整天不是在截圖就是在用 Figma

使用熱心網友投稿的 Figma plugin [TinyCanvas](https://www.figma.com/community/plugin/794829197801903069/TinyCanvas)，匯出圖檔時時也可以用 tinypng 的壓縮功能！在 Figma 按鍵盤快速鍵 Command + p 可以打字搜尋想用的功能，像這樣：

<img src="figma-tinycanvas.png" lazyload alt="Figma 軟體的 shorcut 功能，列出了 TinyCanvas 的選項，可選擇輸出為 JPG 或 PNG，以及 0.5 至 4倍的長寬。">

真的方便到哭出來！

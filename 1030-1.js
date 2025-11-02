// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  const hour = Math.floor(seconds / 3600); // 3600秒為一小時，用Math.floor取整數
  const min = Math.floor((seconds % 3600) / 60); // 先%3600排除小時，再除以60就能得到分鐘
  const sec = seconds % 60; // 取60的餘數，得到不足一分鐘的秒數

  // 設定時分秒都要滿足"00"兩位數的條件
  const addZero = function (num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  // 時分秒都套入addZero函式內，並回傳字串
  return `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

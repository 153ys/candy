// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  const result = String(num) // 把傳進去的數字轉成字串
    .split("") // 將每個字串拆成陣列
    .map((x) => x * x) // 對陣列內每個元素都做平方
    .join(""); // 把陣列重新組合成字串

  return result;
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

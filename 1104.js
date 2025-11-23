// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  const digits = String(num).split(""); // 把數字轉成陣列，逐位處理每一位數字
  const length = digits.length; // 知道總長度
  const result = []; // 裝展開式

  for (let i = 0; i < length; i++) {
    const digit = digits[i];
    const place = Math.pow(10, length - i - 1); // 每位數的次方數

    if (digit !== "0") {
      if (place === 1) {
        result.push(digit); // 個位數直接印出數字
      } else {
        result.push(`${place} X ${digit}`);
      }
    }
  }
  // 把所有展開式串起來
  return result.join(" + ");
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

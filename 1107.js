// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  // 建立邏輯乘數
  const formula = [1, 2, 1, 2, 1, 2, 4, 1];
  // 把統一編號轉為陣列
  const digits = vat.split("").map(Number);

  // 把乘積拆開成十位與個位，再相加後加進總和 Z
  let Z = 0;
  for (let i = 0; i < 8; i++) {
    const result = formula[i] * digits[i];
    Z += Math.floor(result / 10) + (result % 10);
  }

  // 判斷第7碼是否是"7"
  if (digits[6] !== 7) {
    return Z % 5 === 0;
  } else {
    // Z或 Z-1只要其中一個能被5整除即成立
    return Z % 5 === 0 || (Z - 1) % 5 === 0;
  }
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false

// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // 用charCodeAt來取得陣列內字母的數字編碼
  for (let i = 0; i <= chars.length - 1; i++) {
    const currentCode = chars[i].charCodeAt(0);
    const nextCode = chars[i + 1].charCodeAt(0);

    // 利用數字差來抓缺少的字母
    if (nextCode - currentCode > 1) {
      // 用fromCharCode把編碼轉回字母
      return String.fromCharCode(currentCode + 1);
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

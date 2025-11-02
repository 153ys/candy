// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  // 用filter篩選出奇數跟偶數
  const even = numbers.filter((num) => num % 2 == 0);
  const odd = numbers.filter((num) => num % 2 !== 0);
  // 比較兩個陣列長度，比較短的就是不合群的數字
  if (even.length > odd.length) {
    // 將陣列轉換為字串並且回傳，如果回傳的字串不只一個，用,隔開
    return odd.join(",");
  } else {
    return even.join(",");
  }
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  //用filter篩選出沒有0跟有0的陣列
  const nonZero = arr.filter((item) => item !== 0);
  const zero = arr.filter((item) => item == 0);
  //將兩個陣列合併，讓有0的陣列排在後面
  return [...nonZero, ...zero];
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

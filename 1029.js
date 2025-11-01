// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const nonZero = [];
  const zero = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item == 0) {
      zero.push(item);
    } else {
      nonZero.push(item);
    }
  }
  return [...nonZero, ...zero];
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

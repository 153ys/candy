// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
  //假設前面兩個是最小值
  let min1 = arr[0];
  let min2 = arr[1];

  //如果第二個比較小就往前移
  if (min2 < min1) {
    let temp = min2;
    min1 = min2;
    min2 = temp;
  }

  //比較第三個值
  for (let i = 2; i <= arr.length; i++) {
    let num = arr[i];
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }
  return min1 + min2;
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19

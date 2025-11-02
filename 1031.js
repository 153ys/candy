// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  // 用前三個值判斷哪個是多的
  let moreNum;

  if (numbers[0] == numbers[1]) {
    moreNum = numbers[0];
  } else {
    moreNum = numbers[2];
  }
  // 用filter找出不是多數的數字
  const different = numbers.filter((num) => num !== moreNum);

  // 回傳不合群的第一個
  return different[0];
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

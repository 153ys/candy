// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  let arr;
  // 如果sequence是字串就轉成陣列，如果是陣列就保持原樣
  if (typeof sequence == "string") {
    arr = sequence.split("");
  } else {
    arr = sequence;
  }

  const result = [];
  
  // 第1個元素保留、後面的元素跟前面的元素不同才保留
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

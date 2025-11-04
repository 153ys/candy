// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  // 將字串轉換成陣列
  const words = input.split(" ");
  // 用.map來計算每個單字的分數
  const scores = words.map((word) =>
    [...word].reduce((sum, ch) => sum + (ch.charCodeAt(0) - 96), 0)
  );

  // 抓出分數最高的單字，並將它轉換為字串
  const maxIndex = scores.indexOf(Math.max(...scores));
  return words[maxIndex];
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

module.exports = function max_char(str) {
  let charArr = str.split('');
  let charCountMap = {};

  for (let char of charArr) {
    charCountMap[char] = charCountMap[char] ? charCountMap[char] + 1 : 1;
  }

  let maxCount = 0;
  let maxChar = null;

  for (let char in charCountMap) {
    if (charCountMap[char] > maxCount) {
      maxChar = char;
      maxCount = charCountMap[char];
    }
  }

  return maxChar;
};

module.exports = function anagram(strA, strB) {
  let strAChars = strA.toLowerCase().split('');
  let strBChars = strB.toLowerCase().split('');

  let strAMap = {};
  let strBMap = {};

  for (let char of strAChars) {
    if (char.match(/[a-z]/)) {
      strAMap[char] = strAMap[char] ? strAMap[char] + 1 : 1;
    }
  }

  for (let char of strBChars) {
    if (char.match(/[a-z]/)) {
      strBMap[char] = strBMap[char] ? strBMap[char] + 1 : 1;
    }
  }

  if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
    return false;
  }

  for (let char in strAMap) {
    if (strAMap[char] !== strBMap[char]) {
      return false;
    }
  }

  return true;
};

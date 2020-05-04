function reverse(str) {
  return str.split('').reduce((string, currentChar) => {
    return currentChar + string;
  }, '')
}

module.exports = function palindrome(str) {
  const reversedString = reverse(str);
  return reversedString === str;
};

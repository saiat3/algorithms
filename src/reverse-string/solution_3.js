module.exports = function reverse(str) {
  return str.split('').reduce((string, currentChar) => {
    return currentChar + string;
  }, '')
};

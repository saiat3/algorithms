module.exports = function integerReversal(num) {
  const isNegative = num < 0;
  num = Math.abs(num);

  let reversedString = num
    .toString()
    .split('')
    .reverse()
    .join('');

  return isNegative ? parseInt(reversedString) * -1 : parseInt(reversedString);
};

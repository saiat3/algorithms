module.exports = function reverse(str) {
  if (str.length === 0) {
    return str;
  }

  const charArray = str.split('');
  let returnString = '';

  for (let i = charArray.length - 1; i >= 0; i--) {
    returnString += charArray[i];
  }

  return returnString;
};

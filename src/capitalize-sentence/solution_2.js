module.exports = function capitalize(str) {
  if (str.length === 0) {
    return str;
  }

  let strToReturn = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      strToReturn += str[i].toUpperCase();
    } else {
      strToReturn += str[i]
    }
  }

  return strToReturn;
};

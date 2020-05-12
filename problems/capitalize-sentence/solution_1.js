module.exports = function capitalize(str) {
  let wordToReturn = [];

  for (let word of str.split(' ')) {
    wordToReturn.push(word[0].toUpperCase() + word.slice(1));
  }

  return wordToReturn.join(' ');
};

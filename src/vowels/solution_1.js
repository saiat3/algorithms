module.exports = function vowels(str) {
  if (str.length === 0) {
    return 0;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      vowelCount++;
    }
  }

  return vowelCount;
};

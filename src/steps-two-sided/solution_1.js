module.exports = function steps_two_sided(n) {
  const colCount = n * 2 - 1;
  const mid = Math.floor(colCount / 2);

  for (let row = 0; row < n; row++) {
    let currentStep = '';
    for (let column = 0; column < colCount; column++) {
      if (mid - row <= column && mid + row >= column) {
        currentStep += '#';
      } else {
        currentStep += ' ';
      }
    }
    console.log(currentStep);
  }
};

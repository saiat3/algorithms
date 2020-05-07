module.exports = function steps(n) {
  for (let row = 0; row < n; row++) {
    let currentStair = '';
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        currentStair += '#';
      } else {
        currentStair += ' ';
      }
    }
    console.log(currentStair);
  }
};

module.exports = function steps(n) {
  if (n <= 0) {
    return false;
  }

  for (let i = 1; i <= n; i++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
};

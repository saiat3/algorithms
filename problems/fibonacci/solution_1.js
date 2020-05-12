module.exports = function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  let results = [0, 1];

  for (let i = 2; i < n; i++) {
    results.push(results[i - 1] + results[i - 2])
  }

  return results;
};

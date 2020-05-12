/**
 * Problem:
 * Given an array and chunk size, divide the array into many sub-arrays
 * where each sub-array is of length size
 *
 * array_chunk([1,2,3,4], 2) === [[1,2],[3,4]]
 * array_chunk([1,2,3,4,5], 2) === [[1,2],[3,4],[5]]
 * array_chunk([1,2,3,4,5], 10) === [[1,2,3,4,5]]
 *
 */

const solution_1 = require('./solution_1');
const solution_2 = require('./solution_2');

console.log(solution_1([], 2));
console.log(solution_1([1, 2, 3, 4], 2));
console.log(solution_1([1, 2, 3, 4, 5], 2));
console.log(solution_1([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(solution_1([1, 2, 3, 4, 5], 10));

console.log(solution_2([], 2));
console.log(solution_2([1, 2, 3, 4], 2));
console.log(solution_2([1, 2, 3, 4, 5], 2));
console.log(solution_2([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(solution_2([1, 2, 3, 4, 5], 10));

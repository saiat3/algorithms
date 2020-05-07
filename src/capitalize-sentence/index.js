/**
 * Problem:
 * Given a valid sentence, capitalize each word in it.
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy man') === 'A Lazy Man'
 * capitalize('hey, look I am mario') === 'Hey, Look I Am Mario'
 *
 */

const solution_1 = require('./solution_1');
const solution_2 = require('./solution_2');

console.log(solution_1('a short sentence'));
console.log(solution_1('a lazy man'));
console.log(solution_1('hey, look I am mario'));

console.log(solution_2('a short sentence'));
console.log(solution_2('a lazy man'));
console.log(solution_2('hey, look I am mario'));

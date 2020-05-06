/**
 * Problem:
 * Check to see if two provided string are anagrams of each other
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces or punctuation.
 * Consider capital letters to be the same as lower case letters
 *
 * anagram('rail, safety', 'fairy tales') === True
 * anagram('RAIL! SAFETY!', 'fairy tales ?!') === True
 * anagram('rail safety', 'Hello there') === FALSE
 *
 */

const solution_1 = require('./solution_1');

console.log(solution_1('rail, safety', 'fairy tales'));
console.log(solution_1('RAIL! SAFETY!', 'fairy tales ?!'));
console.log(solution_1('rail safety', 'Hello there'));

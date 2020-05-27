/**
 * Problem:
 * Given LinkedList object instance, calculate midpoint node
 * If linked list size is even, return last element from left side
 * *IMPORTANT* do not use size method and counter variable
 *
 * const myList = new LinkedList();
 *
 * myList.insertFirst('a');
 * myList.insertFirst('b');
 * myList.insertFirst('c');
 * myList.insertFirst('d');
 * myList.insertFirst('e');
 *
 * linkedListMidPoint(myList) === {data: 'c'}
 */

const {LinkedList} = require('./../../data-structures/linked-list/linked-list');
const solution_1 = require('./solution_1');

const myList = new LinkedList();

myList.insertFirst('a');
myList.insertFirst('b');
myList.insertFirst('c');
myList.insertFirst('d');
myList.insertFirst('e');

console.log(solution_1(myList));

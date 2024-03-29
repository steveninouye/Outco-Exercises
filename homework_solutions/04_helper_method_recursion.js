/*
 *  Homework 04 - Helper Method Recursion
 *
 *  Solve the following problems using helper method recursion.
 */

'use strict';


/*
 * 1a. What is the term when the recursive call invokes itself more than once.
 *
 * multiple recursion
 */


/*
 * 1b. List the steps involved to build a Helper Method Recursion algorithm.
 *
 *  1) instantiate variables
 *  2) return result
 *  3) instantiate the helper function and invoke it
 *  4) base case inside the helper function
 *  5) recursive cases
 */


/*
 * 1c. Should the recursive case or base case typically be tackled first?
 *
 * base case
 */


/*
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
function printArray(arr){
  function traverse(index){
    if (index === arr.length) { return; }
    console.log(arr[index]);
    traverse(index + 1);
  }
  traverse(0);
}


/*
 * 2b. Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */
function printReverse(arr) {
  function traverse(index) {
    if (index < 0) { return; }
    console.log(arr[index]);
    traverse(index - 1);
  }
  traverse(arr.length - 1);
}


/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
function reverseString(str){
  let result = '';
  function traverse(index) {
    if(index < 0) { return; }
    result += str[index];
    traverse(index - 1);
  }
  traverse(str.length - 1);
  return result;
}


/*
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
 function arrayPairs(arr) {
   let result = [];
   function traverse(index) {
     if (index >= arr.length) { return; }
     result.push([arr[index], arr[index + 1]]);
     traverse(index + 2);
   }
   traverse(0);
   return result;
 }


/*
 * 2e. Flatten a nested array
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 */
function flatten(arr){
  let result = [];

  function traverse(subarray) {
    for (let i = 0; i < subarray.length; i++) {
      if (Array.isArray(subarray[i])) {
        traverse(subarray[i]);
      } else {
        result.push(subarray[i]);
      }
    }
  }
  traverse(arr);
  return result;
}

/*
 * 2f. Given a base and an exponent, create a function to find the power
 *
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */
function power(base, exponent) {
  let result = 1;

  function multiply(counter) {
    if (counter === exponent) { return; }
    result *= base;
    multiply(counter + 1);
  }
  multiply(0);
  return result;
}


/*
 * 2g. Merge two sorted arrays
 *
 * Input:   arr1 {Array}
 * Input:   arr2 {Array}
 * Output:  Array
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 */
function merge(arr1, arr2){
  let result = [];
  const totalElements = arr1.length + arr2.length;

  function compare(i, j) {
    if (i + j >= totalElements) { return; }
    if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
    compare(i, j);
  }
  compare(0, 0);
  return result;
}





////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


let testCount;

console.log('printArray tests');
testCount = [0, 0];

assert(testCount, 'able to print the elements of [1, 2, 3] forwards', () => {
  let record = captureLog(printArray, [1, 2, 3]);
  return record.length === 3 && record[0] === 1 &&
         record[1] === 2 && record[2] === 3;
});

assert(testCount, 'does not print for an empty array', () => {
  let record = captureLog(printArray, []);
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', () => {
  let record = captureLog(printArray, [5]);
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('printReverse tests');
testCount = [0, 0];

assert(testCount, 'able to print the elements of [1, 2, 3] backwards', () => {
  let record = captureLog(printReverse, [1, 2, 3]);
  return record.length === 3 && record[0] === 3 &&
         record[1] === 2 && record[2] === 1;
});

assert(testCount, 'does not print for an empty array', () => {
  let record = captureLog(printReverse, []);
  return record.length === 0;
});

assert(testCount, 'able to print a single element array [5]', () => {
  let record = captureLog(printReverse, [5]);
  return record.length === 1 && record[0] === 5;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('reverseString tests');
testCount = [0, 0];

assert(testCount, 'able to reverse string \'hello\'', () => {
  let test = reverseString('hello');
  return test === 'olleh';
});

assert(testCount, 'able to return an empty string for empty string input', () => {
  let test = reverseString('');
  return test === '';
});

assert(testCount, 'able to return the same character for a single-character input string', () => {
  let test = reverseString('b');
  return test === 'b';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('arrayPairs tests');
testCount = [0, 0];

assert(testCount, 'should return [[1, 2],[3, 4],[5, 6]] output for [1, 2, 3, 4, 5, 6] input', () => {
  let test = arrayPairs([1, 2, 3, 4, 5, 6]);
  return test.length === 3 &&
    test[0][0] === 1 && test[0][1] === 2 &&
    test[1][0] === 3 && test[1][1] === 4 &&
    test[2][0] === 5 && test[2][1] === 6;
});

assert(testCount, 'should return [[1, 2],[3, 4],[5, undefined]] output for [1, 2, 3, 4, 5] input', () => {
  let test = arrayPairs([1, 2, 3, 4, 5]);
  return test.length === 3 &&
    test[0][0] === 1 && test[0][1] === 2 &&
    test[1][0] === 3 && test[1][1] === 4 &&
    test[2][0] === 5 && test[2][1] === undefined;
});

assert(testCount, 'should return [] output for [] input', () => {
  let test = arrayPairs([]);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('flatten tests');
testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 5, 6] output for [1, [2, 3, [4]], 5, [[6]]] input', () => {
  let test = flatten([1, [2, 3, [4]], 5, [[6]]]);
  return test.length === 6 &&
    test[0] === 1 && test[1] === 2 &&
    test[2] === 3 && test[3] === 4 &&
    test[4] === 5 && test[5] === 6;
});

assert(testCount, 'should return [] output for [] input', () => {
  let test = flatten([]);
  return test.length === 0;
});

assert(testCount, 'should return [1, 2, 3, 4, 5, 6] output for [1, [2, 3, [4], []], [], 5, [[], [6]]] input (note the empty arrays)', () => {
  let test = flatten([1, [2, 3, [4], []], [], 5, [[], [6]]]);
  return test.length === 6 &&
    test[0] === 1 && test[1] === 2 &&
    test[2] === 3 && test[3] === 4 &&
    test[4] === 5 && test[5] === 6;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('power tests');
testCount = [0, 0];

assert(testCount, 'should return 81 for 3 to the 4th power', () => {
  let test = power(3, 4);
  return test === 81;
});

assert(testCount, 'should return 1 for 5 to the 0th power', () => {
  let test = power(5, 0);
  return test === 1;
});

assert(testCount, 'should return 1 for 1 to the 100th power', () => {
  let test = power(1, 100);
  return test === 1;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('merge tests');
testCount = [0, 0];

assert(testCount, 'should return [1, 2, 3, 4, 6, 7, 9] when merging [1, 4, 7]' +
  ' and [2, 3, 6, 9]', () => {
  let test = merge([1, 4, 7], [2, 3, 6, 9]);
  return test.length === 7 && test[0] === 1 &&
    test[1] === 2 && test[2] === 3 &&
    test[3] === 4 && test[4] === 6 &&
    test[5] === 7 && test[6] === 9;
});

assert(testCount, 'should handle inputs when left argument is empty array', () => {
  let test = merge([], [2, 3, 6, 9]);
  return test.length === 4 &&
    test[0] === 2 && test[1] === 3 &&
    test[2] === 6 && test[3] === 9;
});

assert(testCount, 'should handle inputs when right argument is empty array', () => {
  let test = merge([1, 4, 7], []);
  return test.length === 3 && test[0] === 1 &&
    test[1] === 4 && test[2] === 7;
});

assert(testCount, 'should handle two empty arrays as inputs', () => {
  let test = merge([], []);
  return test.length === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
  let record = [];
  const log = console.log;
  console.log = (...args) => {
    record = record.concat(...args);
  };
  method(...params);
  console.log = log;
  return record;
}


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}

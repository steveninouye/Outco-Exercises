/**
 *  Homework 08 - Quasilinear Sorts
 *
 *  Problem 1: Mergesort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using mergesort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

// Worse Time Complexity:
// Worse Auxiliary Space Complexity:
// Average Time Complexity:
// Average Auxiliary Space Complexity:
function mergesort(input) {
  // YOUR CODE HERE
}



/*
 *
 *  Problem 2: Kth Smallest Element in a Range
 *
 *  Prompt:    Given an unsorted array of whole integers in the range
 *             1000 to 9000, find the Kth smallest element in linear time
 *             The array can have duplicates.
 *
 *  Input:     Unsorted array of whole integers in range of 1000 to 9000
 *             Kth smallest element you want to find
 *
 *  Output:    Kth smalest element in the range
 *
 *  Example:   array = [1984, 1337, 9000, 8304, 5150, 9000, 8304], k=5
 *             output = 8304
 *
 *  Notes:     What are the time and auxilliary space complexity?
 *
 */

// Time Complexity:
// Auxiliary Space Complexity:
function kthSmallest(arr, k){
  // YOUR WORK HERE
}



/**
 *  Problem 3: Bucket Sort
 *
 *  Prompt:    Given an unsorted array of numbers which are randomly distributed
 *             across the a range, sort the numbers using bucket sort.
 *
 *  Input:     {Array} - floats
 *  Input:     {Float} - minimum of range (inclusive)
 *  Input:     {Float} - maximum of range (exclusive)
 *
 *  Output:    {Array}
 *
 *  Example:   [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434], 0.0, 1.0 -->
 *             [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]
 *
 *  HINT:      Use either N buckets or square root of N buckets
 *             Recursively sort each bucket using bucketsort until the bucket
 *             size is less than 50.
 */

// Time Complexity:
// Auxiliary Space Complexity:
function bucketsort(arr, min, max) {
  // YOUR WORK HERE
}





////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


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


// check if an array is sorted in linear time
function isSorted(arr) {
  if (arr.length < 2){ return true; }
  for (let i = 1; i < arr.length; i++){
    if (arr[i-1] > arr[i]) { return false; }
  }
  return true;
}


// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}


console.log('Mergesort Tests');
let testCount = [0, 0];

assert(testCount, 'should sort example input', () => {
  let example = mergesort([3,9,1,4,7]);
  return arraysEqual(example, [1,3,4,7,9]);
});

assert(testCount, 'should return empty array for empty input', () => {
  let example = mergesort([]);
  return arraysEqual(example, []);
});

assert(testCount, 'should sort single-element input', () => {
  let example = mergesort([10]);
  return arraysEqual(example, [10]);
});

assert(testCount, 'should sort moderate-sized input', () => {
  let work = [];
  for (let i = 0; i < 1000; i++){
    work.push(Math.floor(Math.random() * 1000));
  }
  let example = mergesort(work);
  return example.length === 1000 && isSorted(example);
});

assert(testCount, 'should sort large input', () => {
  let work = [];
  for (let i = 0; i < 1000000; i++){
    work.push(Math.floor(Math.random() * 1000000));
  }
  let example = mergesort(work);
  return example.length === 1000000 && isSorted(example);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Kth Smallest Element Tests');
testCount = [0, 0];

assert(testCount, 'should return 8304 for sample input', function(){
  let example = kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 5);
  return example === 8304;
});

assert(testCount, 'should return 1337 for 1st smallest element with sample input array', function(){
  let example = kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 1);
  return example === 1337;
});

assert(testCount, 'should error out when asking for kth smallest when k exceeds size of input array', function(){
  let example = kthSmallest([1984, 1337, 9000, 8304, 5150, 9000, 8304], 10);
  return example === undefined;
});

assert(testCount, 'should work for single-element array', function(){
  let example = kthSmallest([8304], 1);
  return example === 8304;
});

assert(testCount, 'should work for a large array', function(){
  let testCase = [];
  for (let i = 0; i < 1000000; i++){
    testCase.push(Math.floor(Math.random() * 8000) + 1000);
  }
  let example = kthSmallest(testCase, 21875);
  testCase = testCase.sort(function(a, b){return a - b;});
  return example === testCase[21874];
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Bucketsort Tests');
testCount = [0, 0];

assert(testCount, 'should sort example input', function(){
  let example = bucketsort([0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434], 0, 1);
  return arraysEqual(example, [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]);
});

assert(testCount, 'should return empty array for empty input', function(){
  let example = bucketsort([], 0, 1);
  return arraysEqual(example, []);
});

assert(testCount, 'should sort single-element input', function(){
  let example = bucketsort([0.5], 0, 1);
  return arraysEqual(example, [0.5]);
});

assert(testCount, 'should sort moderate-sized input', function(){
  let test = [];
  for (let i = 0; i < 1000; i++){
    test.push(Math.random() * 1);
  }
  let example = bucketsort(test.slice(), 0, 1);
  return example.length === 1000 && arraysEqual(example, test.sort());
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

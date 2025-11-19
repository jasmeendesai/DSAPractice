/**
 * https://takeuforward.org/data-structure/count-frequency-of-each-element-in-the-array/
Problem statement: Given an array, we have found the number of occurrences of each element in the array.

Example 1:
Input: arr[] = {10,5,10,15,10,5};
Output: 10  3
	    5  2
        15  1
Explanation: 10 occurs 3 times in the array
	         5 occurs 2 times in the array
             15 occurs 1 time in the array

Example2: 
Input: arr[] = {2,2,3,4,4,2};
Output: 2  3
	    3  1
        4  2
Explanation: 2 occurs 3 times in the array
	         3 occurs 1 time in the array
             4 occurs 2 time in the array
 */

// M1 -- hasharray --> TC - O(n)

let arr2 = [10, 5, 10, 15, 10, 5];
// let arr = [2,2,3,4,4,2];

const countFreq = (arr) => {
  let maxVal = Math.max(...arr);
  let hashArray = new Array(maxVal + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hashArray[arr[i]]++;
  }

  let printed = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (!printed.has(arr[i])) {
      console.log(`${arr[i]} -> ${hashArray[arr[i]]}`);
      printed.add(arr[i]);
    }
  }
};

countFreq(arr2);

// M2 --> Using hashMap --> TC - O(log n)

const countFreq1 = (arr) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  console.log(map);
};

countFreq1(arr2);

// https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0

const n = 5;
const arr = [2, 3, 2, 3, 5];
const p = 5;
const frequencyCounter = (arr, N, P) => {
  let map = new Map();

  for (let i = 0; i < N; i++) {
    let num = arr[i];

    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let i = 1; i <= N; i++) {
    if (map.has(i)) {
      arr.splice(i - 1, 1, map.get(i));
    } else {
      arr.splice(i - 1, 1, 0);
    }
  }

  return arr;
};

console.log(frequencyCounter(arr, n, p));

// https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/

// const arr1 = [10,5,10,15,10,5]
const arr1 = [2, 2, 3, 4, 4, 2];

const highestLowestFreq = (arr) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = -Infinity;
  let min = Infinity;
  for (let [key, value] of map) {
    if (value > max) {
      max = key;
    } else if (value < max) {
      min = key;
    }
  }

  return [max, min];
};

console.log(highestLowestFreq(arr1));

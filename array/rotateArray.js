// https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/rotate-array-by-n-elements-1587115621

/**
 * Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

Note: Consider the array as circular.

Examples :

Input: arr[] = [1, 2, 3, 4, 5], d = 2
Output: [3, 4, 5, 1, 2]
Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
 */

// -------------------

// const arr = [1, 2, 3, 4, 5], d = 2
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// const arr = [7, 3, 9, 1], d = 9

// M1 --- TC - O(n)

const rotateArr = (arr, d) =>{

    d = d % arr.length; // to handle case d > arr.length
    let rotatedEl = arr.splice(0, d)
    arr.push(...rotatedEl)
    return arr
}

console.log(rotateArr(arr, d))


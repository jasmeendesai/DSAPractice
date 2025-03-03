/**
 * Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. The task is to find these two numbers.

Examples: 

Input: arr[] = {3, 1, 3}
Output: 3, 2
Explanation: In the array, 2 is missing and 3 occurs twice.


Input: arr[] = {4, 3, 6, 2, 1, 1}
Output: 1, 5
Explanation: 5 is missing and 1 is repeating.
 */

const arr = [4, 3, 6, 2, 1, 1]

// Using Visited Array – O(n) time and O(n) space
// The idea is to use a frequency array to keep track of how many times each number appears in the original array. Since we know the numbers should range from 1 to n with each appearing exactly once, any number appearing twice is our repeating number, and any number with zero frequency is our missing number.

const missingAndRepeatingEle = (arr) => {
    let n = arr.length

    let freqArr = new Array(n+1).fill(0)
    let repeatingEle = -1
    let missingEle = -1

    for(let i=0; i<arr.length; i++){
        freqArr[arr[i]]++
    }

    for(let i=1; i<=n; i++){
        if(freqArr[i]===2) repeatingEle = i
        else if(freqArr[i]===0) missingEle = i
    }

    return [repeatingEle, missingEle]

}

console.log(missingAndRepeatingEle(arr))

// ---------------------

// Using Array Marking – O(n) time and O(1) space
// The idea is to use array elements as indices and mark the visited elements by making them negative. 

/**
 * When we encounter an element whose corresponding index is already marked negative, we’ve found our repeating number. 
After this, any index that still has a positive value indicates that index+1 is our missing number since it was never marked.
Step by step approach:

Traverse the array and for each element get its absolute value.
Use this value-1 as an index and make the element at that index negative.
If we find that the element at that index is already negative, we’ve found our repeating number.
After the first traversal, iterate through the array again looking for any positive value
When we find a positive value at index i, i+1 is our missing number.
Return both the repeating and missing numbers
 */


const missingAndRepeatingEle1 = (arr) =>{
    let n = arr.length

    let repeating = -1

    for(let i=0; i<arr.length; i++){
        let val = Math.abs(arr[i])

        if(arr[val-1]>0){
            arr[val-1] = -arr[val-1]
        } else{
            repeating = val;
        }
    }

    let missing = -1

    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            missing = i+1;
        }
    }

    return [repeating, missing]
}

console.log(missingAndRepeatingEle1(arr))

// -----------------


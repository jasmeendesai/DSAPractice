/**
 * Given an integer array of N elements. You need to find the maximum sum of two elements such that sum is closest to zero. This problem is a variation of standard 2 Sum problems.

Note: In Case if we have two of more ways to form sum of two elements closest to zero return the maximum sum.
Example:

Input: arr[] = {-8, 5, 2, -6}
Output: -1
Explanation: The min absolute sum pair is (5, -6)


Input:  arr[] = {0, -8, -6, 3}
Output: 3
Explanation: We have a tie between (0, 3) and (-6, 3). We pick the max sum in this case which is 0+3
 */

// ------------------

// Naive – O(n^2) time and O(1) Space
// We use the brute-force method that checks the sum of every possible pair of elements in the array and keeps track of the pair with the minimum absolute sum.


// const arr = [-8, 5, 2, -6]
const arr = [0, -8, -6, 3]

const twoSum = (arr) => {
    let res = arr[0]+arr[1];
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            let sum = arr[i]+arr[j]
            if(Math.abs(sum) < Math.abs(res)){
                res = sum
            }
        }
    }

    return res
}

console.log(twoSum(arr))


// -------------------

// Using Sort and Binary Search – O(n Log n) time and O(1) Space
// Sort the array
// Traverse through every element arr[i] and do binary search in arr[i+1 … n-1] for an element x such that x + arr[i] has minimum absolute value.
// To do binary search if arr[i] + arr[mid] becomes 0, we return 0, else if arr[i] + arr[mid] becomes more than 0, we go the left side, else to the right side.
// We keep updating the result also during the process if we find a smaller absolute sun.

let twoSum1 = (arr)=>{
    
    arr.sort((x,y)=> x-y)

    let n = arr.length;

    let res = Infinity

    for(let i=0; i<n-1; i++){
        let x = arr[i]

        let left = i+1;
        let right = n-1;

        while(left <= right){
            let mid = Math.floor(left + ((right-left)/2))

            let curr = arr[mid] + x;

            if(curr === 0) return 0

            if(Math.abs(curr) < Math.abs(res)) {
                res = curr
            };

            if(curr < 0) left = mid+1
            else right = mid - 1
        }
    }

    return res
}

console.log(twoSum1(arr))



// -----------------------

// The Best Approach – Sorting and Two Pointer – O(n Log n) time and O(1) Space
// Sort the given array, try two pointer algorithm to find sum closest to zero, we adjust the pointer according to the current sum. We mainly increment left pointer when the current pair sum is negative and decrement the right pointer otherwise.

// Sort the given array.
// Initialize two pointers i and j at the beginning and end of the sorted array, respectively.
// Initialize variables sum equal to arr[i] + arr[j] and diff equal to absolute of sum.
// While i is less than j:
// Calculate the current sum as arr[i] + arr[j].
// If the current sum is equal to zero, return 0, as this is the closest possible sum.
// If the absolute value of the current sum is less than the absolute value of diff, update diff and sum with the current sum.
// If the absolute value of the current sum is equal to the absolute value of diff, update sum to be the maximum of the current sum and the previous sum.
// If arr[i] + arr[j] is less than 0 then increment i by 1 else decrement j by 1.
// After completing the iteration, return the final sum, which represents the maximum sum of two elements closest to zero.


const twoSum2 = (arr) => {
    arr.sort((x,y) => x-y)

    let i=0;
    let j = arr.length - 1
    let sum = arr[i] + arr[j]
    let diff = Math.abs(sum)

    while(i<j){

        let curr = arr[i] + arr[j]
        if(curr === 0) return 0

        if(Math.abs(curr) < Math.abs(diff)){
            diff = curr
            sum = curr
        } else if(Math.abs(curr) === Math.abs(diff)){
            sum = Math.max(sum, curr)
        }

        // If the current sum is greater than zero, we
        // search for a smaller sum
        // Else, we search for a larger sum
        if(curr > 0) j--
        else i++
    }

    return sum
}

console.log(twoSum2(arr))
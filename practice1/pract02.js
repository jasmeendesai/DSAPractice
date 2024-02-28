// ** 1**--------------

// https://leetcode.com/problems/concatenation-of-array/description/

/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).Specifically, ans is the concatenation of two nums arrays.Return the array ans.

Example 1:
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]] - ans = [1,2,1,1,2,1]

Example 2:
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]  - ans = [1,3,2,1,1,3,2,1]
 
Constraints:
n == nums.length
1 <= n <= 1000
1 <= nums[i] <= 1000
 */

// ---------------------- * Solution * ---------------------- //

// const nums = [1,2,1]
const nums = [1,3,2,1]

function concat(nums){
    return [...nums, ...nums]
}

console.log(concat(nums))

// -----------------------------------------------------------------------------------------------------------------

// ** 2**--------------

// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/

/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1. After doing so, return the array.

Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.

Constraints:
1 <= arr.length <= 104
1 <= arr[i] <= 105
 */

// ---------------------- * Solution * ---------------------- //

// const arr = [17,18,5,4,6,1]
const arr = [400]

function replaceRHL(arr){
    let max = -1;

    for(let i=arr.length-1; i>=0; i--){
        let curr = arr[i];
        arr[i] = max;
        max = Math.max(max, curr)
    }

    return arr
}

console.log(replaceRHL(arr))

// -----------------------------------------------------------------------------------------------------------------
/**
 * https://leetcode.com/problems/subarray-sum-equals-k/description/
 * 560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.


Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
 */


// const nums = [1,1,1]
// const k = 2
const nums = [1,2,3]
const k = 3


const subArrSum = (nums, k) => {
    let count = 0 // to count subarrays sum = k
    let prefixSum = 0
    let map = new Map() // (prefixSum, freq)

    map.set(0, 1) // 1 subarray with sum 0 = []

    for(let i=0; i<nums.length; i++){
        prefixSum +=nums[i]
        count += map.get(prefixSum - k) || 0

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
    }

    return count
}

console.log(subArrSum(nums, k))
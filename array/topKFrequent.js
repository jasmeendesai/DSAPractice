/**
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 * 
 * 347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 
 */

let nums = [1,1,1,2,2,3]
let k = 2
// let nums = [1]
// let k = 1

const topKFrequent = (nums, k) =>{
    let ans = []
    let obj = {}

    for(let i=0; i<nums.length; i++){
        let x = nums[i]

        obj[x] = (obj[x] || 0) + 1
    }

    let entries = Object.entries(obj)

    entries.sort((a, b) => b[1] - a[1])

    for(let i=0; i<k; i++){
        ans.push(+(entries[i][0]))
    }

    return ans

}

console.log(topKFrequent(nums, k))
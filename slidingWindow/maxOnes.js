/**
 * https://leetcode.com/problems/max-consecutive-ones-iii/description/
 * 
 * 1004. Max Consecutive Ones III
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
 */

const nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3


// -------
// Brute force ---> TC - O(n^2) | SC - O(1) 

// find the all possible subarrays then find longest subarray that has atmost k zeros

const maxOnes = (nums, k) =>{
    let maxlen = 0


    for(let i=0; i<nums.length; i++){
        let zeros = 0
        for(let j=i; j<nums.length; j++){

            if(nums[j] === 0) zeros++

            if(zeros <= k) {
                let len = j-i+1
                maxlen = Math.max(len, maxlen)
            } else break

        }
    }

    return maxlen
}

console.log(maxOnes(nums, k))


// ----

// Optimal solution = using sliding window with two pointers ---> TC --> O(2n)| SC - O(1)

const maxOnes1 = (nums, k) =>{
    let maxlen = 0
    let l =0; 
    let r =0;
    let zeros = 0;

    while(r<nums.length){
        if(nums[r] === 0) zeros++

        while(zeros>k){
            if(nums[l] ===0) zeros--
            l++
        }

        if(zeros <= k){
            let len = r-l+1
            maxlen = Math.max(len, maxlen)
        }
        r++
    }

    return maxlen
}

console.log(maxOnes1(nums, k))


// -----------

// Optimised solution --> TC - O(n) | SC - O(1)

const maxOnes2 = (nums, k) => {
    let maxlen = 0
    let l =0;
    let r =0;
    let zeros = 0;

    while(r<nums.length){
        
        if(nums[r] === 0) zeros++;

        if(zeros > k){
            if(nums[l] === 0) zeros--
            l++
        }

        if(zeros <= k){
            let len = r-l+1
            maxlen = Math.max(len, maxlen)
        }
        
        r++
    }

    return maxlen
}

console.log(maxOnes2(nums, k))
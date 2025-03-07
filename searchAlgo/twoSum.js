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

// Naive – O(n^2) time and O(1) Space
// We use the brute-force method that checks the sum of every possible pair of elements in the array and keeps track of the pair with the minimum absolute sum.


const arr = [-8, 5, 2, -6]

const twoSum = (arr) => {
    
}

console.log(twoSum(arr))
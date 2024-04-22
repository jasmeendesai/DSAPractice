// https://leetcode.com/problems/is-subsequence/description/

/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1: ------> Input: s = "abc", t = "ahbgdc" , Output: true
Example 2: ------> Input: s = "axc", t = "ahbgdc" , Output: false
 
Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 */

// M1 --> TC --> O(n) SC --> O(1)

// const s = "abc"
// const t = "ahbgdc"
const s = "axc";
const t = "ahbgdc" 

const isSubsequence = (s,t) => {
    if(!s.length || (s===t)) return true;
    if(s.length > t.length) return false;

    let j = 0; // counter to increment if match of letters in s found in t

    for (let i = 0; i < t.length && j < s.length; i++) {
        if (s[j] === t[i]) {
            j++;
        }
    }

    return j === s.length
}

console.log(isSubsequence(s,t))


// https://leetcode.com/problems/length-of-last-word/description/

/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.A word is a maximal substring consisting of non-space characters only.

Example 1: -----> Input: s = "Hello World" , Output: 5
Explanation: The last word is "World" with length 5.

Example 2: -----> Input: s = "   fly me   to   the moon  " , Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: -----> Input: s = "luffy is still joyboy" , Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
 */


// M1 

// const s1 = "Hello World" 
// const s1 = "   fly me   to   the moon  "
const s1 = "luffy is still joyboy"


const lenOfLastWord = (s) => {
    let len = 0 // to store the length of last word

    for(let i in s){
        if (s[i] !== ' ') {
            if (s[i-1] === ' ') {
                len = 1
            } else {
                len++;
            }
        }
    }
    return len
}

console.log(lenOfLastWord(s1))

// // another approach. starting out from the last so we don't have to go all the way to the end.

const lenOfLastWord1 = (s) => {

    let firstCharOccurence = false;
    let len = 0;

    for (let i = s.length - 1 ; i > -1; i--) {
        if(s[i] !== ' '){
            firstCharOccurence = true;
            len++
        }
        if(firstCharOccurence && s[i] === ' '){
            break;
        }
    }

    return len
}

console.log(lenOfLastWord(s1))


// https://leetcode.com/problems/two-sum/description/

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

Example 1: -----> Input: nums = [2,7,11,15], target = 9 , Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2: -----> Input: nums = [3,2,4], target = 6 , Output: [1,2]
Example 3: -----> Input: nums = [3,3], target = 6 , Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

// M1 --> TC - O(n^2) | SC - O(1)

// const nums = [2,7,11,15]
// const target = 9
const nums = [3,2,4]
const target = 6
// const nums = [3,3]
// const target = 6

const twoSum = (nums, target) => {
    for(let i=0; i<nums.length; i++){
        let compliment = target - nums[i];

        for (let j = i+1; j  < nums.length; j++) {
            let isTarget = nums[j] === compliment
            
            if(isTarget) return [i, j]
        }
    }

    return [-1, -1]
}

console.log(twoSum(nums, target))

// M2 --> TC - O(n) | SC - O(n)--> bcz of Map 

const twoSum1 = (nums, target) => {

    let map = new Map();

    for(let i=0; i<nums.length; i++){
        let compliment = target - nums[i]

        if(map.has(compliment)) return [i, map.get(compliment)]
    
        map.set(nums[i], i)
    }

    return [-1, -1]
}

console.log(twoSum1(nums, target))
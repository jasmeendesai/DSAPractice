// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=programming-skills
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

// ----------- Solution  -----------//

// const word1 = "abc"
// const word2 = "pqr"
// const word1 = "ab"
// const word2 = "pqrs"
const word1 = "abcd"
const word2 = "pq"

function mergeWords(word1, word2){
    let str = ""
    let len = Math.max(word1.length, word2.length)

    for(let i=0; i<len; i++){
        if(word1[i]) str+=word1[i];
        if(word2[i]) str+=word2[i];
    }
    return str
}

console.log(mergeWords(word1, word2))

// --------------------------------------------------------------------------------------------------------------------------------

// https://leetcode.com/problems/contains-duplicate/description/

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// ----------- Solution  -----------//

// const nums = [1,2,3,1]
const nums = [1,2,3,4]
// const nums = [1,1,1,3,3,4,3,2,4,2]

// sol1------

function duplicate(nums){
    let map = new Map()

    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        map.set(num, (map.get(num) || 0)+1)
    }
    for(let [key, val] of map){
        if(val>=2) return true
    }
    return false
}

console.log(duplicate(nums))

// sol2 ----

function duplicate2(nums){
    let s = new Set(nums)
    if(s.size !== nums.length) return true
    return false
}

console.log(duplicate2(nums))

// ------------------------------------------------------------------------------------------------------------------

// https://leetcode.com/problems/valid-anagram/description/

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

// ----------- Solution  -----------//

// const s = "anagram"
// const t = "nagaram"
const s = "rat"
const t = "car"

function anagram(s, t){
    let s1 = {}
    let t1 = {}

    if(s.length !== t.length) return false

    for(let i=0; i<s.length; i++){
        s1[s[i]] = (s1[s[i]] ||0)+1
    }

    for(let i=0; i<t.length; i++){
        t1[t[i]] = (t1[t[i]] ||0)+1
    }

    for(let key in s1){
        if(s1[key] !== t1[key]) return false
    }

    return true
}

console.log(anagram(s,t))
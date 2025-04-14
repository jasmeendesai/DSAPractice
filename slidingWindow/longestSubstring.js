/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * 
 * 3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */


const s = "abcabcbb"
// const s = "bbbbb"
// const s = "pwwkew"

// M1 - TC -> O(n^2) SC -> O(n)
const longestSubstring = (s) => {
    let hash = Array(255).fill(0)
    let maxlen = 0

    for(let i =0; i<s.length; i++){
        for(let j =i; j<s.length; j++){
            let charCode = s.charCodeAt(j)

            if(hash[charCode] === 1) break

            let len = j-i+1
            maxlen = Math.max(len, maxlen)
            hash[charCode] = 1
        }
    }
    return maxlen
}

console.log(longestSubstring(s))


const longestSubstring1 = (s) => {
    let hash = Array(256).fill(-1)
    let l = 0;
    let r = 0;
    let maxlen = 0;
    let n = s.length;

    while(r < n){
        let charCode = s.charCodeAt(r)

        if(hash[charCode] !== -1){ //char is in the hash
            if(hash[charCode] >= l){
                l = hash[charCode]+1
            }
        } 
        let len = r-l+1;
        maxlen = Math.max(len, maxlen)
        hash[charCode] = r
        r++
    }
    return maxlen
}

console.log(longestSubstring1(s))
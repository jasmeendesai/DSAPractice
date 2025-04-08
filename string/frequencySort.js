/**
 * https://leetcode.com/problems/sort-characters-by-frequency/
 * 
 * 451. Sort Characters By Frequency
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
 */

let s = "tree"
// let s = "cccaaa"
// let s = "Aabb"

const frequencySort = (s) => {
    let map = new Map()
    let str = ''

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }

    let keys = [...map.keys()].sort((a, b) => map.get(b) - map.get(a))


    for(let char of keys){
        str += char.repeat(map.get(char))

    }

    return str
}

console.log(frequencySort(s))
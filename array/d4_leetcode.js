// https://leetcode.com/problems/isomorphic-strings/

/**
 * Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1: ---> Input: s = "egg", t = "add", Output: true
Example 2: ---> Input: s = "foo", t = "bar", Output: false
Example 3: ---> Input: s = "paper", t = "title", Output: true
 
Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */

// const s = "egg"
// const t = "add"
// const s = "foo"
// const t = "bar"
const s = "paper"
const t = "title"

const isomorphic = (s, t) => {
    if (s.length !== t.length) return false

    const s1 = new Map()
    const t1 = new Map()

    for (let i = 0; i < s.length; i++) {
           let sCh = s[i]    
           let tCh = t[i]    

           if(!s1.has(sCh)) s1.set(sCh, tCh)
           if(!t1.has(tCh)) t1.set(tCh, sCh)

           if(s1.get(sCh) !== tCh || t1.get(tCh) !== sCh) return false
    }
    return true
}

console.log(isomorphic(s, t))

// https://leetcode.com/problems/can-place-flowers/description/

/**
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1: ----> Input: flowerbed = [1,0,0,0,1], n = 1 , Output: true
Example 2: ----> Input: flowerbed = [1,0,0,0,1], n = 2 , Output: false

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
 */

// const flowerbed = [1,0,0,0,1]
// const n = 1
const flowerbed = [1,0,0,0,1]
const n = 2

const canPlaceFlower = (fb, n) => {
    if (n === 0) return true

    for (let i = 0; i < fb.length; i++) {
        if (fb[i] === 0) {
            fb[i-1] !== 1 && fb[i+1] !== 1 && n-- && i++
        } else {
            i++
        }
        if (n === 0) return true  
    }
    return false
}

console.log(canPlaceFlower(flowerbed, n))

// https://leetcode.com/problems/majority-element/description/

/**
 * Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1: ----> Input: nums = [3,2,3] , Output: 3
Example 2: ----> Input: nums = [2,2,1,1,1,2,2] , Output: 2
 
Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 */


// const nums = [3,2,3]
const nums = [2,2,1,1,1,2,2]

// M1 

const majorityElement = (nums) => {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i]
        map.set(x, (map.get(x) || 0)+1)
    }

    for (const [key, val] of map) {
        if(val > (nums.length/2)) return key
    }
}

console.log(majorityElement(nums))

const majorityElement1 = (nums) =>{
    let res = nums[0]
    let count = 1

    for (let i = 1; i < nums.length-1; i++) {
        if (nums[i] === res) count++;
        else if (!--count) {
            res = nums[i+1];
            count = 0;
        }        
    }

    return res
}

console.log(majorityElement1(nums))
// https://leetcode.com/problems/contains-duplicate/description/

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1: -----> Input: nums = [1,2,3,1] , Output: true
Example 2: -----> Input: nums = [1,2,3,4] , Output: false
Example 3: -----> Input: nums = [1,1,1,3,3,4,3,2,4,2] , Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

// ---------------------------------------------------


// const nums = [1,2,3,1];
// const nums = [1,2,3,4];
const nums = [1,1,1,3,3,4,3,2,4,2];

// Method 1 --> using map / frequency counter method --> bcz "at least twice in the array"
// TC --> O(n)

const dup1 = (nums) =>{
    const map = new Map()

for( let i=0; i<nums.length; i++){
    let x = nums[i];
    map.set(x, (map.get(x) || 0)+1)
}

for(let [key, value] of map){
    if(value>=2) return true
}
    return false
}

console.log(dup1(nums))

// // Method 2 --> using object / frequency counter method --> bcz "at least twice in the array"
// TC --> O(n)

const dup2 = (nums) => {
    const obj = {}

    for(let i=0; i<nums.length; i++){
        const x = nums[i]
        obj[x] = (obj[x] || 0)+1
    }

    for( let key in obj){
        if(obj[key] > 1){
            return true
        }
    }
    return false
}

console.log(dup2(nums))


// // Method 2 --> using set bcz --> "if every element is distinct"
// TC --> O(1)

const dup3 = (nums) =>{
    const set = new Set(nums)

    if(set.size !== nums.length) return true
    return false
}

console.log(dup3(nums))

// ---------------------------------------------------------------------------------------------------------------------

// https://leetcode.com/problems/valid-anagram/description/

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1: -------> Input: s = "anagram", t = "nagaram" , Output: true
Example 2: -------> Input: s = "rat", t = "car" , Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

// Method 1 ---> frequency counter using map

const s = "anagram"
const t = "nagaram"
// const s = "rat"
// const t = "car"

const anagram = (s, t) => {
    const map1 = new Map();
    const map2 = new Map();

    if(s.length !== t.length) return false

    for( let i=0; i<s.length; i++){
        const x = s[i]
        map1.set(x, (map1.get(x) || 0)+1)
    }

    for( let i=0; i<t.length; i++){
        const x = t[i]
        map2.set(x, (map2.get(x) || 0)+1)
    }

    for(let [key, value] of map1){
        if(value !== (map2.get(key))) return false
    }

    return true
}

console.log(anagram(s, t))


// -----------------------------------------------------------------------------------

// https://leetcode.com/problems/concatenation-of-array/description/

/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays. Return the array ans.

Example 1: -------> Input: nums = [1,2,1] , Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2: -------> Input: nums = [1,3,2,1] , Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
 

Constraints:

n == nums.length
1 <= n <= 1000
1 <= nums[i] <= 1000
 */

// M1 -------> Spread operator

// const num = [1,2,1] 
const num = [1,3,2,1]

const concat = (num) => {
    const ans = [...num, ...num]
    return ans
}

console.log(concat(num))

// -----------

// M2 -------> use concat() method

const concat1 = (num) => {
    const ans = num.concat(num)
    return ans
}

console.log(concat1(num))

// -----------------------------------------------------------------------------------------------------------------------------

// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/

/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1. After doing so, return the array.

Example 1: -----> Input: arr = [17,18,5,4,6,1] , Output: [18,6,6,6,1,-1]
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
 * 
 */

// const arr = [17,18,5,4,6,1]
const arr = [400]

const replaceWithRGE = (arr) => {
   let max = arr[arr.length-1] ;
   arr[arr.length-1] = -1;

   for(let i=arr.length-2; i>=0; i--) {
    let curr = arr[i];
    arr[i] = max;
    if(curr > max) max = curr
   }
   return arr
}

console.log(replaceWithRGE(arr))
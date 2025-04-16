/**
 * https://leetcode.com/problems/fruit-into-baskets/description/
 * 
 * 904. Fruit Into Baskets

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.


Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
 

Constraints:

1 <= fruits.length <= 105
0 <= fruits[i] < fruits.length
 */


// const fruits = [1,2,1]
// const fruits = [0,1,2,2]
const fruits = [1,2,3,2,2]

// ---> maxlength of subarray with atmost 2 types of number

// M1

// Bruteforce --> TC - O(n^2) | SC - O(1)

// find all subarray find subarray with only two type of numbers that has maxlength

const fruitsInBasket = (fruits) =>{
    let maxlen = 0

    for(let i=0; i<fruits.length; i++){
        let set = new Set()

        for(let j=i; j<fruits.length; j++){
            set.add(fruits[j])

            if(set.size <= 2){
                maxlen = Math.max(maxlen, j-i+1)
            } else break
        }
    }

    return maxlen
}

console.log(fruitsInBasket(fruits))


// ------------

// M2 -- Using Sliding window with two pointers -- TC - O(2N) | SC - O(1)

const fruitsInBasket1 = (fruits) => {
    let maxlen = 0
    let l=0;
    let r=0;
    let map = new Map()

    while(r<fruits.length){
        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1)

        while(map.size > 2){
            map.set(fruits[l], map.get(fruits[l]) - 1)

            if(map.get(fruits[l]) === 0) {
                map.delete(fruits[l])
            }

            l++
        }

        if(map.size <= 2){
            maxlen = Math.max(maxlen, r-l+1)
        }

        r++
    }

    return maxlen
}

console.log(fruitsInBasket1(fruits))


// M3 -- Optimised --> TC - O(N) | SC - O(1)

const fruitsInBasket2 = (fruits) => {
    let maxlen = 0
    let l =0;
    let r =0;
    let map = new Map()

    while(r<fruits.length){
        map.set(fruits[r], (map.get(fruits[r]) || 0) + 1)

        if(map.size > 2){
            map.set(fruits[l], map.get(fruits[l]) - 1)

            if(map.get(fruits[l]) === 0){ 
                map.delete(fruits[l])
            }

            l++
        }

        if(map.size <= 2){
            maxlen = Math.max(maxlen, r-l+1)
        }
        
        r++
    }


    return maxlen
}

console.log(fruitsInBasket2(fruits))
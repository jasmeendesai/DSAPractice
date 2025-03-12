/**
 * Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
Examples: 

Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
Output: Pair Found: (2, 80)


Input: arr[] = {90, 70, 20, 80, 50}, n = 45
Output: No Such Pair
 */

// let arr = [5, 20, 3, 2, 50, 80], n = 78
// let arr = [90, 70, 20, 80, 50], n = 45
let arr = [1, 8, 30, 40, 100], n = 60

const findPair = (arr, n) => {
    for(let i=0; i<arr.length; i++){
        let sum = n+arr[i];

        for(let j=i+1; j<arr.length; j++){
            let isTarget = arr[j] === sum
            
            if(isTarget) return `Pair Found: (${arr[j]-n}, ${arr[j]})`
        }
    }
    return `No Such Pair`
}

console.log(findPair(arr, n))


// ------------------

// M2 --> TC - O(n) | SC - O(n)--> bcz of Map 

const findPair1 = (arr, n) => {
    let map = new Map()

    for(let i=0; i<arr.length; i++){
        let sum = n+arr[i]

        if(map.has(sum)) return `Pair Found: (${arr[j]-n}, ${arr[j]})`
        map.set(arr[i], i)
    }
}

console.log(arr, n)



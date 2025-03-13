// https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/move-all-zeroes-to-end-of-array0751

/**
 * You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

Examples:

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.
 */


// --------------------

// M1 - TC - O(n^2)

const arr = [1, 2, 0, 4, 3, 0, 5, 0]
// const arr = [10, 20, 30]
// const arr = [0, 0]

const moveZeros = (arr) => {
    arr.sort((x,y) => x-y)

    let count = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0) count++
    }
    
    for(let i=1; i<=count; i++){
        arr.shift(0)
        arr.push(0)
    }


    return arr
}

console.log(moveZeros(arr))

// -----------------

// M2 - TC - O(n) , SC - O(1)

const moveZeros1 = (arr) => {
    let index = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]!==0){
            [arr[i], arr[index]] = [arr[index], arr[i]]
            index++
        }
    }

    return arr
}

console.log(moveZeros1(arr))

// ----------------

const moveZeros2 = (arr) => {
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]===0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }

    return arr
}

console.log(moveZeros2(arr))
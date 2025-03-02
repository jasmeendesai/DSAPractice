/*
Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array.

Examples: 

Input: arr[] = [1, 2, 4, 6, 3, 7, 8] 
Output: 5
Explanation: Here the size of the array is 7, so the range will be [1, 8]. The missing number between 1 to 8 is 5


Input: arr[] = [1, 2, 3, 5]
Output: 4
Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4
*/

// --------------------------------------

// [Naive Approach] – O(n^2) Time and O(1) Space

// The idea is to use two nested loops, where the outer one iterate from 1 to n, and inner one iterate for each of the array arr[] elements, if the value in outer loop in not found in array arr[], return the value, else iterate to the next value.

const arr = [1, 2, 4, 6, 3, 7, 8] 

const missingEle = (arr) =>{
    let n = arr.length+1;

    // Iterate from 1 to n and check if the current number is present
    for(let i=1; i<=n; i++){
        let found = false
        for(let j=0; j<arr.length; j++){
            if(arr[j]===i){
                found = true;
                break;
            }
        }

        // If the current number is not present
        if(!found) return i
    }
    return -1
}

console.log(missingEle(arr))

// ----------------------------------

// [Better Approach] – Using Hashing – O(n) Time and O(n) Space

// The idea is to use an auxiliary array hash[] to store the frequency of each element in the given array arr[]. The number with frequency 0 is the missing number.

const missingEle1 = (arr) => {
    let n = arr.length+1;  //size of array n

    let hashArr = new Array(n+1).fill(0) // n+1 is because with missing number the size of arr is n+1

    // store the frequency of arr element
    for(let i=0; i<arr.length; i++){
        hashArr[arr[i]]++
    }

    for(let i=1; i<=n; i++){
        if(hashArr[i]===0){
            return i
        }
    }
    return -1
}

console.log(missingEle1(arr))

// [Expected Approach-1] – Using Sum of n terms Formula – O(n) Time and O(1) Space

// The sum of the first n natural numbers is given by the formula (n * (n + 1)) / 2. The idea is to compute this sum and subtract the sum of all elements in the array from it to get the missing number.


const missingEle2 =(arr)=> {
    let n = arr.length+1;

    let totalSum =0;

    for(let i=0; i<arr.length; i++){
        totalSum +=arr[i];
    }

    let expectedSum = n * ((n+1)/2)

    return expectedSum - totalSum
}

console.log(missingEle2(arr))

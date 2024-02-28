// Method 1

/*
 * function BubbleSort(array){
 for i -> 0 to arrayLength
     for j -> 0 to (arrayLength-i-1) ==> (last element is always greastest value & it is sorted after each iteration & comparison happen till last unsorted element ) 
               if arr[j] > arr [j+1]
                     swap (arr[j], arr[j+1])
    }
    ----> For all cases (if the array is sorted -> best case) the TC --> O(n^2)

 */

var arr = [234, 43, 55, 63, 5, 6, 235, 547];

function BubbleSort(arr) {
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<(arr.length-i-1); j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(BubbleSort(arr))

// ------------------------------------------------------------------------------------

//  * 2) Optimised solutn

/**
function BubbleSort(array){
 for i -> 0 to arrayLength
     isSwapped -> false
     for j -> 0 to (arrayLength-i-1){ 
               if arr[j] > arr [j+1]
                     swap (arr[j], arr[j+1])
                     isSwapped -> true
     }

     if(!isSwapped) --> break
}

-----> for worst case ( array is in reverse order) TC -- O(n^2)
-----> for bestt case ( array is sorted) TC -- O(n)
==> SC -- O(1)  for both solutions
 */

function BubbleSort1(arr){
    let isSwapped = false
    for(let i=0; i<arr.length; i++){
        isSwapped = false;
        for(let j=0; j<(arr.length-i-1); j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
                isSwapped = true
            }
        }

        if(!isSwapped) break;
    }
    return arr
}

console.log(BubbleSort1(arr))

// -------------------------------------------------------------------------------------------------------------------

// Inversion count of an array
// Given an array, find the total number of inversions of it. If (i < j) and (A[i] > A[j]), then pair (i, j) is called an inversion of an array A. We need to count all such pairs in the array.

// For example,

// Input:  A[] = [1, 9, 6, 4, 5] Output: The inversion count is 5 There are 5 inversions in the array: (9, 6), (9, 4), (9, 5), (6, 4), (6, 5)

const arr1 = [1, 9, 6, 4, 5]

function countInversion(arr1) {
    let count = 0;
    for (let i=0; i<arr1.length; i++){

        for (let j=0; j<(arr1.length-i-1); j++){
            if(arr1[j]>arr1[j+1]) {
                count++;

            }
        }
    }

    return count
}

console.log(countInversion(arr1))


// ---------------------------------------------------------------------------------------------------------------------------------

// The output should print all zeros, followed by all ones.

//  For example,

// Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

const arr2 = [1, 0, 1, 0, 1, 0, 0, 1 ]

const zerosAndOnes = (arr2) => {
    for (let i=0; i<(arr2.length); i++) {
        let isSwapped = false;

        for(let j=0; j<(arr2.length-i-1); j++){
            if(arr2[j]>arr2[j+1]) {
                let temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;

                isSwapped =true;
            }
        }

        if(!isSwapped) break;
    }
    return arr2;
}

console.log(zerosAndOnes(arr2))

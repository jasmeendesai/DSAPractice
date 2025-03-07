/**
 * Given a binary array arr[] of size N, which is sorted in non-increasing order, count the number of 1’s in it. 

Examples: 

Input: arr[] = {1, 1, 0, 0, 0, 0, 0}
Output: 2


Input: arr[] = {1, 1, 1, 1, 1, 1, 1}
Output: 7


Input: arr[] = {0, 0, 0, 0, 0, 0, 0}
Output: 0
 */

// Count 1’s in a sorted binary array using Binary search recursively: TC - O(logn) SC-O(logn)

// We can use Binary Search to find count in O(Logn) time. The idea is to look for the last occurrence of 1 using Binary Search. Once we find the index’s last occurrence, we return index + 1 as count.

// Follow the steps below to implement the above idea:

// Do while low <= high:
// Calculate mid using low + (high – low) / 2.
// Check if the element at mid index is the last 1
// If the element is not last 1, move the low to right side recursively and return the result received from it.
// Otherwise, move the low to left recursively and return the result received from it.


let arr = [ 1, 0, 0, 0, 0, 0, 0 ];
let n = arr.length;

const countOnes = (arr, low, high) =>{

    if(high>=low){
        let mid = low + ((high-low)/2)

        // if last occurance of 1 is at mid return index of mid + 1 as count of ones
        if((mid==high || arr[mid+1]==0) && arr[mid]==1) return mid+1

        // if last occursnce is not at mid check whether it is in right if yes then use recursion on right half of array else on left half of array
        if(arr[mid]==1){
           return countOnes(arr, mid+1, high)
        }
        return countOnes(arr, low, mid-1)
    }
    return 0
}


console.log("Count of 1's in given array is " + 
                 countOnes(arr, 0, n-1));

// ----------------------------------------

// Count 1’s in a sorted binary array using binary search iteratively: TC - O(logn) SC-O(1)

// Do while low <= high
// Calculate the middle index say mid
// Check if arr[mid] is less than 1 then move the high to left side (i.e, high = mid – 1)
// If the element is not last 1 then move the low to the right side (i.e, low = mid + 1)
// Check if the element at the middle index is last 1 then return mid + 1
// Otherwise move to low to right (i.e, low = mid + 1)


const countOnes1 = (arr) =>{
    let low = 0;
    let high = arr.length -1;

    while(low<=high){
        let mid = Math.floor(low + ((high-low)/2))
        if(arr[mid]!=1) high = mid -1;
        else{
            // if((mid==arr.length-1 || arr[mid+1]==0) && arr[mid]==1) return mid+1
            if(mid==arr.length-1 || arr[mid+1]==0) return mid+1
            else low = mid+1;
        }
    }
    return 0
}

console.log(countOnes1(arr))
// Follow Link ----> https://www.codingninjas.com/studio/guided-paths/data-structures-algorithms/content/118820/offering/1381863

// For Searching --- always target element is mentioned.

// Linear Search ---- simple search from left index(0) to right index(arr.length-1) ------- TC = O(n) ---- SC = O(1)

// Binary Search ---- Search in **SORTED ARRAY** by repeatedly dividing the array into two halves, and serching in one of the halves. ------- TC = O(logn) ------ SC = O(1)

// --------------------------------------------------------------------------------------------------------------------------------------

// -------**LINEAR SEARCH POBLEMS**-------


// -------------------------------
// 1)Search for an Element
// Given an array of integers and a target value, write a function to find the target value in the array using linear search. If found, return the index of the target value; otherwise, return -1.

let arr = [7,6,4,3,5,8,9,1,2];
// let target = 8;
let target = 2;

function searchEle(arr, target){
    // traverse over array
    for(let i=0; i<arr.length; i++){
        // if target found return index
        if(arr[i]===target) return i;
    }
    // if target not found return -1
    return -1;
}

console.log(searchEle(arr, target))

// -------------------------------
// 2)Count Occurrences
// Write a function that counts the number of occurrences of a specific element in an array using linear search.

let arr1=[1,2,1,4,5,1,6,7,2,1,2,4,3,1,2,2];
// let ele = 2;
let ele = 7;

function eleOccurence(arr, ele){
    // maintain a counter to count occurences
    let count = 0;
    // traverse over array
    for(let i=0; i<arr1.length; i++){
        // if ele matches incement counter
        if(arr1[i]===ele){
            count++;
        }
    }
    // after the end of array return counter
    return count;
}

console.log(eleOccurence(arr, ele))

// -------------------------------
// 3)Find Maximum Element
// Given an array of numbers, find the maximum element in the array using linear search.

// let arr2 = [23,4,56,5,7,8,78,90,32,132,43];
let arr2 = [23,23,23,23,23,23,23,23,23,23,23];

function maxEle(arr2){
    // Initialise a varible to store max number to -Infinity as max value;
    let max = -Infinity;
    // traverse over array
    for(let i=0; i<arr2.length; i++){
        // Check if ele>max, then max=ele
        if(arr2[i]>max){
            max = arr2[i];
        }
    }
    // return max element
    return max;
}
console.log(maxEle(arr2))

// -------------------------------
// Problem 4: Find Minimum Element
// Find the minimum element in an array using linear search.

let arr3 = [23,4,56,5,7,8,78,90,32,132,43];
// let arr3 = [23,23,23,23,23,23,23,23,23,23,23];

function minEle(arr3){
    // Initialise a varible to store min number to Infinity as min value;
    let min = Infinity;
    // traverse over array
    for(let i=0; i<arr3.length; i++){
        // Check if ele<min, then min=ele
        if(arr3[i]<min){
            min = arr3[i];
        }
    }
    // return min element
    return min;
}
console.log(minEle(arr3))


// -------------------------------
// Problem 5: Check for Palindrome
// Write a function to check if a given string is a palindrome using linear search. A string is a palindrome if it reads the same forwards and backward.

let str = "A man, a plan, a canal: Panama";

function palindrome(str){
    // maintain a flag
    // convert to lowercase
    // remove alphaneumeric charcters using regEx== /[^a-z0-9]/g 
    
}

console.log(palindrome(str))

// -------------------------------
// Problem 6: Remove Duplicates
// Given an array with duplicate elements, write a function to remove the duplicates using linear search.

// -------------------------------
// Problem 7: Find First Occurrence
// Find the index of the first occurrence of a specific element in an array using linear search.

// -------------------------------
// Problem 8: Find Last Occurrence
// Find the index of the last occurrence of a specific element in an array using linear search.

// -------------------------------
// Problem 9: Sorted Array Check
// Write a function that checks if an array is sorted in ascending order using linear search.

// -------------------------------
// Problem 10: Missing Element
// Given an array of n-1 distinct integers in the range from 1 to n, where n is a positive integer, find the missing element using linear search.
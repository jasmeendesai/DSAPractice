/* Link --->  https://practice.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1?page=1&category[]=Arrays&sprint=ca8ae412173dbd8346c26a0295d098fd&sortBy=submissions

Problem Statement ---> Given an integer array and another integer element. The task is to find if the given element is present in array or not.

Input:arr1= [1,2,3,4] ,x = 3
Output: 2

Input:arr2= [1,2,3,4,5], x = 5
Output: 4

Input:arr2= [1,2,3,4,5], x = 6
Output: -1

The task is to complete the function search() which takes the array arr[], its size N and the element X as inputs and returns the index of first occurrence of X in the given array. If the element X does not exist in the array, the function should return -1.

Expected Time Complexity: O(n).
Expected Auxiliary Space: O(1). 
*/

let arr1= [1,2,3,4] ,x = 3
let arr2= [1,2,3,4,5] ,y = 5
let arr3= [1,2,3,4,5] ,z = 6

const searchEle = (arr, x)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i]===x){
            return i
        }
    }
    return -1
}

console.log(searchEle(arr1, x))
console.log(searchEle(arr2, y))
console.log(searchEle(arr3, z))

/*Problem Statement
You have been given an array/list "arr" of integers. Your task is to find the second largest element present in "arr"

<Note--->
a) Duplicate elements may be present
b) If no such element is present return -1
</Note--->

Sample Input1--> arr1=[2,4,5,6,8]
Output ---> 6
Sample Input2--> arr2=[12,1,35,10,34,1]
Output ---> 34
Sample Input3--> arr3=[10,10,10,10,10]
Output ---> -1

TC--> O(n)
SC--> O(1)
*/

let arr1=[2,4,5,6,8]
let arr2=[12,1,35,10,34,1]
let arr3=[10,10,10,10,10]

// const secondLarge = (arr)=>{
//     let max=-Infinity
//     let secMax=-Infinity

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             secMax=max
//             max=arr[i]
//         }
//         else if(arr[i]>secMax&& arr[i]!==max){
//             secMax=arr[i]
//         }
//     }
//     if(secMax===-Infinity) return -1
//     return secMax
// }


console.log('output1',secondLarge(arr1))
console.log('output2',secondLarge(arr2))
console.log('output3',secondLarge(arr3))
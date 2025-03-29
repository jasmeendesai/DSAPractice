/**
 * https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab
 * 
 * Sort 0s, 1s and 2s
Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

You need to solve this problem without utilizing the built-in sort function.

Examples:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.
Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
Constraints:
1 <= arr.size() <= 106
0 <= arr[i] <= 2
 */

let arr = [0, 1, 2, 0, 1, 2]
// let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]

const sortArr = (arr) => {
    let low = 0
    let mid = 0
    let high = arr.length - 1

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        }
        else if(arr[mid] === 1){
            mid++
        }
        else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    return arr
}

console.log(sortArr(arr))
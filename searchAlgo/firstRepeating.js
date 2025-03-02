/**
 * Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. 

Examples: 

Input: arr[] = {10, 5, 3, 4, 3, 5, 6}
Output: 5 
Explanation: 5 is the first element that repeats


Input: arr[] = {6, 10, 5, 4, 9, 120, 4, 6, 10}
Output: 6 
Explanation: 6 is the first element that repeats
 */


// Naive Approach – O(n^2) Time and O(1) Space

// Run two nested loops, the outer loop picks an element one by one, and the inner loop checks whether the element is repeated or not. Once a repeating element is found, break the loops and print the element.

const arr = [10, 5, 3, 4, 3, 5, 6]
// const arr = [6, 10, 5, 4, 9, 120, 4, 6, 10]
// const arr = [6, 10, 5, 4]


const firstRepearting = (arr) => {
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]===arr[i]){
                return arr[j]
            }
        }
    }
    return -1
}

console.log(firstRepearting(arr))


// --------------------

const firstRepearting1 = (arr) => {
    let set = new Set()
        
        let minEle = Number.MAX_SAFE_INTEGER
        for(let i=arr.length-1; i>=0; i--){
            if(set.has(arr[i])){
                minEle = Math.min(minEle, i)
            }
            set.add(arr[i])
        }
        
        return minEle === Number.MAX_SAFE_INTEGER ? -1 : arr[minEle]
}

console.log(firstRepearting1(arr))
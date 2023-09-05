// Reverse an Array:

// Write a function to reverse an array in-place.
// Implement the reverse operation without using any additional data structures.

// TC---> O(n)
// SC ---> O(1)

const arr = [0, 1, 8, 9, 3, 2, 7, 4]

const reverseArr = (arr)=>{
    let n = arr.length
    let i=0;
    let j=n-1

    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
        j--
    }
    return arr
}

console.log('reverse --->',reverseArr(arr))
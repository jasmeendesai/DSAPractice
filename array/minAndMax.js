// Find Maximum and Minimum:

// Write a function to find the maximum and minimum elements in an array.
// Optimize the above function to find the maximum and minimum using fewer comparisons.

let arr = [0,4,7,8,78,3,29,32,10,9]

const minAndMax = (arr)=>{
    let n = arr.length
    let i=0
    //  j=n-1

    let max=-Infinity
    let min = Infinity
    while(i<n){
        if(arr[i]>max){
            max=arr[i]

        }
        if(arr[i]<min){
            min=arr[i]
        }
        i++
    }
    return [max,min]
}
const [max, min]=minAndMax(arr)
console.log('minmum', min)
console.log('maximum', max)
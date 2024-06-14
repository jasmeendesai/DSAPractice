// https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0

const n = 5 
const arr = [2, 3, 2, 3, 5] 
const p = 5
const frequencyCounter = (arr, N, P) =>{
    let map = new Map()

    for(let i=0; i<N; i++){
        let num = arr[i]

        map.set(num, (map.get(num) ||0)+1)
    }
    
    for(let i=1; i<=N; i++){
        if(map.has(i)){
            arr.splice(i-1, 1, map.get(i))
        } else{
            arr.splice(i-1, 1, 0)
        }
    }

    return arr
}

console.log(frequencyCounter(arr, n, p))


// https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/

// const arr1 = [10,5,10,15,10,5]
const arr1 = [2,2,3,4,4,2]

const highestLowestFreq = (arr) =>{
    let map = new Map()

    for(let i=0; i<arr.length; i++){
        let num = arr[i]

        map.set(num, (map.get(num) ||0)+1)
    }
    let max = -Infinity
    let min = Infinity
    for(let [key, value] of map){
        
        if(value > max){
            max = key
        } else if(value < max){
            min = key
        }
    }

    return [max, min]
}

console.log(highestLowestFreq(arr1))

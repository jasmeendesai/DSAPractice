// https://takeuforward.org/data-structure/binary-search-explained/

const arr = [3, 4, 6, 7, 9, 12, 16, 17]
const target = 6

const binarySearch = (arr, target) => {
    let n = arr.length
    let low = 0
    let high = n-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)

        if( target === arr[mid]) return mid;

        else if(target<arr[mid]){
            high = mid-1
        }

        else{
            low = mid+1
        }
    }
    return -1
}

console.log(binarySearch(arr, target))


// M2 --- using recurssion

const search = (arr, target)=>{
    return binarySearch1(arr, 0, arr.length-1, target)
}

const binarySearch1 = (arr, low, high, target) =>{
    if(low > high) return -1

    let mid = Math.floor((low+high) /2)

    if(target===arr[mid]) return mid
    
    else if(target < arr[mid]) {
        return binarySearch1(arr, low, mid-1, target)
    }
    else{
        return binarySearch1(arr, mid+1, high, target)
    }
}

console.log(search(arr,target))


// https://takeuforward.org/arrays/implement-lower-bound-bs-2/

const arr1 = [1,2,8,10,11,12,19]
const n = 7
const x = 0

const lowerBound = (arr, n, x)=>{
    let low = 0
    let high = n-1
    let ans = n

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if(x === arr[mid]) return mid
        
        else if(x < arr[mid]){
            
            high = mid -1
        }
        else{
            ans = mid
            low = mid+1
        }
    }
    return ans;
}


console.log(lowerBound(arr1, n, x))


// https://takeuforward.org/arrays/implement-upper-bound/

const upperbound = (arr, n, x) =>{
    let low = 0
    let high = n-1
    let ans = n

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        // if(x === arr[mid]) return mid
        
        if(x < arr[mid]){
            ans = mid
            high = mid -1
        }
        else{
            
            low = mid+1
        }
    }
    return ans;
}

console.log(upperbound([3, 5, 8, 9, 15, 19], 6, 9))


// https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=ceil-the-floor


const getFloorAndCeil = (arr, n, x) =>{
    let floor = -1
    let ciel = Infinity

    for(let i=0; i<n; i++){
        if(arr[i]<=x){
            floor = Math.max(floor, arr[i])
        }else{
            ciel = Math.min(ciel, arr[i])
        }
    }

    if(ciel === Infinity) ciel = -1
    if(floor === x) ciel = x;

    return [floor, ciel]
}

console.log(getFloorAndCeil([5, 6, 8, 9, 6, 5, 5, 6], 8, 7))
console.log(getFloorAndCeil([5, 6, 8, 9, 6, 5, 5, 6], 8, 10))



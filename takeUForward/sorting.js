// https://takeuforward.org/sorting/selection-sort-algorithm/

const arr = [13,46,24,52,20,9]
const N = 6

const selectionSort = (arr, N) =>{
    for (let i = 0; i < N-1; i++) {
        let min = i;

        for(let j=i+1; j<N ; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
        
    }

    return arr
}

console.log(selectionSort(arr, N))

// https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/

const bubbleSort = (arr, N) =>{
    for(let i=0; i<N; i++){
        let isSwapped = false
        for(let j=0; j<N-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSwapped =true
            }
        }

        if(!isSwapped) break
    }

    return arr
}

console.log(bubbleSort(arr, N))

// https://www.geeksforgeeks.org/javascript-program-for-insertion-sort/

const insertionSort = (arr, N) =>{
    for(let i=0; i<N; i++){
        let key = arr[i]
        let j=i-1;

        for(j; j>=0, arr[j]>key ; j--){
            arr[j+1] =arr[j]
        }

        arr[j+1] =key
    }
    return arr
}

console.log(insertionSort(arr, N))
// TC ---> O(n^2)
// SC ---> O(n)


const arr = [64, 25, 12, 22, 11];

function selectionSort(arr){
    let min ;  // to store the index of smallest value;

    for(let i=0; i<arr.length-1; i++){
        min = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]) min = j;
        }

        // swap if both index are differnt
        if(min!==i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr));
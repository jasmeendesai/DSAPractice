/**
 * TC ----> O(n^2)
 * SC ----> O(n)
 * Example
 * 
 * function insertionSort(arr){
 *  let key;  ---> to store value temporarily
 * 
 *  // Iterate arr in forward direction
 *  for(let i=0; i<arr.length; i++) {
 *      key = arr[i];
 *      let j=i-1;
 * 
 *      //Iterate & swap element in backward direction till number is greater than key
 *      for(j; j>=0, arr[j]>key; j--){   // we can use while loop also instead of for loop
 *         arr[j+1] = arr[j]; 
 *      }
 *      
 *      //swap key to right position
 *      arr[j+1] = key;
 *   }
 *   return arr
 * }
 */

const arr = [64, 25, 12, 22, 11]; 

function inertionSort(arr){
    let key;
    for(let i=0; i<arr.length; i++){
        key = arr[i];
        let j=i-1;
        
        for(j; j>=0, arr[j]>key; j--){
            arr[j+1] = arr[j];
        }

        arr[j+1] = key;
    }
    return arr
}

console.log(inertionSort(arr))


// using while loop

function insertUsingWL(arr){
    let key;
    for(let i=0; i<arr.length; i++){
        key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = key;
    }
    return arr
}

console.log(insertUsingWL(arr))


// [06:41] Raksha Rai

// {1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8}

// Remove non repeating elements

let arr= [1,1,3,2,4,3,4,8,7,9,5,4,5,5,6,6,8]
// let arr1=[]

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             arr1.push(arr[i]);
//         }
//     }
// }
// console.log(arr1)

let map = new Map();
let arr1=[]
for(let i=0; i<arr.length; i++){
    let num=arr[i];
    map.set(num, (map.get(num) || 0)+1);
}
// console.log(map)
for(let [num, val] of map){
    if(val>1){
        console.log(`${num} => ${val}`);
        arr1.push(num);
    }
}
console.log(arr1)
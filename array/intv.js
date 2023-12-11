// function exam(){
//     let x=10
//     function exam1(){
//         console.log(x)
//     }
// }
// console.log(x)

// const express = require('express');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended : true}))

// app.use('/test', ()=>{
//     console.log("Hello")
// })

// app.listen(PORT ||3000, ()=>{
//     console.log("Express App is on port 3000")
// })


// let arr = [1,2,1,1,3,4,6,3,4,];

// function removeDuplicates(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]===arr[j]){
//                 arr.splice(i, 1)
//             }
//         }
//     }
//     return arr
// }

// console.log(removeDuplicates(arr))


let arr = [6,5,4,3,2,1 ]

function thirdLargest(arr){
    let max = -Infinity
    let secMax = -Infinity
    let thirdlar = -Infinity
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            thirdlar = secMax;
            secMax = max;
            max = arr[i]
        }else if(arr[i]>secMax && arr[i]!==max){
            thirdlar = secMax;
            secMax = arr[i]
        }else if(arr[i]>thirdlar && arr[i]!==secMax){
            thirdlar = arr[i]
        }
    }
    return thirdlar
}

console.log(thirdLargest(arr))
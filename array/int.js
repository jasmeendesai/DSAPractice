// var a=5;
// function test(){
//     var a=2
//     if(true){
//         console.log(a)
//         var a=10;
//         console.log(a)
//     }
//     console.log(a);
// }
// console.log(a)
// test();

// setTimeout(test(),10000);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // [2, 1, 4, 3, 6, 5, 8, 7, 10]

// const newArr = arr.map((num, index)=>{
//     if(index%2===0){
//         return num+=1
//     }else{
//        return num-=1;
//     }
// })
// console.log(newArr)

// const arr2 = newArr.filter((num)=> num>5);
// console.log(arr2)

// const sum = arr2.reduce((acc, curr)=> acc+curr, 4);
// console.log(sum)


// const arr = [1, -1, 3, 2, -7, -5, 11, 6 ]

// function minMax  (arr){
//     var min = Infinity;
//     var max = -Infinity;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
    
//     return ({min, max})
// }

// console.log(minMax(arr))
// console.log(`The max element is ${minMax(arr).max} and min elemnt is ${minMax(arr).min}`);

const arr = [1, -1, 3, 2, -7, -5, 11, 6 ]
const negative = (arr)=>{
    // const newArr = [];
    // const arr2 = []
    // let temp =0;

    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]<0){
    //         newArr.push(arr[i])
    //     }
    //     else{
    //         arr2.push(arr[i])
    //     }
    // }
    // return ([...arr2, ...newArr])

    let i=0;
    let j= arr.length-1
    while(j<arr.length){
        if(arr[i]<0){
            let temp = arr[i]; 
            arr[i] = arr[j]
            arr[j] = temp
            i++
        }
        

    }
}

console.log(negative(arr))


user = [
    {name : "abc",
    section : "CS1"},
    {name : "abc",
    section : "CS1"},
    {name : "cba",
    section : "CS1"},
    {name : "cba",
    section : "CS1"},
]
    
user.find({name : "abc"})
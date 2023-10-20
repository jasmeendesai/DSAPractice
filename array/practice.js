// find duplicates in array
// let arr = [1, 2, 3, 4, 5, 1, 2, 6, 7];

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             let Duplicate = arr[i];
//             console.log(Duplicate)
//         }
//     }
// }

// function duplicates(arr){
//     let map = new Map();
//     let duplicate =[]

//     for(let i=0; i<arr.length; i++){
//         let num = arr[i];
//         map.set(num, (map.get(num) ||0)+1)
//     }

//     for(let [num, val] of map){
//         if(val>1) {
//             duplicate.push(num);
//         }
//     }
//     return duplicate
// }

// console.log(duplicates(arr))


// how would you implement the bubble sort algorithm?
// let arr = [1, 2, 7, 6, 4, 9, 12];

// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length-1; j++){
//         if(arr[i]>arr[j]){
//             let temp = arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)


// reverse an array
// let arr = [1, 2, 7, 6, 4, 9, 12]
// let n = arr.length
// for(let i=0; i<(n/2); i++){
//     let temp=arr[i];
//     arr[i]= arr[n-i-1];
//     arr[n-i-1]=temp;
// }
// console.log(arr)



// How would you swap two numbers without using a third variable?
// let a=10;
// let b=20;

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)



// Print a Fibonacci series using recursion?

// let n =10;
// function fib(n){
//     if(n===0||n===1) return n;
//     return fib(n-1)+fib(n-2);
// }

// for(let i=0; i<n; i++){
//     console.log(fib(i))
// }



// How do you find the factorial of an integer?

// let n=5;
// function fact(n){
//     if(n===0 || n===1) return 1;
//     return n*fact(n-1);
// }
// for(let i=0; i<n; i++){
//     console.log(fact(i))
// }

// How would you implement Binary Search?


// How do you check if the given number is prime?

// let num= 5;
// function isPrime(num){
// if(num===0 || num===1) return false;
// if(num===2) return true;

// for(let i=2; i<(num/2); i++){
//     if(num%i===0){
//         return false
//     }
// }
// return true;
// }

// console.log(isPrime(num))

// How do you sum all the elements in an array?

// Check array palindrom or not?
// let arr = [3,6,0,6,3];
// let n= arr.length;
// let flag=0;
// for(let i=0; i<(n/2); i++){
//     if(arr[i]===arr[n-i-1]){
//         flag =1;
//     }
// }
// if(flag===0) {console.log("No")}
// else{
// console.log("Yes")}

/**
 * It is a phenomenon when a function calls itself indefinitely until a specified condition is fulfilled.
 */

/**
 * 
 * https://takeuforward.org/recursion/print-name-n-times-using-recursion/
 * 
 * Problem: Print your Name N times using recursion
 */

// TC ---> O(n)
// SC ---> O(n)

let printName = (i,n) => {
    if(i>n) return

    console.log("Jasmeen")

    printName(i+1, n)
}

printName(1, 5)

/**
 * https://takeuforward.org/recursion/print-1-to-n-using-recursion/
 * Problem: Print from 1 to N using Recursion
 */

// M1 
// TC ---> O(n)

let x = 5
const print1toN = (i, n)=>{
    if(i>n) return
    console.log(i)
    print1toN(i+1, n)
}

print1toN(1, x)

// M2 -- > Using back tracking --> LIFO --> keeping function before printing number
// TC --> O(n)
// SC --> O(n)
const print1toN1 = (i)=>{
    if(i<1) return
    print1toN1(i-1)
    console.log(i)
}

print1toN1(x)


/**
 * https://takeuforward.org/recursion/print-n-to-1-using-recursion/
 * Problem: Print from N to 1 using Recursion
 */

// M1 -- TC => O(n)

const printNto1 = (i, n) => {
    if(i<=0) return
    console.log(i)
    printNto1(i-1, n)
}

printNto1(x, x)

// M2 ---> Using Backtracking --> TC -- O(n) | SC -- O(n)
const printNto11 = (i, x) =>{
    if(i > x) return
    printNto11(i+1, x)
    console.log("print N to 1", i)
}

printNto11(1,x)

// https://www.geeksforgeeks.org/problems/print-gfg-n-times/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-gfg-n-times

const n = 5;

const printNTimes = (n) =>{
    let str = "GFG"
    if (n < 1) return
    console.log(str)
    n--
    printNTimes(n)
}

printNTimes(n)

// https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=print-n-to-1-without-loop

const printNum = (n) =>{
    // if(n === 0) return

    // console.log(n)

    // printNum(n-1)
    let str = ""

    function func(i, n){
        if(i < 1) return;
        str += i + " "
        func(i-1, n)
    }

    func(n, n)

    return str
}

console.log(printNum(n))


// https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1

const cubeSum = (n) =>{
    if( n === 0) return 0

    return (n**3) + cubeSum(n-1)
}

console.log(cubeSum(n))


// https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0?problemType=functional&difficulty%255B%255D=-1&page=1&query=problemTypefunctionaldifficulty%255B%255D-1page1

const factorial = (n) =>{
    if(n===0) return 1
    return n*factorial(n-1)
}
const collectFact = (n)=>{
    let i =1;
let res = [];
while(i<=n){
    let fact = factorial(i)
    if(fact <= n) {res.push(fact)}
    
    i++
}
 return res
}
console.log(collectFact(n))

// console.log(factorial(n))


// https://leetcode.com/problems/valid-palindrome/description/

// const s = "A man, a plan, a canal: Panama"
const s = "race a car"

const palindrome = (s) =>{
    const str = s.toLowerCase()
    let n = str.length
    let newStr = ""

    function removeNonAlpha(str, start, end){
        if(start >= end) return

        if(str[start]!==" " && str[start]!=="," && str[start]!==":"){
            newStr +=str[start]
        }

        removeNonAlpha(str, start+1, end)
        
    }

    removeNonAlpha(str, 0, n)
    

    function isPal(str, start, end){
        if(start >= end) return true

        return (str[start] === str[end] && isPal(str, start+1, end-1))
    }

    return isPal(newStr, 0, newStr.length-1)
} 

console.log(palindrome(s))

// https://leetcode.com/problems/fibonacci-number/

const fib = (n) =>{
    if(n<=1) return n

    return fib(n-1)+fib(n-2)
}

console.log(fib(6))


/**
 * https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/
Sum of first N Natural Numbers ===> Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

Example 1:
Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

Example 2:
Input: N=6
Output: 21
Explanation: 1+2+3+4+5+6=21
 */

// M1 =====> Parameterized way

/**
 * In this approach, instead of using a global variable for calculating the sum, we pass the sum in the parameters of the function each time we add an integer to it during the function call. The sum gets incremented by an ith integer and i get decremented by 1 in each function call. At the end when i becomes less than 1, we simply return the calculated sum until that point. 

To understand this parameterized approach better, let us have a look at the pseudocode given below:

void func(i,sum)
{
   if(i<1)
   {
     print(sum);
     return;
   }

func(i-1,sum+i);

}

main()
{
   input(n);
   func(n,0);

}
 */

const print_sum_n_natural = (i, sum)=>{
    if(i<1) {
        console.log(sum)
        return
    }
    print_sum_n_natural(i-1, sum+i)
}

print_sum_n_natural(x, 0)

// M2 =====> Functional Way

/**
 * This approach is a lot simpler than the parameterized recursion. We can visualize the sum of n natural numbers in the following way as shown below:

sumOfNaturalNumbers(N) = N + sumOfNaturalNumbers(N-1);
The Sum of N natural numbers would just be the Nth integer added to the Sum of (N-1) natural numbers. The base case can be visualized as if n decreases to 0, then we return 0 because the sum of 0 natural numbers is 0 only. Here, we’ve just broken the problem into 2 subparts and the answers of both these subparts would be added and stored in the Sum(n) function which would then be printed at last.

To understand this functional approach better, let us have a look at the pseudocode given below:

int func(n)
{
   if(n == 0)
   {
     return 0;
   }

return n + func(n-1);

}

main()
{
   input(n);
   func(n);

}
 */

const print_sum_n_natural1 = (n) =>{
    if(n === 0) return 0
    return n + print_sum_n_natural1(n-1)
}

console.log(print_sum_n_natural1(x))

/**
 * https://takeuforward.org/data-structure/factorial-of-a-number-iterative-and-recursive/
Factorial of a Number : Iterative and Recursive ==> Problem Statement: Given a number X,  print its factorial.

To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it. More precisely X! = X*(X-1)*(X-2) … 1.

Note: X  is always a positive number. 
Example 1:
Input: X = 5
Output: 120
Explanation: 5! = 5*4*3*2*1

Example 2:
Input: X = 3
Output: 6
Explanation: 3!=3*2*1
 */

const factorial_of_n = (i, fact) => {
    if(i<=1){
        console.log(fact)
        return
    }
    factorial_of_n(i-1, fact*i)
}

factorial_of_n(x, 1)

const factorial_of_n1 = (n) =>{
    if(n<=1) return 1
    return n*factorial_of_n1(n-1)
}

console.log(factorial_of_n1(x))

/**
 * https://takeuforward.org/data-structure/reverse-a-given-array/
 * Reverse a given Array
Practice:
Solve Problem
Problem Statement: You are given an array. The task is to reverse the array and print it. 

Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Example 2:
Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
 */

let arr = [5, 4, 3, 2, 1];
let N = 5;

const reverseArray1 = (arr, left, right) =>{
    if (left >= right) return

    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    
    reverseArray1(arr, left+1, right-1)
}

reverseArray1(arr, 0, N-1)
console.log(arr)


let arr1 = [5, 4, 3, 2, 1];

const reverseArray = (arr, i) =>{
    let n = arr.length
    if(i>=Math.floor(n/2)) return 

    let temp = arr[i]
    arr[i] = arr[n-i-1]
    arr[n-i-1] = temp

    reverseArray(arr, i+1)
}

reverseArray(arr1, 0);

console.log(arr1)


/**
 * https://leetcode.com/problems/valid-palindrome/
. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

// let s1 = "A man, a plan, a canal: Panama"
// let s1 = "race a car";

// TC --> O(n) SC--> O(n)
let s1 = " ";

const isPalindrome = (s) =>{
    let cleaned = ""

    for(let i=0; i<s.length; i++){
        let code = s[i].charCodeAt(0)

        if(code>=48 && code <=57 || code>=65 && code<=90 || code>=97 && code<=122) cleaned += s[i].toLowerCase()
    }

    return helper(cleaned, 0)
}

const helper = (s, i) =>{
    let n = s.length
    if(i>=Math.floor(n/2)) return true
    
    if(s[i] !== s[n-i-1]) return false

    return helper(s, i+1)
}

console.log(isPalindrome(s1))

/**
 * https://leetcode.com/problems/fibonacci-number/
 * 
 * Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:
Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:
Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

Constraints:

0 <= n <= 30
 */

// TC --> 2^n or exponential

// let num = 2;
// let num = 3
let num = 4

const fib1 = (n)=>{
    if(n<=1) return n

    let last = fib1(n-1)
    let secLast = fib1(n-2)

    return last+secLast
}

console.log(fib(num))
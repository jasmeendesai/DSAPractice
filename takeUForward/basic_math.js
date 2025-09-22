/**
https://takeuforward.org/data-structure/count-digits-in-a-number/

Input: n = 4
Output: 1
Explanation: There is only 1 digit in 4.

Input: n = 14
Output: 2
Explanation: There are 2 digits in 14.
 */

// TC-- O(log(n)+1)

const count_digits = (n)=>{
    let count = 0;

    while(n>0){
        count++

        n = Math.floor(n/10)
    }
    return count
}

console.log(count_digits(61789))

// TC - O(1)

const count_dig = (n)=>{
    let count = Math.floor(Math.log10(n)+1)
    return count
}

console.log(count_dig(7789))

/**
 * https://leetcode.com/problems/reverse-integer/description/
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21

Constraints:

-231 <= x <= 231 - 1
 */

// TC --> O(log(n))

const reverse_num = (n) =>{
    let rev = 0
    let temp = n
    if(temp < 0) n = n * (-1)
    while(n>0){
        let ld = n%10
        rev = rev * 10 + ld
        n =  Math.floor(n / 10)
    }

    if(rev > Math.pow(2, 31)-1 || rev < -Math.pow(2, 31)) return 0

    if(temp < 0) return (-rev)
    return rev
}

console.log(reverse_num(7789))


/**
 * https://leetcode.com/problems/palindrome-number/description/
 Palindrome Number
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:
-231 <= x <= 231 - 1
 */

// TC --> O(logn)

const check_palindrome = (n) => {
    let rev = 0
    if(n<0) return false

    let temp = n

    while(n>0){
        let ld = n%10
        rev = rev*10 + ld
        n = Math.floor(n/10)
    }

    if(rev > Math.pow(2, 31)-1 || rev < -Math.pow(2, 31)) return false
    if(temp === rev) return true
    else return false
}

console.log(check_palindrome(121))
console.log(check_palindrome(-121))

/**
 * https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/
 * Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
 
An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

 Example 1:
 Input:N = 153
 Output:True
 Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153
                                        
 Example 2:
 Input:N = 371                             
 Output: True              
 Explanation: 3^3+5^3+1^3 = 27 + 343 + 1 = 371
 */

//  TC -- O(logn)
const check_amstrongNum = (n)=>{
    let sum = 0
    let temp = n

    let k = String(n).length

    while(n>0){
        ld = n % 10
        sum = sum + (ld ** k)
        n = Math.floor(n/10)
    }

    return temp === sum ? true : false
}

console.log("Amstrong Num", check_amstrongNum(153))
console.log("Amstrong Num", check_amstrongNum(15))


/**
 * https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/
 * Problem Statement: Given an integer N, return all divisors of N.
A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

 Example 1:
 Input:N = 36              
 Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
 Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
         
 Example 2:
 Input:N =12 
 Output: [1, 2, 3, 4, 6, 12]
 Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.      
 */

//  TC -- O(n)

 const print_divisors = (n) => {
    let res = []

    for(let i =1; i<= n+1; i++){
        if(n%i ===0) res.push(i)
    }
    return res
 }

 console.log(print_divisors(36))

 const print_divisors1 = (n) =>{
    let res = []

    for(let i=1; i<=Math.sqrt(n); i++){
        if(n%i === 0) res.push(i)
        if(i !== (n/i)) res.push(Math.floor(n/i))
    }

    return res.sort((a,b) => a-b)
 }

 console.log(print_divisors1(36))

 const print_divisors2 = (n)=>{
    let res = []
    
    for(let i=1; i*i <= n ; i++){
        if(n%i === 0) res.push(i)
        if(i!== (n/i)) res.push(Math.floor(n/i))
    }

    return res.sort((a,b)=> a - b)
 }

/**
 * https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/
 * Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
 * Example 1:
   Input:N = 2
   Output:True      
   Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).   

   Example 2:   
   Input:N =1         
   Output: False      
   Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.  
 */

// TC -- O(n)

const check_isPrime = (n) =>{
    let count = 0

    for(let i =1 ; i<=n; i++){
        if(n%i ==0) count++
    }

    if(count == 2) return true
    else return false
}

console.log("Prime", check_isPrime(11))
console.log("Prime", check_isPrime(4))

// TC -- O(sqrt(n))
const check_isPrime1 = (n) =>{
    let count = 0

    for(let i =1; i*i <=n; i++){
        if(n%i == 0) count++
        if(n%i !== i) count++
    }

    if(count == 2) return true
    else return false
}

console.log("Prime", check_isPrime(11))
console.log("Prime", check_isPrime(4))
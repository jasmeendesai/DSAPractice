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


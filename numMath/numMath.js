// https://takeuforward.org/data-structure/find-gcd-of-two-numbers/

const n1 = 9
const n2 = 12

const gcdOfTwoNums = (n1, n2)=>{
    // let gcd = 1;
    // console.log(gcd)
    // for(let i=1; i <= Math.min(n1, n2); i++){
    //     if(n1%i ===0 && n2%i===0){
    //         gcd = i;
    //     }
    // }
    
    // return gcd

    // better approach------------

    // for(let i= Math.min(n1, n2); i> 0; i--){
    //     if(n1%i===0 && n2%i===0){
    //         return i
    //     }
    // }

    // return 1


    // Optimised ----------------------
    
    while(n1>0 && n2>0){
        if(n1>n2){
            n1 = n1%n2
        }
        else{
            n2 = n2%n1
        }
    }

    if(n1 === 0) return n2

    return n1
}
console.log(gcdOfTwoNums(n1, n2))





const lcmOfTwoNums = (n1, n2) =>{
    return ((n1 * n2)/gcdOfTwoNums(n1, n2))
}

console.log(lcmOfTwoNums(5, 10))


// https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/

let n = 371

const armstrong = (n) =>{
    let res = 0;
    let original = n;

    while (n>0){
        let last = n%10;
        res += (last**3)
        n = Math.floor(n/10);
    }
    if(res === original) return true

    return false
}

console.log(armstrong(n))


// https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/

const allDivisors = (n) =>{
    let res = []

    for(let i=1 ; i<=n ; i++){
        if(n%i === 0) {
            res.push(i)
        }
    }

    return res
}

console.log(allDivisors(36))


// https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/

const primeNum = (n) =>{

    for(let i=2; i<n ; i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

console.log(primeNum(10))
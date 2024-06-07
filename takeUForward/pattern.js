// https://takeuforward.org/pattern/pattern-1-rectangular-star-pattern/

let n = 4;

function rectanglePattern(n){
    for(let i=0; i<n; i++){
        let row = ""
        for(let j=0; j<n; j++){
            row += "* "
        }
        console.log(row.trim())
    }
}

rectanglePattern(n)

// https://takeuforward.org/pattern/pattern-2-right-angled-triangle-pattern/

function rightAngledTri(n){
    for(let i=0; i<=n; i++){
        let row = ""

        for(let j=0; j<=i; j++){
            row += "* "
        }
        console.log(row.trim())
    }
}

rightAngledTri(n)

// https://takeuforward.org/pattern/pattern-3-right-angled-number-pyramid/

function rightAngledNum(n){
    for(let i=0; i<=n; i++){
        let row = ""
        for(let j=0; j<=i; j++){
            row += `${j+1} `
        }
        console.log(row.trim())
    }
}

rightAngledNum(n)

// https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/

function rightAngledNum2(n){
    for(let i=0; i<=n; i++){
        let row = ""
        for(let j=0; j<=i; j++){
            row += `${i+1} `
        }
        console.log(row.trim())
    }
}

rightAngledNum2(n)


// https://takeuforward.org/pattern/pattern-5-inverted-right-pyramid/

function invertRight(n){
    for(let i=0; i<=n; i++){
        let row = ""
        for(let j=n; j>=i; j--){
            row += "* "
        }
        console.log(row.trim())
    }
}

invertRight(n)

// https://takeuforward.org/pattern/pattern-6-inverted-numbered-right-pyramid/

function invertRightNum(n){
    for(let i=0; i<=n; i++){
        let row = ""
        for(let j=n; j>=i; j--){
            row += `${n-j+1} `
        }
        console.log(row.trim())
    }
}

invertRightNum(n)


// https://takeuforward.org/pattern/pattern-7-star-pyramid/

function pyramid(n){
    for(let i=0; i<n; i++){
        let row = ""
        for(let j=0; j<n-i-1; j++){
            row += " "
        }
        for(let j=0; j<(2*i+1); j++){
            row += "*"
        }   
        console.log(row)
    }
}

pyramid(n)

// https://takeuforward.org/pattern/pattern-8-inverted-star-pyramid/

const invertedPyramid = (n) =>{
    for(let i=0; i<n ; i++){
        let row = ""
        for(let j=0; j<i; j++){
            row += " "
        }
        for(let j=0; j<(2*n-(2*i+1)); j++){
            row += "*"
        }
        console.log(row)
    }
}

invertedPyramid(n)

// https://takeuforward.org/pattern/pattern-9-diamond-star-pattern/

const diamond = (n) => {
    pyramid(n)
    invertedPyramid(n)
}

diamond(n)
  

// https://takeuforward.org/pattern/pattern-10-half-diamond-star-pattern/

const halfDiamond = (n) =>{
    for(let i=1; i<=(2*n-1) ; i++){
        let row = ""

        let stars = i;

        if(i>n) {stars = (2*n-i)}

        for(let j=1; j<=stars; j++){
            row += "*"
        }
        
        console.log(row)
    }
}

halfDiamond(n)


// https://takeuforward.org/pattern/pattern-11-binary-number-triangle-pattern/

const binaryTri = (n) =>{
    let start = 1


    for(let i=0; i<n; i++){
        let row = ""
        if(i%2 === 0) start = 1;
        else start = 0;

        for(let j=0; j<=i; j++){
            row += start
            start = 1 - start;
            
        }
        console.log(row)
    }
}

binaryTri(n)


// https://takeuforward.org/pattern/pattern-12-number-crown-pattern/

const crownPattern = (n) => {
    for (let i = 1; i <=n; i++) {
        let row = ""
        
        for(let j=1; j<=i; j++){
            row +=`${j}`
        }

        for(let j=1; j<= 2*(n-i); j++){
            row +=" "
        }

        for(let j=i; j>=1; j--){
            row +=`${j}`
        }

        console.log(row)
    }
}

crownPattern(n)

// https://takeuforward.org/pattern/pattern-13-increasing-number-triangle-pattern/

const numberTri = (n) => {
    let count = 1;
    for (let i = 0; i < n; i++) {    
        let row = "";   
        for (let j = 1; j <= i; j++) {
            row +=`${count} `;
            count++
        }
        console.log(row.trim())
    }
}

numberTri(6)


// https://takeuforward.org/pattern/pattern-14-increasing-letter-triangle-pattern/

const letterTri = (n) => {
   
    for (let i = 0; i < n; i++) {
        let row = ""
        let letter = "A";
        for (let j = 0; j <= i; j++) {
            row +=`${letter} `      
            letter = String.fromCharCode(letter.charCodeAt(0) + 1)     
        }
        console.log(row)
    }
}

letterTri(n)

// https://takeuforward.org/pattern/pattern-15-reverse-letter-triangle-pattern/

const reverseLetterTri = (n) => {
    for (let i = n; i > 0 ; i--) {
        let row = ""
        let letter = "A"

        for(let j=0; j<i ; j++){
            row += `${letter} `
            letter = String.fromCharCode(letter.charCodeAt(0) + 1)
        }

        console.log(row)
    }
}

reverseLetterTri(n)

// https://takeuforward.org/pattern/pattern-16-alpha-ramp-pattern/

const alphaRampPattern = (n) =>{
    let letter = "A";
    for (let i = 0; i < n; i++) {
        let row = ""       
        for (let j = 0; j <= i; j++) {
            row +=`${letter} `     
        }
        letter = String.fromCharCode(letter.charCodeAt(0) + 1) 
        console.log(row)
    }
}

alphaRampPattern(n)

// https://takeuforward.org/pattern/pattern-17-alpha-hill-pattern/

const alphaHillPattern = (n) =>{
    for(let i=0; i<n; i++){
        let row = ""
        
        for(let j=0; j<(n-i-1); j++){
            row +=" "
        }

        for(let j=0; j<=i; j++){
            row += String.fromCharCode(65 + j)
        }

        for(let j=i-1; j>=0; j--){
            row += String.fromCharCode(65 + j)
        }

        console.log(row)
    }
}

alphaHillPattern(n)

// https://takeuforward.org/pattern/pattern-18-alpha-triangle-pattern/

const alphaTriPattern = (n) => {
    for(let i=0; i<n; i++){
        let row = ""
        
        for(let j=n-1; j>=(n-i-1); j--){
            row += `${String.fromCharCode(65 + j)} `
        }

        console.log(row.trim())
    }
}

alphaTriPattern(n)

// https://takeuforward.org/pattern/pattern-19-symmetric-void-pattern/

const symVoidPattern = (n) =>{
    for(let i=0; i<n; i++){
        let row = ""

        for(let j=(n-i); j>0; j--){
            row +="*"
        }

        for(let j=0; j<2*i; j++ ){
            row +=" "
        }

        for(let j=(n-i); j>0; j--){
            row +="*"
        }
        console.log(row.trim())
    }

    for(let i=0; i<n; i++){
        let row = ""

        for(let j=0; j<=i; j++){
            row +="*"
        }

        for(let j=0; j<2*(n-i-1); j++ ){
            row +=" "
        }

        for(let j=0; j<=i; j++){
            row +="*"
        }
        console.log(row.trim())
    }
}

symVoidPattern(n)


// https://takeuforward.org/pattern/pattern-20-symmetric-butterfly-pattern/

const symmButterfly = (n) => {
    for(let i=0; i<n; i++){
        let row = ""

        for(let j=0; j<=i; j++){
            row +="*"
        }

        for(let j=0; j<2*(n-i-1); j++ ){
            row +=" "
        }

        for(let j=0; j<=i; j++){
            row +="*"
        }
        console.log(row.trim())
    }
    for(let i=1; i<n; i++){
        let row = ""

        for(let j=(n-i); j>0; j--){
            row +="*"
        }

        for(let j=0; j<2*i; j++ ){
            row +=" "
        }

        for(let j=(n-i); j>0; j--){
            row +="*"
        }
        console.log(row.trim())
    }
}

symmButterfly(n)

// https://takeuforward.org/pattern/pattern-21-hollow-rectangle-pattern/

const hollowRectangle = (n) =>{
    for(let i=0; i<n; i++){
        let row = ""
        for(let j=0; j<n; j++){
            if(i===0 || j===0 || i===(n-1) || j===(n-1)){
                row +="*"
            }
            else{
                row +=" "
            }
        }
        console.log(row)
    }
}

hollowRectangle(n)

// https://takeuforward.org/pattern/pattern-22-the-number-pattern/

const rectNumberPattern = (n) =>{
    for(let i=0; i<(2*n-1); i++){
        let row = ""
        for(let j=0; j<(2*n-1); j++){
            let top = i;
            let bottom =j;
            let right = (2*n-2) - j;
            let left = (2*n-2) - i;

            row += `${n - Math.min((Math.min(top, bottom)), (Math.min(left, right)))}`
        }
        console.log(row)
    }
}

rectNumberPattern(n)
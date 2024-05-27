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


// 

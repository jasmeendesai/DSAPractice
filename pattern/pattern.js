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


  
 
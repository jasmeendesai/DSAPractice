// Reverse String

// const str = "Hello";

// let reverse = '';
// for(let i=str.length-1; i>=0; i--){
//     reverse+=str[i]
// }
// console.log(reverse)

// Find the number of occurrences of a character in a String? // ch = "l"
// let str = "Hello"
// let count = 0;

// for(let i=0; i<str.length; i++){
//     if(str[i]==='l')
//     {
//         count++
//     }
// }
// console.log(count)


// How to find out if the given two strings are anagrams or not? 

// let str1 = "anagram";
// let str2 = "nagaram";

// function anagramCheck(str1, str2){
//     let map1 = new Map();
//     let map2 = new Map();

//     if(str1.length !== str2.length) return false;

//     for(let i=0; i<str1.length; i++){
//         let ch = str1[i]
//         map1.set(ch, (map1.get(ch) || 0)+1)
//     }

//     for(let i=0; i<str2.length; i++){
//         let ch = str2[i]
//         map2.set(ch, (map2.get(ch) || 0)+1)
//     }
    
//     for(let ch of map1){
//         if(map1[ch] !== map2[ch]) return false
//     }
//     return true
// }

// console.log(anagramCheck(str1, str2))

// How do you calculate the number of vowels and consonants in a String?

// let str= "Hello"
// let vowels=['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
// let conso = 0;
// let vow = 0;

// for(let i=0; i<str.length; i++){
//     if(vowels.includes(str[i])){
//         vow++;
//     }
//     conso++;
// }
// console.log('vowels', vow);
// console.log('consonants', conso);


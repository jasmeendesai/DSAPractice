// Notes

// In some programming languages, the user can only store values of the same type in one array and the length of the array has to be defined at the moment of its creation and can't be modified afterwards.

// In JavaScript that's not the case, as we can store values of any type in the same array and the length of it can be dynamic (it can grow or shrink as much as necessary).

// JS array creates shallow copy(only refrences get copied not the values)

// ------------------------------------
//------------- Array Methods start ----------------

// these methods will skip empty slots--------

// concat() -- used to merge two or more arrays -- it doesnt change existing array but returns new array

const a = ['a','b','c','d'];
const b = ['e','f','g','h'];
const c = [1,2,3,4]
const d = a.concat(b);
const e = a.concat(b,c)
console.log(d)
console.log(e)


// every() --> it is iteratie method. It calls a provided callback function once for each element in array, until the callback function returns false. If such element is found, every() method immediately returns false and stops iterating through array



// filter() 

// flat()

// forEach()

// indexOf()

// map()

// reduce()

// reverse()

// slice()

// splice()

// sort()


// these methods treat empty slots as if they are undefined ---

// entries()

// fill()

// find()

// findIndex()

// includes()

// join()


//------------- Array Methods start ----------------






    // CHAPTER 2
// LOOPING A TRIANGLE

// let minHash = "#";
// let maxHash = "#######";

// for (let i=0; i <= maxHash.length; i++)
// {
//   console.log(minHash);
//   minHash = minHash + "#";
// }


// let minHash = "#", maxHash = "######", i = 0;

// while (i <= maxHash.length)
// {
//   console.log(minHash);
//   minHash = minHash + "#";
//   i ++;
// }


// FIZZBUZZ
// for (let i=0; i < 100; i++)
// {
//   if ((i % 3 == 0) && (i % 5 == 0))
//     {
//       console.log("FizzBuzz");
//     }
//   else if (i % 3 == 0)
//     {
//       console.log("Fizz");
//     }
//   else if (i % 5 == 0)
//     {
//       console.log("Buzz");
//     }
//   else
//     {
//       console.log(i);
//     }
// }

// example as to why JavaScript can be shite sometinmes. Type conversion is allowing this to run (num % 3 == 0)
// let num = "SHITE";
// for (let i=0; i<100; i++)
// {
//   // num += 1;
//   switch(num){
//     case "SHITE":
//       console.log("FizzBuzz");
//     case num % 3 == 0:
//       console.log("Fizz");
//     case num % 5 == 0:
//       console.log("Buzz");
//     default:
//       console.log(num);
//   }
// }

// for (let i=0; i<=100; i++)
// {   
//     let word = "";
//     if(i%3 == 0) word = word + "Fizz";
//     if(i%5 == 0) word = word + "Buzz";
//     console.log(word || i);
//     // if word = "" this is considered false so the i value gets logged
// }



// CHESSBOARD
// let size = 8;
// let grid = "";
// let sum = 0;

// for (let i=0; i<size; i++ )
// {
//   for (let i=0; i<size; i++ )
//   {
//     if (sum % 2 == 0) { grid += " "; }
//     else { grid += "#"; }
//     sum += 1;
//   }
//   grid += "\n";
//   sum += 1;
// }
// console.log(grid);


// CHAPTER 3
// MINIMUM
// function min(a,b)
// {
//     if (a-b > 0) {return b;}
//     else {return a;}
// }

// console.log(min(12,4));


// RECURSION
// function isEven(num)
// {
//     // if (num % 2 == 0) return true; 
//     // else return false; 
//     if (num == 0){
//         return true;
//     }
//     else if (num == 1){
//         return false;
//     }
//     else if (num < 0){
//         return isEven((num *= -1) -2);
//     }
//     else {
//         return isEven(num - 2);
//         // recursion is basically looping - here the function loops until num hits either 0 or 1. 
//     }
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-2));


// BEAN COUNTING
// function countsBs(string)
// {   
//     let count = 0;
//     let l = string.length; 
//     for (let i=0; i<=l; i++)
//     {
//         if (string[i] == "B")
//         {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countBs("BarBarosaB"))


// function countChar(string)
// {
//     let countArray = [];
//     let l = string.length;
//     for (let i = 0; i <= l; i++)
//     {
//         if (string[i] == "B")
//         {
//             countArray.push(i);
//         }
//     }
//     console.log(countArray);
//     return countArray.length;
// }

// console.log(countChar("BarBarosaB"))


// CHAPTER - Data Structures: Objects and Arrays
// THE SUM OF RANGE

// function range(start, end, step = start < end ? 1 : -1)
// {
//     let s = start;
//     let e = end;
//     let rangeArray = [];

//     if (start > end )
//     {
//         for (let i=s; i>=e; i+= step)
//         {
//             rangeArray.push(i);
//         }
//     }
//     else 
//     {
//         for (let i=s; i<=e; i+= step)
//         {
//             rangeArray.push(i);
//         }
//     }
//     return rangeArray;
// }
// console.log(range(6,16,2));
// console.log(range(5,2,-1));


// function sum(array)
// {
//     let count = 0;
//     for (let i of array)
//     {
//         count = count + i;
//     }
//     return count;
// }
// console.log(sum(range(1, 4)));
// console.log(sum([1,2,3,4]))


// REVERSING AN ARRAY
// newArray = [];
// function reverseArray (array) {
//     for (let i=(array.length-1); i>=0; i--)
//     {
//         newArray.push(array[i]);
//     }

//     // // different way of doing it (array looping method) - remember use 'of' key word instead of 'in'
//     // for (let shite of array)
//     // {   
//     //     newArray.unshift(parseInt(shite));
//     // }
//     return newArray;
// }
// console.log(reverseArray([4,5,6,7,8]));

// function reverseArrayInPlace(array) {
//     let l = Math.floor((array.length/2));

//     for (let i=0; i<l; i++)
//     {
//         let s = array[i];
//         let e = array[array.length-1-i];

//         array[i] = e;
//         array[array.length-1-i] = s;
//     }
//     return array;
// }
// console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));
// console.log(reverseArrayInPlace(["shite", "bag"]));


// A LIST
// function arrayToList(array)
// {
//     list = null;
//     for (i=(array.length-1); i>=0; i--)
//     {
//         list = {value: array[i], rest:list}
//     }
//     return list;
// }
// console.log(arrayToList([1,2,3,4,5]))

// function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//       array.push(node.value);
//     }
//     return array;
//   }
  
//   function prepend(value, list) {
//     return {value, rest: list};
//   }
  
//   function nth(list, n) {
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
//   }


// DEEP COMPARISON
// my solution (close to correct)
// function deepEqual(val1, val2)
// {     
//     if ((typeof val1 == "object" && val1 != null) && (typeof val2 == "object" && val2 != null))
//     {   
//         function testProperties(x,y)
//         {
//             x = Object.keys(val1);
//             y = Object.keys(val2);      
            
//             if (x.length == y.length)
//             j = 0;
//             {
//                 for (i of x)
//                 {
//                     if(typeof i == typeof y[j])
//                     {return true}
//                     else
//                     {break;}
//                     j ++;
//                     return false;
//                 }
//             }
//         }

//         return testProperties();
//     }
//     if (typeof val1 ===  typeof val2)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(deepEqual("shite", "42"));
// console.log(deepEqual("42", 42));
// console.log(deepEqual({s:1, e:3, f:5}, {4:4, s:4, h:5}));
// console.log(deepEqual(true, false));


// book solution
// function deepEqual(a, b) {
//     if (a === b) return true;
    
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
  
//     let keysA = Object.keys(a), keysB = Object.keys(b);
  
//     if (keysA.length != keysB.length) return false;
  
//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
  
//     return true;
//   }
  
//   let obj = {here: {is: "an"}, object: 2};
//   console.log(deepEqual(obj, obj));
//   // → true
//   console.log(deepEqual(obj, {here: 1, object: 2}));
//   // → false
//   console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//   // → true


    // CHAPTER  Higher Order Functions
// **notes**
// forEach  - loop over elements in array
// filter  - returns new array that pass predicate
// map  - transform array by putting each element through a function
// reduce   - combine all elements in array to single value
// some - tests whether element matches predicate function
// findIndex    - find position of first element that matches predicate


// FLATTENING
// let arr_of_arrs = 
// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12],
// ]
// let reducer = (accumulator, current) => accumulator.concat(current);
// console.log(arr_of_arrs.reduce(reducer));

// YOUR OWN LOOP   
// function loop(start, test, update, body){
//     for (let value = start; test(value); value = update(value))
//     {
//         body(value)
//     }
// }
// loop(3, n=> n > 0, n=>n-1, console.log )


// EVERYTHING
// let containsTest = false;

// function everything(arr, test){
//     for (let i = 0; i<arr.length; i++)
//     {   
//         // typeof(arr[i]) === test ? true : false;
//         if (typeof(arr[i]) === test)
//         {
//             containsTest = true;
//         }
//     }
//     return console.log(containsTest);
// }
// everything([1,"B",2,3,4,"C"], "number");


// function testString(element){
//     return typeof(element) === "string"
// }

// array = [1,2,3,4];
// console.log(array.some(testString));
//  -- more complex solution in handbook --


//DOMINANT WRITING DIRECTION
// function dominantDirection(text) {
//     let counted = countBy(text, char => {
//       let script = characterScript(char.codePointAt(0));
//       return script ? script.direction : "none";
//     }).filter(({name}) => name != "none");
  
//     if (counted.length == 0) return "ltr";
  
//     return counted.reduce((a, b) => a.count > b.count ? a : b).name;
//   }
  
//   console.log(dominantDirection("Hello!"));
//   // → ltr
//   console.log(dominantDirection("Hey, مساء الخير"));
//   // → rtl


    // CHAPTER - THE SECRET LIFE OF OBJECTS

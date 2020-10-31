/* 
Explore Differences Between the var and let Keywords
let catName;
let quote;
function catTalk() {
  

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
 */


/* Compare Scopes of the var and let Keywords
function checkScope() {
  
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
   */



/*   Declare a Read-Only Variable with the const Keyword
  function printManyTimes(str) {
    "use strict";
  
    // Only change code below this line
  
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
  
    // Only change code above this line
  
  }
  printManyTimes("freeCodeCamp");
  
   */



/*   Mutate an Array Declared with const
  const s = [5, 7, 2];
  function editInPlace() {
    'use strict';
    // Only change code below this line
  
    // Using s = [2, 5, 7] would be invalid
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
    // Only change code above this line
  }
  editInPlace();
   */


/*   Prevent Object Mutation
  function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS.PI);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 3.14;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj(); */



/* Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date(); */



/* Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); */


/* Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line */
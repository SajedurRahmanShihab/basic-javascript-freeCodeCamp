// This is an in-line comment.

/* This is a
multi-line comment */

// var myName;

// Storing Values with the Assignment Operator
/*var a;
a = 7; */

// Assigning the Value of One Variable to Another
// Setup
/*var a;
a = 7;
var b;

// Only change code below this line
b = a; */

// Initializing Variables with the Assignment Operator
/* var a = 9; */

// Understanding Uninitialized Variables
// Only change code below this line
/* var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!"; */

// Understanding Case Sensitivity in VariablesPassed
// Variable declarations
/* var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000; */

// Add Two Numbers with JavaScript
/* var sum = 10 + 10; */

// Subtract One Number from Another with JavaScript
/* var difference = 45 - 33; */

// Compound Assignment With Augmented Addition
/* var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7; */

// Compound Assignment With Augmented Subtraction
/* var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1; */

// Compound Assignment With Augmented Multiplication
/* var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10; */

// Compound Assignment With Augmented Division
/* var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11; */

// Declare String Variables
/* var myFirstName = "Sajedur";
var myLastName = "Rahman"; */

// Escaping Literal Quotes in Strings
/* var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line */

// Quoting Strings with Single Quotes
/* var myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; */

// Escape Sequences in Strings
/* var myStr ='FirstLine\n\t\\SecondLine\nThirdLine'; // Change this line */

// Concatenating Strings with Plus Operator
/* var myStr = "This is the start. " + "This is the end."; // Change this line */


// Concatenating Strings with the Plus Equals Operator
/* var myStr = "This is the first sentence.";
myStr += " This is the second sentence."; */


// Constructing Strings with Variables
/* var myName = "Sajedur";
var myStr = "My name is "+ myName + " and I am well!";
 */

// Appending Variables to Strings
/* var someAdjective = "Hey";
var myStr = "Learning to code is ";
mystr += someAdjective;
 */

/* Find the Length of a String
 // Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length; */

/* Use Bracket Notation to Find the First Character in a String
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line */


/* Understand String Immutability
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
 */

/* Use Bracket Notation to Find the Nth Character in a String
 // Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line
 */

/* Use Bracket Notation to Find the Last Character in a String
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
 */

/* Use Bracket Notation to Find the Nth-to-Last Character in a String
 // Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line */

/* Word Blanks
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb; // Change this line
// Only change code above this line */

/* Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
var myArray = ["Shihab", 4]; */

/* Nest one Array within Another Array
// Only change code below this line
var myArray = [["Shihab",4]];
 */

/* Access Array Data with Indexes
 // Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0]; */

/* Modify Array Data With Indexes
// Setup
var myArray = [18,64,99];

// Only change code below this line
myArray[0] = 45; */


/* Access Multi-Dimensional Arrays With Indexes
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];
 */

/* Manipulate Arrays With push()
 // Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3]); */

/* Manipulate Arrays With pop()
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop(myArray.length-1);
 */


/* Manipulate Arrays With shift()
 // Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift(); */


/* Manipulate Arrays With unshift()
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul",35]); */


/* Shopping List
var myList = [["Chocolate Bar", 15],["Tomatos",10],["Apple",10],["Orange",20],["Lemon",40]];
 */


/* Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
}

reusableFunction(); */

/* Passing Values to Functions with Arguments
function functionWithArgs(a, b){
    console.log(a+b);
}

functionWithArgs(2,3); */


/* Global Scope and Functions
// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
 */

/* Local Scope and Functions
function myLocalScope() {
    'use strict';
  
    // Only change code below this line
    var myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar); */


/*  Global vs. Local Scope in Functions
  // Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

 var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit(); */


/* Return a Value from a Function with Return
function timesFive(num){
    return num*5;
}
var answer = timesFive(3); */


/* Understanding Undefined Value returned from a Function
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive(); */



/* Assignment with a Returned Value
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7); */


/* Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr)); */


/*  
 Understanding Boolean Values
 function welcomeToBooleans() {

   // Only change code below this line
 
   return true; // Change this line
 
   // Only change code above this line
 }
  */

/* Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
   // Only change code below this line
 if(wasThatTrue){
   return "Yes, that was true";
 }
 return "No, that was false";
 
 
   // Only change code above this line
 
 } */


/* Comparison with the Equality Operator
 // Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10); */

/*   Comparison with the Strict Equality Operator
  // Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10); */


/*   Practice comparing different values
  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10"); */


/*  Comparison with the Inequality Operator
  // Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
   */



/*   Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10); */


/*   Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
  
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
   */

/*   Comparison with the Greater Than Or Equal To Operator
 function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
 */


/* Comparison with the Less Than Operator
function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
   */


/*   Comparison with the Less Than Or Equal To Operator
  function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
   */



/*   Comparisons with the Logical And Operator
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25) {
     
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10); */


/* 
Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
   */


/* Introducing Else Statements
function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }
  
  else {
    result = "5 or Smaller";
  }
  
  // Only change code above this line
  return result;
}
  
testElse(4); */


/* Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  
   else{
      return "Between 5 and 10";
   }
  }
  
  testElseIf(7); */



/*   Logical Order in If Else Statements
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    }
     else if (val < 10) {
      return "Less than 10";
    }
     else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
   */


/* Chaining If Else Statements
function testSize(num) {
  // Only change code below this line
if(num<5)
{
  return "Tiny";
}
else if(num<10)
{
  return "Small";
}
else if(num<15)
{
  return "Medium";
}
else if(num<20)
{
  return "Large";
}
else if(num>=20)
{
  return "Huge";
}
  return "Change Me";
  // Only change code above this line
}
  
testSize(7); */


/* Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if(strokes == 1)
{
  return names[0];
}
else if(strokes == 2)
{
  return names[1];
}
else if(strokes == 3)
{
  return names[2];
}
else if(strokes == 4)
{
  return names[3];
}
else if (par == 4 && strokes == 5)
{
  return names[4];
}
else if(strokes == 5 && par == 5)
{
  return names[3];
}
else if(strokes == 6)
{
  return names[5];
}
else if(strokes == 7)
{
  return names[6];
}

  return "Go Home!";
  // Only change code above this line
}

golfScore(5, 4);
 */



/* Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";
            break;

    }


    // Only change code above this line
    return answer;
}

caseInSwitch(1); */




/* Adding a Default Option in Switch Statements

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            return "apple";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff";
            break;
    }


    // Only change code above this line
    return answer;
}

switchOfStuff(1); */




/* Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
   switch(val){
     case 1:
     case 2:
     case 3:
     return "Low";
     break;
     case 4:
     case 5:
     case 6:
     return "Mid";
     break;
     case 7:
     case 8:
     case 9:
     return "High";
     break;
  
   }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1); */




/* Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  
  switch(val){
    case "bob":
    return "Marley";
    break;
    case 42:
    return "The Answer";
    break;
    case 1:
    return "There is no #1";
    break;
    case 99:
    return "Missed me by this much!";
    break;
    case 7:
    return "Ate Nine";
    break;
  
  }
  
  // Only change code above this line
  return answer;
}
  
chainToSwitch(7);
 */


/* 
Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    return  a<b;
    // Only change code above this line
  }
  
  isLess(10, 15);
   */



/* Return Early Pattern for Functions
   // Setup
function abTest(a, b) {
    // Only change code below this line
  if(a<0 || b<0)
  {
    return undefined;
  }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
   */




/* Counting Cards
  var count = 0;

function cc(card) {
  // Only change code below this line
switch(card)
{
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count--;
  break;
}

  if(count>0)
  {
    return count + " Bet";
  }
  else 
  {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
 */


/* Build JavaScript Objects
var myDog = {
// Only change code below this line
"name" : "Sajedur",
"legs": 2,
"tails":0,
"friends": ["Rifat","Nipu"]


// Only change code above this line
};
 */



/* Accessing Object Properties with Dot Notation
 // Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line
   */



/*  Accessing Object Properties with Bracket Notation
   // Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line
   */


/*  Accessing Object Properties with Variables
   // Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  var player = testObj[playerNumber];   // Change this line */


/*   Updating Object Properties
  // Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog["name"]="Happy Coder"; */
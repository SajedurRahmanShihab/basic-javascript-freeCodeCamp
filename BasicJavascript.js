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
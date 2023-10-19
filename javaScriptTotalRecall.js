/* 
WE create the variables using
1. How do we assign a value to a variable?
use the single = with the variable name and the new value
(variable = value)

2. How do we change the value of a variable?
The same way, use the =
(variable = newValue)

3. For a variable, what is the difference between : 
declare - let x
assign - this is what we did in question 1
define - let x = 5

*/

// let number = 5;
// console.log('this is the value of number');
// console.log(number);
// number = 7;
// console.log('this is the new number');
// console.log(number);

// const newNumver = 10;
// console.log('This is the new number');
// console.log(newNumber);

//you cannot chage a variable that 
//newNumber = 12;
// console.log('this is the same new number');
// console.log(newNumber);


// what are the types of variable in javaScript
// boolean, sting , number
// array, object





//
// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// let firstVariable;
// firstVariable = ' Hello World';
// console.log('firstVariable is');
// console.log(firstVariable);
// console.log('firstVariable is:', firstVariable);

// // Change the value of this variable to some number

// firstVariable = 17;
// console.log('firstVariable is:', firstVariable);

// Store the value of firstVariablein a new variable called secondVariable

// let secondVariable = firstVariable;
// console.log('after second variable');
// console.log('firstVariable is :', firstVariable);
// console.log('secondVariable is :', secondVariable);
// Change the value of secondVariableto any string.

// secondVariable = 'any string';
// console.log('firstVariable is : ', firstVariable);
// console.log('secondVariable is: ', secondVariable);
// What is the value of firstVariable?
//17

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// let yourName = 'Nissi';
// you can concatenate a string in two ways
// using the console.log so that we can see the concatenation, but you don't need that to concatenate
// console.log('hello, my name is ', yourName);
// console.log('Hello, my name is ' + yourName);

// let myPic = '#'
// console.log(myPic);


//const a = 4;
//const b = 53;
//const c = 57;
//const d = 16;
//const e = 'Kevin';

// console.log(a < b);

// console.log(c >  d);
// console.log('Name' === 'Name');
// // FOR THE NEXT TWO, USE ONLY && OR ||
// For || or , if any one thing is true, the whole thing is true
// console.log(true || false);
// console.log(false || false || false || false || false ||true);
// console.log(false === false)
//console.log(e ==='Kevin');
//console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//console.log(a + be === c);
//console.log(a !==  a - d); // note: the answer is a simple arithmetic equation, not something "weird"
//console.log(48 == '48');

// this will be false
//console.log(48 === '48');

//==========================================
// D. The Farm
//========================================

// declare a variable animal and set it to be either 'cow' or something else
// let animal = 'frog';
// if (animal === 'cow') {
//     console.log('Moooooo');
// }else  {
//         console.log('Hey! You are not a cow')
//     }

// i+=3 is same as i=i+3
// for (let i=12; i<=4000; i+=3){
//     console.log(i)
// }


// We create the variables using: let, var, const

// 1. How do we assign a value to a variable?
//  use the single = with the variable name and the new value
//  (variable = value)

// 2. How do we change the value of a variable?
// The same way, use the =
// ( variable = newValue )

// 3. For a variable, what is the difference between: 
// declare - let x 
// assign - this is what we did in question 1
// define - let x = 5

// What is pseudocoding and why should you do it?
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// */

// let number = 5;
// console.log('This is the value of number');
// console.log(number);
// number = 7;
// console.log('this is the new number');
// console.log(number);

// const newNumber = 10;
// console.log('This is the new number');
// console.log(newNumber);
// you cannot change a variable that is a string, number, or boolean if you initialize it as const
// newNumber = 12;
// console.log('this is the same new number');
// console.log(newNumber);

// what are the types of variable in javaScript
// boolean, string, number
// array, object


/*
STRINGS

*/
// create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// this would do the same thing
// let firstVariable = "Hello World";

// console.log('firstVariable is ');
// console.log(firstVariable);
// console.log('firstVariable is: ', firstVariable);
// console.log('firstVariable is: ', 'firstVariable');
// Change the value of this variable to some number
firstVariable = 17;
// console.log('firstVariable is: ', firstVariable);

// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// console.log('after second variable');
// console.log('firstVariable is: ', firstVariable);
// console.log('secondVariable is: ', secondVariable);

// Change the value of secondVariableto any string.
secondVariable = 'any string';
// console.log('firstVariable is: ', firstVariable);
// console.log('secondVariable is: ', secondVariable);
// What is the value of firstVariable?

// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName
// so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = 'Christina';
// you can concatenate a string in two ways
// using the console.log so that we can see the concatenation, but you don't need that to concatenate
// console.log('Hello, my name is ', yourName);
// console.log('Hello, my name is ' + yourName);

/* 
BOOLEANS
*/

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// you could also use (a < b)
// console.log(a !== b);

// console.log(c > d);

// console.log('Name' === 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
// for || (OR), if any one thing is true, the whole thing is true
// console.log(true || false);
// console.log(false && true);
// console.log(false || false || false || false || false || true);

// console.log(false === false)

// console.log(e === 'Kevin');

// a = 4, b = 53, c = 57
// is 4 = -(53 - 57)
// console.log(a === -(b - c));
// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a + b === c);

// console.log(a !== a - d);
// note: the answer is a simple arithmetic equation, not something "weird"

// console.log(48 == '48');
// this will be false
// console.log(48 === '48');


// =========================================
// D. The Farm
// =========================================

// declare a variable animal and set it to be either "cow" or something else
// This will print "Hey! You are not a cow."
// let animal = "frog";
// animal = "cow";
// This will print "moooooooo"
// if (animal === "cow") {
//     console.log("moooooooo");
// } else {
//     console.log("Hey! You are not a cow.")
// }

// =========================================
// E. Driver's Ed
// =========================================
// let age = -5;
// if (age >= 16) {
//     console.log("Here are the keys!");
// } else if (age > 0) {
//     console.log("Sorry, you're too young.")
// } else {
//     console.log("that's not a real age")
// }


// ==================================================
// SECTION II 
//      LOOPS
// ==================================================

// =========================================
// A. The Basics
// =========================================
//Write a loop that will print out all the numbers from 0 to 10, inclusive
// i++ is the same as i = i + 1
//for (let i = 0; i < 11; i++) {
    // console.log(i);
// }

// Write a loop that will print out all the numbers from 10 up to and including 400
// for (let i=10; i<=400;i++) {
    // console.log(i);
// }

// Write a loop that will print every third number starting with 12 and 
// going no higher than 4000
// 12, 15, 18, ... 
// i += 3 is the same as i = i + 3
// set up of a for loop
// for (starting point; go until; how to step up or down) 
//   {what to do}
// for (let i=12; i< 4000; i+=3) {
//     console.log(i);
// }

//the first few st

// ===============================
// B. Get even
// ===============================

// print out the numbers that are withing the range of 1 - 100
// add a message next to even numbers saying 
//  "<-- is an even number"
// are we including 1 - 100? we are including 1 and 100
// remember that % checks for the remainder
// i % 2 checks for the remainder of i / 2


// ============================
// C . Give me five
//==================================
// For the each _number_ 0 - 100, print out "I found a _number_.  High five!"
// then add the code to print out "I found a _number_.  Three is a crowd"
// if the number is divisible by both 3 and 5, print both messages
// ****** I need to check the both condition FIRST
//for (let i = 0; i <= 100; i++) {
    //if (i%5 === 0 && i%3 === 0) {
        // console.log("I found a " + i + ". High five! Three is a crowd")
   // }
   // else if (i%5 === 0) {
        // console.log("I found a " + i + ". High five!")
  //  } else if (i%3 === 0) {
        // console.log("I found a " + i + ". Three is a crowd")
  //  }
//}

//=========================================
// D. Savings Account
// =========================================
// Write code that will save the sum of all of the numbers between 1 - 10 to a variable 
// called bank_account
// at the end, bank_account should have $55 in it
// let bank_account = 0;
// console.log('bank_account before the for loop: ', bank_account);
// for (let i=1; i<=10; i++) {
//     bank_account = bank_account + i;
//     console.log('in the for loop, and i is: ', i);
//     console.log('bank_account is: ', bank_account);
// }
// console.log(bank_account);

// You got a bonus!
// sum all the numbers between 1 - 100 multiplied by 2
// let bank_account = 0;
// console.log('bank_account before the for loop: ', bank_account);
// for (let i=1; i<=100; i++) {
//     bank_account = bank_account + i*2;
//     console.log('in the for loop, and i is: ', i);
//     console.log('bank_account is: ', bank_account);
// }
// console.log(bank_account);

// const ourClass = ['Salty', 'zoom', 'Sardine', 'Github'];

///cl


//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
//   console.log('Kristyn is rocking that'+' ' + kristynsCloset[2] +' '+ 'today!');
//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat"
//   kristynsCloset.splice(6,0, 'raybans' );
//   console.log(kristynsCloset)

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
//   kristynsCloset[5]='stained knit hat'
//   console.log(kristynsCloset)

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

 // console.log(thomsCloset[0][0])

 // In the same way, access one item from Thom's pants array.

 //console.log(thomsCloset[1][0])

 //Access one item from Thom's accessories array.

 //console.log(thomsCloset[2][1])

 //Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

 //console.log('Thom is looking fierce in a' + ' ' + thomsCloset[0][0]+ ','+ thomsCloset[1][1] +' '+ 'and' + ' ' + thomsCloset[2][1]+ '!')





 //=====================================
 //Secton IV
//  FUNCTIONS
//===========================================
// A. printGreeting
//============================================



//============================================
//B. printCool
//==========================================
// function printCool(name){
 //   return `${name} is cool`
 //}
 //console.log(printCool('Captain Reynolds'));



 //================================


  


//function isVowel(character){
  //  character = character.toLowerCase();
   // if (character === 'a'|| character ==='e' || character ==='i'|| character ==='o' || character ==='u'){
   //     console.log('True');
   // } else{
   //     console.log('false')
  //  }
//}
//isVowel('A')

//===========================
// E. getTwoLengths
//=================================
// function getTwoLengths(string1, string2){
//     return [string1.length , string2.length]
// }

// console.log(getTwoLengths('hi', 'joy'))
// console.log(getTwoLengths('Hello', 'Bye'))
// console.log(getTwoLengths('this is a sentence', 'joy'))

//=======================
// F. getMultipleLengths
//=======================

// function getMultipleLengths( stringArray){
//      const returnArray = []
//     for (let i=0; i<stringArray.length; i++ ){
//       console.log( stringArray[i].length)
//       returnArray.push(stringArray[i].length)
//     }
//     return returnArray
// }
//  console.log(getMultipleLengths(['hello','what','is','up','dude']));

//==========================
// G. maxOfThree
//=============================

//function maxOfThree
















//=======================
// Objects
//================

//A. Make a user object
//=============================
const user = {
    name: 'Mercy',
    email: 'email@something.com',
    age: 29,
    Purchase: []
}
console.log(user)
console.log(user.name)

//==============
// B. Update the user
//==================


// create a for loop that will log the numbers 1 through 20.
















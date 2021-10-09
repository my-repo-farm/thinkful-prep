// DATATYPES.

/* Integers -
 we declare values x and y and we give them something to hold, 300 and 100, 
 then we use an operator to add.*/

 let x = 300;
 let y = 100;
 
 let total = x + y;
 
 console.log(total);
 
 //Expected output should be 400
 
 /* Strings - 
 we declare values "city" and "state" and we give them something to hold, Seattle and Washington, and we use the (+) operator to combine strings. */
 
  let city = " Seattle ";
  let state = " Washington ";
 
  let currentLocation = " I live in ";
  console.log(currentLocation + city + state);
 
  //Expected output should be I live in Seattle Washington
 
  /* Boolean -
  True or False represent logic in programs. Below, my statement indicates the following in
  simple English. " If I'm hungry order food now, if I'm not hungry dont order food" */
 
 
 let meHungry = true;  //declare meHungry and give a TRUE boolean.
 if (meHungry) {       //line 32 and 33 indicate, "If I m hungry"
   console.log("Order food now!"); // order food now,is a string between ""
 }
 
 //Expected output "Order food now!""
 
 meHungry = false; //declare meHungry and give a FALSE boolean.
 if (!meHungry) {  //line 39 and 40 indicates, "If I'm NOT hungry" (!) = NOT
   console.log("Do not order food!"); //Do not order food, is a string between ""
 }
 
 /*Expected output "Do not order food!""
 TAKE AWAY - this (!) inverts a boolean value for example. 
 "!true" is false, and "!false" becomes true */

 //(typeof ) - This operator reveals the data type of a value.

 console.log(typeof 500); // The output is number
 console.log(typeof "hello"); //the output is string
 console.log(typeof false); //the output is boolean
 
 /* Converting datatypes.
 below we can see a value between quotes, but it is a number, naturally if we use the (+)
 operator we would be adding, however. When we use double quotes we are
 declaring the number as string. */

 let z = "200" + 50; //Expected output 20050
 let b = 100 + 50; //Expected output 150

 console.log(z);
 console.log(b);
//Conclustion- Value between quote is a string

/*(-) Minus operator -
Below we used (-). */

let r = "100" - 20; // instead of 10020, the (-) functions the opposite.
console.log(r);  //Expected output 80. 

//Conclusion, it can get confusing but is important to verify with what data type we are working with.

/* TAKEAWAY - In my opinion (typeof ) becomes very important when lines of code
take up space on the editor and it gets overwhelming. Knowing what datatype values are stored
will reveal information whether its a number, string, boolean etc etc. */

/* PARSING or ANALYZING - 

parseInt: Parse a string and return and integer.
parseFloat: It is used for CONVERTING strings that have fractional parts and decimals.*/

//1.A
let myNum = "22";

console.log(typeof myNum) // with "typeof " we are asking what datatype is myNum.

// Conclusion: 1A - Expected output "string", since 22 is inside double quote.

//1.B
let myNumX = "22"; // I used a "myNumX" to avoid the compiler to throw me error.
myNumX = parseInt(myNumX); // WE CONVERTED the same number using parseInt.
console.log(typeof myNumX)

// Conclusion 1B - Expected output "number", even inside doublequotes, my output is NUMBER.
// parseInt converted my value.


/* CONVERTING NUMBERS TO STRINGS */

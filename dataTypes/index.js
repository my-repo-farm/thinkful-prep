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
 
// Hoisting//
// var a;  //Declaration
// console.log(a); // Initialization
// a = 12;

// Primitive and variables //

// var a = 12;
// var b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// var a = [1, 2, 3, 4, 5];
// var b = a
// console.log(a);
// a.pop();
// console.log(b);

// Conditionals Statement : if, else, else-if

// if (12 > 8) {
//   consol.log("Hellow");
// } else {
//   console.log("Bye");
// }

// Switch case statement //

// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;

//   case 1:
//     day = "Monday";
//     break;

//   case 2:
//     day = "Tuesday";
//     break;

//   case 3:
//     day = "Wednesday";
//     break;

//   case 4:
//     day = "Thursday";
//     break;

//   case 5:
//     day = "Friday";
//     break;

//   case 6:
//     day = "Saturdat";
//     break;

//   default:
//     text = "Looking forward to the Weekend";
// }

// document.getElementById("demo").innerHTML = "Today is: " + day;

// console.log(day);

// loops //

// for loop

// for (var i = 25; i <51; i++) {
//   console.log(i);
// }
// document.getElementById("demo").innerHTML = "Times print: " + i ;
// console.log("Hello world");

// while loop

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++;
// }

//do while

//  let i = 0;
//  do{
//     console.log(i);
//     i++;
//  }while(i > 5);

// Functions //

// function mul (a , b){
//     return a * b;
// }
// function add (a , b){
//     return a + b;
// }
// function sub (a , b){
//     return a - b;
// }
// function div (a , b){
//     return a / b;
// }
// function modulo (a , b){
//     return a % b;
// }

// console.log(modulo(2, 5));

// Array //

// var a = [1, 2, 3, 4, 5];
// console.log(a);

// a.pop();
// console.log(a);

// a.push(23);
// console.log(a);

// a.shift();
// console.log(a);

// a.unshift(1,2,3);
// console.log(a);

// a.splice(1, 2);
// console.log(a);

// document.getElementById("demo").innerHTML = "Printing value: " + a;
// console.log(a);

//Objecs//

//  Blank obj
// -->This is a blank object in javascript.
var a = {};

// 2) Filled object (obj)

// var b = {
//   name:"jainish", age:"20",hometown:"Songadh"
// };

// console.log(b);

var watch = {
  brand: "Timex",
  price: "1k",
  color: "white metalic",
  type: "Analog",
  ditital: true,    //This is property
  watch:function(){   //This is method becous its value is function

  }
};

watch.brand;
// console.log(watch.brand);
//This is how we accessing the values


// Updating object propertyes

watch.brand="Rolex";
console.log(watch.brand);
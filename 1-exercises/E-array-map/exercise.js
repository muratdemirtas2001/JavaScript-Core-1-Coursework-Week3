// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
// 1-using named function
// const multipliedNumbers = numbers.map(function multplyby100(number) {
//   return number * 100;
// });

// 2- using anonymous function
// const multipliedNumbers = numbers.map(function (number) {
//   return number * 100;
// });

// 3- using arrow function
// const multipliedNumbers = numbers.map((number)=> {
//   return number * 100;
// });

// 4- using arrow function with implicit return

const multipliedNumbers = numbers.map((number)=> number * 100);

console.log(multipliedNumbers);

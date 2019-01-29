/*

**Make a program that asks for an integer n and generates the n first Fibonacci numbers.

*/

const readLineSync = require("readline-sync"); //Call the module to ask question to the user.

let userNumber = readLineSync.question("Enter an integer: "); //Enter the integer.

//Function who generate the first Fibonacci numbers after the user input.
let firstFibonacci = (userNumber) => {

  if (userNumber == 0) {
    return 0;

  }else if (userNumber == 1) {
    return 1;

  }else {
    return firstFibonacci(userNumber - 1) + firstFibonacci(userNumber - 2);// Calcul the  n numbers of Fibonacci
  }

}
console.log("The  " + userNumber + " term of the sequence of Fibonacci is " + firstFibonacci(userNumber));

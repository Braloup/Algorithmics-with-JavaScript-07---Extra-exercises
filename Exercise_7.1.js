 /*
  **Make a program that generates an integer between 1 and 100 (don't display it to the user).
  **Then the program should display "Guess the number" and ask the user to guess.
  **If the user enters a number which is too low it should display "Too low" and re-ask the question.
  **If the user enters a number which is too high it should display "Too high" and re-ask the question.
  **If the user guess correctly it should display "Well guessed!" and exit.
  */

 const readLineSync = require("readline-sync"); //Call the module for ask the user.

//function generate a random number and ask user t ofind the guess number.
 let guessNumber = () => {

   let result = Math.floor(Math.random() * 100);//Generate a random number.
   let userResult;

   do {
     userResult = readLineSync.question("Guess The number: ");//Ask the user the guess.

     if (result < userResult) {//The user may enter the guess number to get out the loop.
       console.log("To hight");

     } else if (result > userResult) {
       console.log("To low");

     } else {
       console.log("You win");
     }

   } while (userResult != result);

 }

 guessNumber();

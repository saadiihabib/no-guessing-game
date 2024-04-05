#!/usr/bin/env/node
import inquirer from "inquirer";
const RandomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "GuessNumber",
        type: "number",
        message: "please Guess a number between 1 - 6",
    }
]);
if (answers.GuessNumber === RandomNumber) {
    console.log("you guessed it right");
}
else {
    console.log("try again");
}

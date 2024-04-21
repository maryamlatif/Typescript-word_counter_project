#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colorfull welcome message
console.log(chalk.bold.greenBright("\n \t \t Code with maryam word-counter"));
console.log("=".repeat(70));
//Prompt the enter the user
let answer = await inquirer.prompt([
    { name: "sentence",
        type: "input",
        message: "Enter a sentence"
    }
]);
// Trimming the sentence and spliting it into word based on "space"
let word = answer.sentence.trim().split(" ");
// Analysis of user input sentence 
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Word:"));
console.log(word);
console.log(chalk.bold(`\n word count ${chalk.bold.blueBright(word.length)}`));
console.log("=".repeat(60));

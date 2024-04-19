#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("\n \t\t GHULAM NASIR- Word Counter"));
console.log(chalk.red("*".repeat(70)));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(chalk.red("=".repeat(70)));
console.log(chalk.bold("-Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.blue(words.length)}`));
console.log("*".repeat(70));

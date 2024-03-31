#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.bgRedBright("what do you want in  add your todo? ")
        },
        {
            name: "addmore",
            type: "confirm",
            message: chalk.greenBright("do want to add more Todo?"),
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}

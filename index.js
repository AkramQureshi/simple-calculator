"use strict";
/*npm init (Node PAckage Manager)
tsc --init (to initialize typescript)
create a new tsconfig.json
line 28 .... tsconfig.json (change year 2022 and change module "nodeNext")
line 30 .... model resulution "nodeNext"
create module in package.json
inquirer.js
mpm js .... is a package.
npm i inquirer (cmd.... same directory)
Use npm install <package> afterwards to install a package and save it as dependancy in the package.json file.
create new file vs code index.ts
cmd npm i --save-dev @types/inquirer*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
!usr / bin / env;
Node;
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
    { message: "Enter First Number:", type: "number", name: "firstNumber" },
    { message: "Enter Second Number:", type: "number", name: "secondNumber" },
    { message: "Select one of the operator to perform Operation:",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
// Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log("Select a Valid Operator");
}

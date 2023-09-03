#! /user/bin/env node
import inquirer from "inquirer";
import { fastCash } from "./fastCash.js";
import { balinq } from "./balinq.js";
import { cashWith } from "./cashwith.js";
import { miniStat } from "./miniSta.js";
import { chgPin } from "./chgPin.js";
import { transfer } from "./transfer.js";
const answers = await inquirer.prompt([{
        name: "num1",
        type: "input",
        message: "Please Enter you login I.D."
    },
    {
        name: "num2",
        type: "password",
        message: "Please enter yuor user Pin"
    },
    {
        name: "operator",
        type: "list",
        message: "Please Select from the list: what do you want to do?",
        choices: ["Fast Cash", "Balance Inquiry", "Cash Withrawl", "Mini Statement", "Change PIN", "Transfers"]
    }]);
if (answers.operator === "Fast Cash") {
    const result = fastCash();
    console.log();
}
else if (answers.operator === "Balance Inquiry") {
    const result = balinq();
    console.log();
}
else if (answers.operator === "Cash Withrawl") {
    const result = cashWith();
    console.log();
}
else if (answers.operator === "Mini Statement") {
    const result = miniStat();
    console.log();
}
else if (answers.operator === "Change PIN") {
    const result = chgPin();
    console.log();
}
else if (answers.operator === "Transfers") {
    const result = transfer();
    console.log();
}

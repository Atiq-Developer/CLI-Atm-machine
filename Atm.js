#! /usr/bin/env node
import inquirer from "inquirer";
console.log("=> Welcome to my ATM Application");
let myBalance = 20000; //Dollar
console.log(`The current balance is:  ${myBalance}`);
let pinCode = 7231;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin: ",
        type: "number",
    },
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct Pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select the option do you want: ",
            choices: ["withdraw", "Fast Cash", "Check Balance", "Exit"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Sorry your transiction cannot be succeed please check your balance.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let FastCashAns = await inquirer.prompt([
            {
                name: "FastCash",
                type: "list",
                message: "Enter your Fast Cash",
                choices: ["1000", "2000", "5000", "15000", "20000", "30000"],
            },
        ]);
        myBalance -= FastCashAns.FastCash;
        console.log(`Your remaining amount is :  ${myBalance}`);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Total Balnce is : ${myBalance}`);
    }
    else if (operationAns.operation === "Exit") {
        console.log("Use it Again for Transaction..");
    }
}
else {
    console.log("Wrong Pin code.");
}

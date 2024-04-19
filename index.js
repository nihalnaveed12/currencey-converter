import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.54,
    PKR: 277.57
};
let usernum = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Convert to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[usernum.from];
let toAmount = currency[usernum.to];
let amount = usernum.amount;
let div = amount / fromAmount;
let result = div * toAmount;
console.log(`${usernum.amount} ${usernum.from} convert into ${usernum.to} = ${result}`);

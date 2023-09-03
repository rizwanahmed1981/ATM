import inquirer from "inquirer"

async function chgPin() {
    const cgPin = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Please input your old PIN number"
        },
        {
            name: "num2",
            type: "number",
            message: "please input your new PIN number"
        },
        {
            name: "num3",
            type: "number",
            message: "please input your new PIN number again"
        },
        {
            name: "reply",
            type: "string",
            message: "your new PIN is registered: thank you for using my ATM services"
        }
    ])
}


export { chgPin }
import inquirer from "inquirer";


async function balinq() {
    const blinq = await inquirer.prompt([{
        name: "operator",
        type: "list",
        message: "Please Select your account type?",
        choices: ["current account", "saving account", "business plus", "forign currency account"]
    },
    {
        name: "reply",
        type: "string",
        message: "Your balance is insufficiant: thank you for using my ATM services"
    }
    ])
}


export { balinq }
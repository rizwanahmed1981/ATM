import inquirer from "inquirer";


async function fastCash(){
    const fCash = await inquirer.prompt([
        {
            name: "choices",
            type: "list",
            message: "Please select your Amount",
            choices: ["5000", "10000", "20000", "25000"]
        },
        {
            name: "reply",
            type: "string",
            message: "here is your money"
        }
    ])
}


export { fastCash }
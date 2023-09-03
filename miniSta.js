import inquirer from "inquirer";
async function miniStat() {
    const mstat = await inquirer.prompt([{
            name: "operator",
            type: "list",
            message: "Please Select your account type?",
            choices: ["current account", "saving account", "business plus", "forign currency account"]
        },
        {
            name: "reply",
            type: "string",
            message: "please collect your mini statement: thank you for using my ATM services"
        }
    ]);
}
export { miniStat };

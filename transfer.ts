import inquirer from "inquirer";



async function transfer() {
    const trans = await inquirer.prompt([{
        name: "operator",
        type: "list",
        message: "Please Select your bamk type?",
        choices: ["Inter Bank Transfer", "Other Bank Transfer",]
    },
    {
        name: "reply1",
        type: "number",
        message: "please input IBAN of the benificiary"
    },
    {
        name: "reply2",
        type: "number",
        message: "please input the desired Amount"
    },
    {
        name: "reply3",
        type: "string",
        message: "bank will not be responsible for any fraud of misinput! are you sure to confirm to the above account?"
    },
    {
        name: "reply4",
        type: "string",
        message: "balance transffered to benifficiary: thank you for using my ATM services"
    }
    ])
}


export { transfer }
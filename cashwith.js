import inquirer from "inquirer";
async function cashWith() {
    const cWith = await inquirer.prompt([
        {
            name: "reply1",
            type: "string",
            message: "please input your desired amount"
        },
        {
            name: "reply2",
            type: "string",
            message: "here is your money"
        }
    ]);
}
export { cashWith };

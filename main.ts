#! /usr/bin/env node


import inquirer from "inquirer";
console.log("Welcome To Your ATM private Account👍");
console.log("✅");
let myBalance: number = 60000; 
let myPin: number = 7890;
//step # 01
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin👉",
    type: "number",
  },
]);
console.log("🆗");
// step # 02
if (pinAnswer.pin === myPin) {
  let options = await inquirer.prompt([
    {
      name: "operation",
      message: "Please Select Option👉",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);
  console.log("🆗");
  // step # 03
  if (options.operation === "withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Amount",
        type: "list",
        choices: [1000, 2000, 5000, 8000, 15000, 20000,25000,35000,40000,55000,60000,65000,70000],
      },
    ]);
    console.log("🆗");
    if (amount.amount >= myBalance){
      console.log("You have insufficient balance🫡 ${'You can't withdraw more than your current balance🤷'}!");
    } else if((myBalance -= amount.amount)){
      console.log(`Your Remaning Balance is: ${myBalance}`);
      console.log("Thank You");
    } 
  } else {
    console.log("Your Current balance is:" +myBalance);
  } 
} else {
  console.log("Invalid Pin");
}
console.log("🆗");
console.log("Thanks For Using ATM machine.Goodbye😊");

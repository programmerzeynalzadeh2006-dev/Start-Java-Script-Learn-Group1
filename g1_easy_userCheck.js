const prompt = require('prompt-sync')();

const name = prompt("Whats Your Name : ");
const Age = Number(prompt("How Old Are You : "));

if (Age >= 18)
    console.log(name, "----", Age, "----", "adult");
else
    console.log(name, "----", Age, "----", "young");
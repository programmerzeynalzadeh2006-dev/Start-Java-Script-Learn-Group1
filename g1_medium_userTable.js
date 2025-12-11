const prompt = require('prompt-sync')();

let Results = [];

let User_Age;
let User_LastName;
let User_FirstName;

let users = 0;

let running = true;

while (running) {
    try {
        User_FirstName = prompt("Whats Your First Name : ");
        User_LastName = prompt("Whats Your Last Name : ");
        User_Age = Number(prompt("How Old Are You : "));
    }

    catch (input_error) {
        console.log("Please Enter Valid Value in Input ! Try Again !");
    }

    if (User_FirstName.length < 2 || User_FirstName.length > 20){
        console.log("Please Enter Valid Fist Name !")
    }

    else if (isNaN(User_Age) || User_Age < 1 || User_Age > 120) {
        console.log("Please Enter Valid Age ! ");
    }

    else {
        users++;

        const userData = {
            id: users,
            Name: `${User_FirstName} ${User_LastName}`,
            Age: User_Age,
            Status: User_Age >= 18 ? "adult" : "young"
        };

        Results.push(userData)

        console.log(`✅ User ${users} added successfully!`);
        console.log(`   Name: ${userData.Name}`);
        console.log(`   Age: ${userData.Age}`);
        console.log(`   Status: ${userData.Status}\n`);
    }

    if(User_FirstName === "exit" || User_LastName === "exit" || User_Age.toString() === "exit") {
        if (Results.length > 0) {
            console.log("\n" + "=".repeat(50));
            console.log("FINAL RESULTS:");
            console.log("=".repeat(50));

            Results.forEach(user => {
                console.log(`${user.id}. ${user.Name} - ${user.Age} years (${user.Status})`);
                console.log(users)
            });
        }
        else {
            console.log("Data is Not Find !")
        }
        running = false;
        break;
    }
}
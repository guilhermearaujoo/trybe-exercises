let currentHour = 20;
let message;

if (currentHour >= 22) {
    message = "We should not eat at all, it's time for bed";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Time to eat, let's have dinner :D";
} else if(currentHour >= 14 && currentHour < 18) {
    message = "Let's make a cake for coffee break?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Lunch Time!!!";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, I smell fresh coffee"
}

console.log(message);
const name = "Sammy";
const age = 23;
const email = "sammy@example.com";
const isAdmin = false;
const favoriteNumber = 8;
const address = null;


console.log(`Name: ${name}, Age: ${age}, Email: ${email}, Admin: ${isAdmin}, Favorite Number: ${favoriteNumber}, Address: ${address}`);


const ageInMonths = age * 12;
const ageInDays = age * 365; 
const canVote = age >= 18;
const isEven = favoriteNumber % 2 == 0;


console.log(`Age in Months: ${ageInMonths}`);
console.log(`Age in Days (approx): ${ageInDays}`);
console.log(`Can Vote: ${canVote}`);
console.log(`Favorite Number is Even: ${isEven}`);


const adminMessage = isAdmin && "User has admin access.";
const addressMessage = address || "Address not provided.";

console.log(adminMessage);
console.log(addressMessage);
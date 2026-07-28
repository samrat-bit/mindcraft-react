/**
 * Create variables (const where possible, let only where needed) for: name, age, email, 
 * isAdmin, favoriteNumber, address (null for now).
Print a nicely formatted summary using template literals.
Compute and print: age in months, age in days (approx), 
whether the user can vote (age >= 18), and whether the favoriteNumber is even.
Use both && and || short-circuit at least once.
*/

const name = "Nabraj"
let age = 20;
const email = "nabraj@gmail.com"
const isAdmin = true
const favoriteNumber = 6
const address = null
//Print a nicely formatted summary using template literals.
console.log(`Name: ${name} Age: ${age} Email: ${email} Admin: ${isAdmin}
     FavoriteNumber: ${favoriteNumber} Address: ${address}`)

//Compute and print: age in months, age in days (approx), 
console.log(`Age in Months: ${age * 12} months
Age in Days: ${age * 365} days (approx)
`);     

//whether the user can vote (age >= 18), and whether the favoriteNumber is even.
//Use both && and || short-circuit at least once.
if (age>=18 && ge<=40){
    console.log("Elligible to vote")
}else{
    console.log("Not elligible to vot")
    
}

if (favoriteNumber % 2==0 ){
    console.log("FavoriteNumver is even number")
    
}else{
console.log("FavoriteNumver is odd number")
}
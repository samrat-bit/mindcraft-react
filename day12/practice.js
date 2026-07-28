// const price = 100;
// const taxRate = 0.13;
// const TotalPrice = price + (price * taxRate);
// console.log(`The total is $${TotalPrice.toFixed(2)}`);



for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 ) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 30; i++) {
    console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz": i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "buzz" :
         i 
        
    );
}


// const day = 8;

// switch (day) {
//     case 1:
//         console.log("Weekend");
//         break;

//     case 2:
//         console.log("Monday");
//         break;

//     case 3:
//         console.log("Tuesday");
//         break;

//     case 4:
//         console.log("Wednesday");
//         break;

//     case 5:
//         console.log("Thrusday");
//         break;

//     case 6:
//         console.log("Friday");
//         break;

//     case 7:
//         console.log("Weekend");
//         break;

//     default:
//         console.log("Invalid day number");

// }




// const score = 85;

// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// // Wrong order

// const score = 85;

// if (score >= 60) {
//     console.log("Grade: D");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 90) {
//     console.log("Grade: A");
// } else {
//     console.log("Grade: F");
// }
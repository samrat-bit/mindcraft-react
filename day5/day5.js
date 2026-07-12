// Array.forEach(function (value, index, array){
//     //runs once per item
// })

// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
// console.log(i)
// }

// const fruits = ["apple", "banana", "peach"];
// fruits.forEach((fruits, index) => {
//     console.log(index, fruits);
// })


// const score = [90,80,70];
// for (const scores of score){
//    console.log(scores) 
// }

// const person = {name:"Sammy", age:20}
// for (const key in person){
//    console.log(key, person[key]) // key is the property name 
// }


const numbers = [1, 2, 3, 4, 5]

const squareNumbers = numbers.map((num) => num * num)
console.log(squareNumbers);
console.log(`Original number of array: ${numbers}`);

const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers);
console.log(`Original number of array: ${numbers}`);


// reduce example
const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

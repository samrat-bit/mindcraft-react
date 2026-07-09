// function multiply(a, b) {
//   return a * b;
// }

// const result = multiply(5,4);
// console.log(result);

// console.log(multiply(5,4)); // another short way to call function

// console.log(greet("hummm"));
// function greet(name){
// return `Hello ${name}`
// }



// const multiply = (a, b, c) => {
//     return a * b * c
// };

// const result = multiply(3, 2, 4);
// console.log(result);


// const sum = (a, b) => a + b
// console.log(sum(5, 10));


// calculateTotal(price, taxrate = 0.1) _ call with and without the tax arg
// rewrite two function as arrows(one implicit return) .

// function calculateTotal(price, taxRate = 0.1){
//     return price+price*taxRate
// }
// console.log(calculateTotal(200))
// console.log(calculateTotal(1000,0.3))


const calculateTotal = (price , taxRate = 0.1) => price + price * taxRate
console.log(calculateTotal(500))
console.log(calculateTotal(1000, 0.2))
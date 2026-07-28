// Part 1:

const items = ["Milk", "Bread", "Eggs", "Coffee", "Butter"];
const prices = [2.5, 1.8, 3.2, 6.0, 4.4];

let total = 0;
let itemsOver3 = 0;

let mostExpensivePrice = prices[0];
let mostExpensiveItem = items[0];

for (let i = 0; i < items.length; i++) {

    console.log(`${items[i]} - ${prices[i].toFixed(2)}`);

    total = total + prices[i];

    if (prices[i] > 3) {
        itemsOver3 = itemsOver3 + 1;
    }

    if (prices[i] > mostExpensivePrice) {
        mostExpensivePrice = prices[i];
        mostExpensiveItem = items[i];
    }
}

console.log(`Total: ${total.toFixed(2)}`);
console.log(`Items over $3.00: ${itemsOver3}`);
console.log(`Most expensive: ${mostExpensiveItem}`);


//Part 2:

const cart = [
    { name: "Milk", price: 2.5 },
    { name: "Bread", price: 1.8 },
    { name: "Eggs", price: 3.2 },
    { name: "Coffee", price: 6.0 },
    { name: "Butter", price: 4.4 },
];

// map - Create receipt lines
const receipt = cart.map((item) => `${item.name} - ${item.price.toFixed(2)}`);

receipt.forEach((line) => {
    console.log(line);
});

// reduce - Calculate total
const totalPrice = cart.reduce(
    (sum, item) => sum + item.price, 0);

console.log(`Total: ${totalPrice.toFixed(2)}`);

// filter - Items over $3
const expensiveItems = cart.filter(
    (item) => item.price > 3
);

console.log(`Items over $3.00: ${expensiveItems.length}`);

// Bonus - 10% discount using map
const discountedCart = cart.map((item) => ({
    name: item.name,
    price: item.price * 0.9
}));

const discountedTotal = discountedCart.reduce(
    (sum, item) => sum + item.price, 0);

console.log(`Total after 10% off: ${discountedTotal.toFixed(2)}`);
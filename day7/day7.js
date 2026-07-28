const fruits = ["apple", "banana"];
const vegies = ["carrot", "potato"];

const a = [...fruits];  //copy the array
a.push("papaya");// only adds as on copy
console.log(a);

const food = [...fruits, ...vegies]; // merge the array
console.log(food);


const person = {name:"sammy", age:20, gender:"male"};
const cars = {brand:"BMW", price:"20M"};

const personCopy = {...person};
console.log(person);
console.log(personCopy);
const personAndCars = {...person, ...cars};
console.log(personAndCars);



// function sum(a,b,c){
//     return a + b + c ;
// }
// console.log(sum(1,2,3));


const medal = ["gold","silver","bronxe","iron"];
const [winner, ...rest] = medal;
console.log(winner);
console.log(rest);


const user = {id:"12", name:"sammy", password:"abcd", city:"pkr"};
const {password, ...safeUser} = user;
console.log(password);
console.log(safeUser);





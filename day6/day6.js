//array destructuring

const arr =[1,2,3,4,5,6];
const [first, second , sixth, fifth]=arr;
console.log(first);
console.log(second);
console.log(sixth);
console.log(fifth);
console.log(arr);


const person = {
    name: "Tushar",
    age:28,
    profession:"Student",
    Gender:"No"
}

// const {name, age,} = person;
// console.log(name);
// console.log(age);
// const {Gender} = person;
// console.log(Gender);

let p =1;
let q = 2;
[p,q]=[q,p];
console.log(p,q);


const colors={
    name:"Green",
    type:"none"
}

const{type}=colors;
console.log(type)

const plane =[
    {
        name:"name",
        brand:"yeti",
        age:100
    }
]

const [{age}]=plane;
console.log(age)
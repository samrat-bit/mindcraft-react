//object
const person ={
    name:"Nabraj",
    age:20,
    eyeColor:"Brown",
    professsion:{
        title:"Software Engineer",
        experience: 2
    }
};
const name = person.name;
const age = person.age;
const eyeColor = person.eyeColor;
console.log(name)
console.log(age)
console.log(eyeColor)

//changing value of experience
person.professsion.experience = 10;
console.log(person.professsion.experience);

// function in object
const calculator ={
    name: "Nabraj",
    add: function (a,b){
        return a+b;

    },
multiply(a,b){
    return a*b;

},  
};

console.log(calculator.add(5,6))
console.log(calculator.multiply(10,8))


const person2 ={
    firstName: 'Nabraj',
    lastName:'Mahatara',
    fullName: function (){
        return this.firstName + " " + this.lastName;

    },
    
};
console.log(person2.fullName());
console.log(Object.keys(person2));
console.log(Object.values(person2));
console.log(Object.entries(person2));


const color ={
    name:"Green",
    type:"wow",
    wow: function(){
        return this.name + "" +this.type
    },
};
console.log(color.wow());





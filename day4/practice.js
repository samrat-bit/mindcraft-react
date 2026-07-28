const fruits ={
    name:"Apple",
    age:20,
    time:"20:20",
    profession:{
eat:"rice",
salary:"2000"
    },
    add: function   (){
        return this.name + "" + this.age
    }
}

// const name = fruits.name; // This code is used to extract properties from the object and save them into new, separate variables
// const age = fruits.age;
// const{name,age}=fruits; // Destructuring
console.log(name)
console.log(fruits.add());
console.log(fruits.profession)
fruits.profession.salary=20000;
fruits.profession.eat="Biriyani";
console.log(fruits.profession)


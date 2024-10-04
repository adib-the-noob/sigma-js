// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     email : "jhon@doe.com"
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.email);


// const person = new Object();

// person.firstName = "John";
// person.lastName = "Doe";
// console.log(person["lastName"]);
// person.age = 50;
// person.email = "hacker@hacker.com";

// console.log(person);


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person);

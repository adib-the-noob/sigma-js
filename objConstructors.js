function Person(
    firstName,
    lastName,
    age,
){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

Person.prototype.changeName = function(newName){
    this.firstName = newName.split(" ")[0];
    this.lastName = newName.split(" ")[1];
    this.fullName = newName;
}

const myFather = new Person("John", "Doe", 50);
const myMother = new Person("Jane", "Doe", 48);
const myBrother = new Person("Jim", "Doe", 25);

console.log(myFather.fullName());


myFather.changeName("Jack Doe");
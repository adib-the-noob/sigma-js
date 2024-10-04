// function sayHappyBirthday(
//     wisherName,
//     birthdayPersonName,
//     age
// ){
//     message = `Happy Birthday ${birthdayPersonName}! You are ${age} years old now. Best wishes from ${wisherName}.`;
//     // console.log(message);
//     return message;
// }

// wish = sayHappyBirthday("Adib", "Elon Musk", 22);
// console.log(wish);


function toCelcius(farenheit){
    return (farenheit - 32) * 5/9;
}

// let value = toCelcius(100);

// let text = `100 Farenheit is equal to ${value} Celcius.`;
let text = "100 Farenheit is equal to " + toCelcius(100) + " Celcius.";
console.log(text);

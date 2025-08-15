// IF ELSE statement or if else chain
let x = 0;
if (x < 0) {
    console.log("Number x is less than 0");
} else {
    console.log("Number x is greater than 0");
}

if (x > 0) {
    console.log("Number x is greater tahn 0");

} else if (x < 0) {
    console.log("Number x is less than 0");
} else {
    console.log("Number x is equal to 0");

}


let trafficLight = "red";
let command;

if (trafficLight == "green") {
    command = "Go";
} else if (trafficLight == "yellow") {
    command = "Slow down";
} else if (trafficLight == "red") {
    command = "Stop";
} else {
    command = "Invalid color";
}
console.log(command);


// Switch statement 
let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is another day of the week");
}
// prompt
// let text;
// let weekDayNumber = Number(prompt("week day number"));

// switch (weekDayNumber) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         text = "Week day";
//         break;
//     case 6:
//     case 7:
//         text = "Weekend"
//         break;
//     default:
//         text = "1-7 input your number";
// }
// console.log(text);

// ternary operator 
// condition ? <expression if true > : <expression if false > : 
const score1 = 90;
let rating1;

if (score1 > 70) {
    rating1 = "Excellent";
} else {
    rating1 = "Do better";
}
console.log(rating1);

const score2 = 60;
let rating2 = score2 > 70 ? "Excellent" : "Do better";
console.log(rating2);


// template literal
// Exercise 1 
let boy;

if (boy > 18) {
    console.log("Adult");
} else {
    console.log("Teenager");
}

//Exercise 2 
let num = 8;

if (num > 0) {
    console.log("Positive number");

} else {
    console.log("Negative number ");

}

// Exercise 3 
let dayOfWeek = 2;
let weekday = 5

if (dayOfWeek < weekday) {
    console.log("Weekday");

} else if (dayOfWeek > weekday) {
    console.log("Holiday");
} else {
    console.log("Another day");

}

// Exercsie 4
let number = 9;

if (number % 2 == 0) {
    console.log("Number is even");

} else if (number % 2 == 1) {
    console.log("Number is odd");
} else {
    console.log("Number is invalid");
}


// Exercise 5 
let userName = 'ICode Robot';
let login = true;

if (login == true) {

console.log(`Welcome ${userName}`)

} else {

console.log("login Please");
}
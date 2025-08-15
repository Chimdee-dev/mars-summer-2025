//temdegt mor
let message = "Hello";
let msg = `${message}, Chimdee`;

console.log("Hello, \\how are you?");
console.log("Hello, \bhow are you?");
console.log("Hello, \rhow are you?");
console.log("Hello, \nhow are you?");
console.log("Hello, \fhow are you?");
console.log("Hello, \thow are you?");

const str = "Life, the universe and everything";
console.log(str.length);

console.log(str.charAt(4));
console.log(str[4]);

console.log(str.toLowerCase());
console.log(str.toUpperCase());


 // string holboh 
let firstname = 'John';
let fullname = firstname.concat (" ", "Smith");
console.log(fullname);
console.log(firstname);


let firstname2 = "Jane";
let fullname2 = firstname2 + " " + "Smith";
console.log(fullname2);

let str2 = "Javascript String";
// ehleh index bln tuunees hoish heden shirheg temdegt haruulahiig zaana
console.log(str2.substr(0, 10));
console.log(str2.substr(11, 6));


// ehleh index bolon togsgoliin index iig zaaj ogno 
console.log(str2.substring(4,10));

let str3 = "This is a string";
console.log(str3.indexOf("is"));
console.log(str3.indexOf("string"));
console.log(str3.indexOf("T"));
console.log(str3.indexOf("g"));

let str4 = "    Hi.    ,    ";
console.log(str4);
// тэмдэгтйн урл болон хойно байгаа хоосон зайг арилгана.
console.log(str4.trim());

//( message, defualt value)
// let result = prompt("Your name: ", "Bold");
// console.log(result);

// const inputNumber = Number(prompt("Type a number: "));
// console.log(inputNumber + 5);

let number = 123.456778;
console.log(number.toFixed(2));

const budget = 1000_00_000;
console.log(budget);

// Math 
const degrees = 45;
let radius = degrees * (Math.PI/180);
console.log(radius);
console.log(Math.PI);

let a = 5, b = 9;
const diff = Math.abs(a-b);
console.log(diff);
// abs utga ni eyreg utgaar ni garganaa 

console.log(Math.ceil(0.95));
console.log(Math.ceil(7.004));
console.log(Math.ceil(-7.004));

console.log(Math.floor(0.95));
console.log(Math.floor(5.05));
console.log(Math.floor(-5.05));

console.log(Math.round(0.9));
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));


console.log(Math.max(1,5,3,9,0));
console.log(Math.min(1,80,3,9,0));

console.log(Math.pow(8,2));

console.log(Math.random());

let min = 3; 
let max = 10;
let randomNumber = Math.random() * (max - min + 1) + min;
console.log(Math.floor(randomNumber));






























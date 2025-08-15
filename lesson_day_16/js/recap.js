// if else  statement - conditionals
let trafficLight = "red";
let command ="";

if (trafficLight == "green"){
    command = "GO";
} else if (trafficLight == "yellow"){
    command = "Slow down";

}else if( trafficLight =="red" ){
    command = "Stop";
} else {
    command = "Invalid color";
}
console.log(command);



console.log(command);
 let score1 = 80;
 let rating1 = "";
 if (score1 > 70){
    rating1 = "Excellent";
 } else {
    rating1 = "Do better";
 }
 console.log(rating1);


 // ternary operator 
let score2 = 70;
let rating2 = (score2 >= 70)? "Excellent" : "Do Better";
console.log(rating2);

// loop 
for(let i = 1; i <=5; i++){
    // template literal
    console.log(`Hello ${i}`);
}

let sum = 0;
for (let i =1; i<=10; i++){
    sum = sum + i;
}
console.log(sum);

for(let i = 1; i<=5; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}



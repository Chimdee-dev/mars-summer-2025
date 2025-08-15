// while loop 
let i = 1;
while (i < 5) {
    console.log(`Hello ${i}`);
    i += 2;

}

//do while loop  
let a = 11;
do {
    console.log("Do While" + a);
    a++;
} while (a < 10);

// for loop
for (let i = 0; i < 10; i += 2) {
    console.log(i);

}
for (let i = 10; i > 0; i -= 2) {
    console.log(i);

}
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);
//break 
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);

}

console.log(5 == "5"); // utga shalgah 

console.log(5 === "5"); // turul shalgah 
// continue
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);

}

// Exercise 6 
let b = 1;
while (b <= 10) {
    console.log(`Hello ${b}`);
    b++;

}
// Exercise 7
for (let i = 10; i > 1; i--) {
    console.log(i);

}
// Exercise 8 
for ( let i = 2; i < 20; i+=2){
    console.log(i);
}

// Exercise 9 
let N = 1;
for (let i = 1; i <= 5; i++) {
    N = N * i;
} 
console.log(`5! = ${N}`);


// Exercise 10
let min = 11;
let max = 20;
let summary = 0;
for (let i = min; i <= max; i++){
    summary +=i;
} console.log(summary);

// Exercise 11
let score = 95;
if ( score >= 90 && 100 >= score) {
    console.log("A");
} else if (score >= 80 && 89 >=score) {
    console.log("B");
} else if (score >=70 && 79>=score){
    console.log("C");
} else if ( score < 60){
    console.log("F");
}
// Exercise 12 


// Exercise 13
let primeNumber = 17;
let huwaagch = 0;
for (let i = 1; i <= primeNumber; i++){
    if ( primeNumber % i == 0 ){
        huwaagch++;
    } 
}
if ( huwaagch >2){
    console.log(`${primeNumber} Anhii too bish`);
    
} else{
    console.log(`${primeNumber} Anhnii too mon`);
    
}
// Nemelt too 
let too = 10;
for( let i = 1; i <= too; i++){
    if (i % 2 == 0){
        console.log(i);      
    }
}

//Exercise 14
let name = "Sarnai";
if ( name === "Sarnai"){
    console.log(`Sainuu, hairt ${name} min`);
    
} else {
    console.log(`Sainuu,${name}!`);
    
}

//Exercise 15 
//Fibonacci ; 
let count = 8;
let c = 0;
let d = 1;
let sequence = `${c} ${d}`;
for ( i = 3; i <= count; i++){
    let next = c + d;
    sequence += ` ${next}`;
    
    // 0,1,1,2,3,5,8,13
    c = d;
    d = next;
}
console.log(sequence);


// array 


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

let friuts = ["apple", "banana", "kiwi", "orange"];
console.log(friuts);

let mixed = [1, "ice cream", true];
console.log(mixed);

let empty = [];
console.log(empty);

// numbers
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers[7]);
console.log(numbers.length);

// friuts 
console.log(friuts[2]);
for (let i = 0; i < friuts.length; i++) {
    console.log(friuts[i]);
}
for (let i = 0; i < mixed.length; i++) {
    console.log(mixed[i]);
}
// forEach
numbers.forEach(function (number) {
    console.log(number);
})

// for . . . of loop 
for (let number of numbers) {
    console.log(number);
}

for (let friut of friuts) {
    console.log(friut);
}
//array methods

// цувааны төгсгөлд элемент нэмдэг
numbers.push(10, 20);
console.log(numbers);

// цувааны сүүлчийн элементийг хасдаг буюу устгадаг
let last = numbers.pop();
console.log(last);
console.log(numbers);

// цувааны эхний элементийг хасдаг
let first = numbers.shift();
console.log(first);
console.log(numbers);

// цувааны эхэнд элемент нэмдэг 
numbers.unshift(100);
console.log(numbers);

// хасагдах эхний элементийн индексээс сүүлийн хасагдах индекё хүртэл заах өгнө, анхны цувааг өөрчлөхгүй
let portion = numbers.slice(1, 4);
console.log(portion);
console.log(numbers);

let portion2 = numbers.slice(5, numbers.length);
console.log(portion2);
console.log(numbers);

// эхлэлийн индексийг болон хасагдах элементүүдийг зааж хасна оронд нь нэмж оруулах элементээ зааж өгнө

numbers.splice(2, 2);
console.log(numbers);


numbers.splice(1, 0, "nine", 'ten', 12);
console.log(numbers);

numbers.splice(6, 0, 4);
console.log(numbers);

numbers.splice(0, 3, 3);
console.log(numbers);

// multidimensional array олон хэмжээст  array
let arrayMulti = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log(arrayMulti);
console.log(arrayMulti[0]);
console.log(arrayMulti[1]);
console.log(arrayMulti[2]);

console.log(arrayMulti[0][4]);
console.log(arrayMulti[1][1]);


for (let i = 0; i < arrayMulti.length; i++) {
    console.log(arrayMulti[i]);
}

for (let i = 0; i < arrayMulti.length; i++) {
    for (let j = 0; j < arrayMulti[i].length; j++) {
        console.log(arrayMulti[i][j]);
    }
}

//exercise 1
let friut = ["apple", "banana", "kiwi"];
console.log(friut);
for (let i = 0; i < friuts.length; i++) {
    console.log(`This is ${friut[0]}`);
    console.log(`This is not  ${friut[1]}`);
    console.log(`That ${friut[2]} is sour`);
}

//exercise 2
let firstFruit = friut[0];
console.log(firstFruit);

let secondFruit = friut[1];
console.log(secondFruit);

let thirdFruit = friut[2];
console.log(thirdFruit);


//exercise 3
friut.splice(2,1, "grape");
console.log(friut);

//exercise4
friut.push("orange");
console.log(friut);

//exercise 5
let friutss = friut.shift();
console.log(friutss);
console.log(friut);

// exercise 7
let friut6 = friut.pop();
console.log(friut6);
console.log(friut);

// exercise 8
let moreFruits = ['grapefriut', 'dragoneyes', 'watermelon'];
console.log(moreFruits);
let combinedFruits = moreFruits.concat(friut);
console.log(combinedFruits);
console.log(friut);

// exercise 9 
let combinedFruits1 = ['melon', 'strawberry','blueberry','grapefriut', 'dragoneyes', 'watermelon'];
let chosenFriuts = combinedFruits1.slice(0,3);
console.log(chosenFriuts);
console.log(combinedFruits);

// exercise 10 

let arrayMultis = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
console.log(arrayMultis);
console.log(arrayMultis[0]);
console.log(arrayMultis[1]);
console.log(arrayMultis[2]);

// exercise 11
let element = arrayMultis[1][2];
console.log(element);

// exercise 13
friut.forEach(function(utga){
    console.log(utga);
});

// Ex1 
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
console.log(arrayOfNumbers);

let num = 0;
for(let arrayOfNumber of arrayOfNumbers){
    num += arrayOfNumber;
}
console.log(num);

//Ex 2
let max = 0 ; 
for (let arrayOfNumber of arrayOfNumbers){
    if (arrayOfNumber > max ){
        max = arrayOfNumber
    }
}
console.log(max);

// Ex 3 
let min = 2000; 
for (let arrayOfNumber of arrayOfNumbers){
    if (arrayOfNumber < min ){
        min = arrayOfNumber
    }
}
console.log(min);

// Ex 4 
arrayOfNumbers.unshift(1);
console.log(arrayOfNumbers);

// Ex 5 
arrayOfNumbers.push(1);
console.log(arrayOfNumbers);









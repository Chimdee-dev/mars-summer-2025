// let person1Name = "Chimdee";
// let person1LastName = "Nyamjav";
// let person1Age = 21;
// let person1Scores = [1,2,3];
// let person1IsMarried = false;
// let person1Address = "Ub";

//key: value
let person1 = {
    fristName: "Chimdee",
    lastName: "Nyavjav",
    age: 29,
    scores: [1, 2, 3],
    isMarried: false,
    address: {
        city: "Ulaanbaatar",
        district: "Sukhbaatar"
    },
    printFullName: function () {
        console.log(this.fristName + " " + this.lastName);

    }
}
console.log(person1);

console.log(person1.fristName);
console.log(person1.age);
console.log(person1.scores);

console.log(person1.address.city);
person1.printFullName();

let person2 = {
    fristname: "Byaraa",
    lastname: "Naraa"
}
console.log(person2);

let person3 = person2;

console.log(person2);
console.log(person3);

// person2.firstname = "Bold";
// console.log(person2);
// console.log(person3);


//spread operator
let person4 = {... person2};
person4.fristname = "Bold";
console.log("=======");
console.log(person2.fristname);
console.log(person4.fristname);

console.log(Object.keys(person1));
console.log(Object.values(person1));

let students = [
    {
        name: "Bayartsetseg",
        gender: "Female",
        favColor: 'Blue'
    },
    {
        name: "Chimdee",
        gender: "Female",
        favColor: 'Pink'
    }, 
    {
        name: "Enkhmandah",
        gender: "Female",
        favColor: 'White'
    },
    {
        name: "Ganzorig",
        gender: "Female",
        favColor: 'Black'
    },
];

console.log(students[0].name);

for (let student of students){
    console.log(`Name: ${student.name}\nGender: ${student.gender}\nFavorite color: ${student.favColor}`);
}

// Дотроо 5 ширхэг жимсний обжект агуулсан array үүсгэ
// object бүр дотроо fruitName, friutColor, friutTaste гэдэг key-нүүдтэй
// for loop ашиглан жимс бүрийн мэдээллийг хэвлэ

let fruits = [{
    fruitName: "Apricot",
    fruitColor: "Orange",
    fruitTaste: "Sweety"
},
{
    fruitName: "Apple",
    fruitColor: "Red",
    fruitTaste: "Sweet"
},
{
    fruitName: "Banana",
    fruitColor: "Yellow",
    fruitTaste: "Sweety"
},
{
    fruitName: "Melon",
    fruitColor: "Orange",
    fruitTaste: "Sweety"
},
{
    fruitName: "Berry",
    fruitColor: "blue",
    fruitTaste: "Sweety"
}

];
for ( let fruit of fruits){
    console.log(`Name: ${fruit.fruitName}\nColor:${fruit.fruitColor}\nTasty:${fruit.fruitTaste}`);
}

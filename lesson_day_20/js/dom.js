// Document Object Model
let h2 = document.getElementById("my-heading");
console.log(h2);

h2.textContent = "This is my heading";

let p = document.getElementsByClassName('my-p');
console.log(p);


p[0].textContent = "First paragraph";
p[1].textContent = "Second paragraph";

p[0].style.color = 'crimson';
p[1].style.backgroundColor = 'black';
p[1].style.color = 'white';


let box1 = document.getElementById('box');

let boxHeading = document.createElement('h1');
boxHeading.textContent = 'Box Heading';

box1.appendChild(boxHeading);

let boxP = document.createElement('p');
boxP.textContent = 'Box paragraph';
box1.appendChild(boxP);

let fruits = ['apple', 'orange', 'kiwi', 'banana', 'watermelon'];

let fruitImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
    "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
    "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg"
];
let myBtn = document.getElementById('my-btn');

myBtn.addEventListener("click", function () {
    for (let i = 0; i < fruits.length; i++) {
        let friutElement = document.createElement('h3');
        friutElement.textContent = fruits[i];
        friutElement.classList.add(fruits[i]);
        box1.appendChild(friutElement);
        // img tag үүсгэ
        // img tag-ийнхаа src дээр нь fruitImages-ийн i-ийг оруулна 
        // img өргөн 200px
        // box1 рүү img нэмнэ
        let img = document.createElement('img');
        img.src = fruitImages[i];
        // img.style.width = '200px';
        box1.appendChild(img);
    }
});

let box2 = document.getElementById("box-2");

function submit() {
    let myInput = document.getElementById('my-input');
    let p = document.createElement('p');
    p.textContent = myInput.value;
    box2.appendChild(p);
}
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
        gender: "Male",
        favColor: 'White'
    },
    {
        name: "Ganzorig",
        gender: "Female",
        favColor: 'Black'
    },
];

let container = document.getElementById("container");

for (let i = 0; i < students.length; i++) {

    let name = document.createElement('h1');
    let gender = document.createElement('h2');
    let favColor = document.createElement('i')
    name.textContent = students[i].name;
    gender.textContent = students[i].gender;
    favColor.textContent = students[i].favColor;

    let studentDiv = document.createElement('div');
    container.appendChild(studentDiv);
    studentDiv.style.border = "3px solid black";
    studentDiv.style.margin = ' 20px';
    studentDiv.style.padding = ' 0 20px 20px';
    studentDiv.style.backgroundColor = 'pink';
    studentDiv.style.width = '400px';
    studentDiv.style.borderRadius = '15px';

    studentDiv.appendChild(name);
    studentDiv.appendChild(gender);
    studentDiv.appendChild(favColor);

}

let numbers = [1, 2, 3, 4, 5, 56];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//ex 1
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let num = 0;
for (let negjtoo of arrayOfNumbers) {
    num += negjtoo
}
console.log(num);
//ex2
let maxNumber = 0;
for (let ihToo of arrayOfNumbers) {
    if (ihToo > maxNumber) {
        maxNumber = ihToo
    }
}
console.log(maxNumber);
//ex3
let minNumber = 3000;
for (let too of arrayOfNumbers) {
    if (too < minNumber) {
        minNumber = too
    }
}
console.log(minNumber);

//ex4 
// Ex 4 
arrayOfNumbers.unshift(15);
console.log(arrayOfNumbers);

// Ex 5 
arrayOfNumbers.push(55);
console.log(arrayOfNumbers);

let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

console.log(data.length);
let input = "Нүүрс";
let count = 0;
for (let i = 0; i < data.length; i++) {
    if (input.toLowerCase() == data[i].toLowerCase()) {
        count++;
    }
}
console.log(`${input} гэдэг үг ${count} орсон байна`);

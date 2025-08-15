let users = [
    {
        name: "Bataa",
        age: 28,
    },
    {
        name: "Saraa",
        age: 25
    },
    {
        name: "Bayaraa",
        age: 30
    }
];
// Name: Bataa, Age: 28
// Name: Saraa, Age: 25
// Name: Bayaraa, Age: 30

for (let i = 0; i<users.length; i++){
    console.log(`Name: ${users[i].name}, Age: ${users[i].age}`);
    
}
let users2 = [
    {
        name: "Boldoo",
        age: 28,
    },
    {
        name: "Tuya",
        age: 25
    },
    {
        name: "Navchaa",
        age: 30
    }
];
const getUserData = function(array){
    for (let i = 0; i<array.length; i++){
        console.log(`Name: ${array[i].name}, Age: ${users[i].age}`);
        
    }
}
getUserData(users);
getUserData(users2);

let numbers = [23,44,55,66,77];
let numbers2 = [33,44,534,776];
let toonuud = [ 223,443,444,666];
// Array dotorh too tus buriig hewleed 1 - eer nemegduulj hevleh arrayNumbers function bich

const arrayNumbers = function(array){
    for (let i = 0; i < array.length; i++){
        console.log(`${array[i]+1}`);
    }
}
arrayNumbers(numbers);
arrayNumbers(numbers2);
arrayNumbers(toonuud);

// findmax gdg nertei garaas 2 too avdag function bich . Ene function ni  ugugdsun 2 toonii ihiig ni olj hevledeg.
const findmax = function(a,b){
  if ( a > b ){
    console.log(a);
  } else { console.log(b);
  }
}
findmax(45,66);



// range gdg nertei garaas 2 too avdag function bich. Ugugdsun 2 toonii hoorond baih toonuudiig heveldeg.
const range = function(x,y){
    for (let i = x; i <= y; i++){
        console.log(i);
    }
}
range(1,4);

// // range2 gdg nertei garaas 2 too avdag function bich. Ugugdsun 2 toonii hoorond baih toonuudiig rangeArray gdg array ruu nemegddeg bolgood tuhain array iig hevlej haruul.

const range2 = function(x,y){
    let rangeArray = [];
    for (let i = x; i <= y; i++){
        rangeArray.push(i);
    }
    console.log(rangeArray);
    
}
range2(5,10);




// range3 : Өгөгдсөн 2 тооны хооронд байх тэгш тоог харуулах evenArray, songoig haruulah oddArray tus bur hevlej haruul 
const range3 = function(s,t){
    let evenArray = [];
    let oddArray = [];
    for (let i = s; i < t; i++){
        if (i % 2 == 0){
            evenArray.push(i);
        } else {
            oddArray.push(i);
        }
    }
    console.log(evenArray);
    console.log(oddArray);
}
range3(44,55);
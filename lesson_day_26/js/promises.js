

const readFilePromise = (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const content = "File content";
            console.log(content);
            resolve(content);
        }, 2000);
    })
}
const processedContentPromise = (content) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const processedContent = content.toUpperCase();
            console.log(processedContent);
            resolve(processedContent); 
        }, 1000);
    })
}
const saveFilePromise = (processedContent) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("File saved");
            resolve(true);
        }, 1500);
    } )
}
// readFilePromise()
//     .then(content => processedContentPromise(content))
//     .then(processed => saveFilePromise(processed))
//     .then(() => console.log("Successfully saved"))
//     .catch(error => console.error("Error:", error))



function boilWater(){
    return new Promise ((resolve, reject) => {
        console.log("Ус буцалгаж эхэллээ");
        setTimeout(() => {
            const kettleWorks = false;
            if ( kettleWorks){
                console.log("Ус буцаллаа");
                resolve("Буцалсан ус");    
            } else {
                reject("ус буцалгагч эвдэрсэн");
            }
        }, 2000);
    } ) 
}
function makeTea(water){
    return new Promise((resolve, reject) => {
        console.log("Цай хийгдэж байна"); 
        setTimeout(() => {
            resolve("Цай бэлэн боллло");
        }, 1000);
    })
}
// boilWater()
// .then(water => makeTea(water))
// .then(result => console.log(result))
// .catch(error => console.error(error));

// console.warn ("This is caution");
// console.info(' Customer signed it');
// console.debug("mean: Hi");
const currentBalance = 5000;
function checkBalance(amount){
    return new Promise ((resolve, reject) => {
        console.log("Данс шалгаж байна");
        setTimeout(() => {
            if ( currentBalance >= amount){
                resolve("Шалгалт амжилттай. Шилжүүллээ");
            } else {
                reject("Үлдэгдэл хүрэлцэхгүй байна");
            }
        }, 1500);
    })
}
function tranferMoney(amount){
    return new Promise((resolve, reject) => {
        console.log(`${amount}₮ шилжүүлж байна`);
        setTimeout(() => {
            resolve('Гүйлгээ амжилттай');
            
        }, 2000);
        
    })
}
function sendInfo(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Баталгаажуулалт илгээгдлээ');
        }, 1000);
    })
}

let amount = 3000;
checkBalance(amount)
.then( msg => {
    console.log(msg);
    return tranferMoney(amount);
})
.then(result => { console.log(result);
    let newBalance = currentBalance - amount;
    console.log(`Дансны үлдэгдэл: ${newBalance}₮`);
    return sendInfo();
})
.then(info => {
    console.log(info);
    
})
.catch(error=> console.error(error)
)



function greet(name, callback) {
    console.log(`Hello, ${name},`);
    callback(name);
}
function sayBye(name) {
    console.log(`Good bye, ${name}`);
}
greet("Chimdee", sayBye);

function greet2(name) {
    console.log(`Nice to meet you, ${name}`);
}
greet("Chimdees", greet2);

let container = document.getElementById("container");

function orderFood(foodName, callback) {
    let message1 = document.createElement('p');
    message1.textContent = `Ta ${foodName} захиалаа. Түр хүлээнэ үү.`;
    container.appendChild(message1);

    setTimeout(() => {
        console.log(`${foodName} бэлэн боллоо.`);
        let message2 = document.createElement("p");
        message2.textContent = `${foodName} бэлэн боллоо.`;
        container.appendChild(message2);
        callback();
    }, 3000);
}
function notityCustomer() {
    let lastMessage = document.createElement("p");
    lastMessage.innerHTML =
        `<i>Та касснаас ирж аваарай </i>`;
    container.appendChild(lastMessage);
}
orderFood("Buuz", notityCustomer);

// Daalgawar 

//processCustomerData(customerName, email, callback) gsn 3 function zohiono uu 
function processCustomerData(customerName, email, callback) {
    console.log(`Hello ${customerName}`);
    // ene function ni 2 second iin daraa daraah nohtsoliig shalgana 
    // Herev customerName bolon email 2laa hooson bish callback function status:"success', message: " Hereglegchiin medeelel hadaglagdlaa" gsn object hamt duudna
    // herev ali neg hooson bwal callback function status: "error" message: " Medeelel dutuu baina" gene
    setTimeout(() => {
        if (customerName && email) {
            callback({ status: "success", message: " Хэрэглэгчийн мэдээлэл хадаглагдлаа" });
        } else {
            callback({ status: "error", message: "Мэдээлэл дутуу байна" });
        }
    }, 2000);

    // handleDateProcessingResult(result) gsn callback function zohiono uu Ene function ni result object status aas hamarch console.log bolon container dotor p tag dotor hargalzah medegdliig haruulna
    // Uur uur medeelelteigeer processCustomerData function iig duudaj ur dun shalgana uu 
}
function handleDateProcessingResult(result) {
    let messageEL = document.createElement("p")
    if (result.status === "success") {
        messageEL.textContent = result.message;
        messageEL.style.color = "green";
    } else {
        messageEL.textContent = result.message;
        messageEL.style.color = "red";
    }
    container.appendChild(messageEL);
}
processCustomerData("Chimdee", "Chimdee@gmail.com", handleDateProcessingResult);
processCustomerData("", "jimmy@gmai.com", handleDateProcessingResult);

// daalgawar 
// startCounter (limit, callback) gsn function zohiono 
// Ene function ni 0 ees limit hurtel toolno Toolohdoo 0.5 secondiin zaitai baih ba too buriig console.log bolon container dotor span tag dotor haruulna 
// Tooloh process duussanii daraa callback function duudna.
// countFinished()  gesen callback function zohiono uu ene function ni console.log bolon container dotor b tag dotor " tooloh ajil duuslaa!" gej hevlene
// startCounter function limit ni 5, countFinished 
let countContainer = document.getElementById("count-container");
function startCounter(limit, callback) {
    let count = 0;
    let intervalId = setInterval(() => {
        if (count <= limit) {
            console.log(`Counting: ${count}`);
            let countEl = document.createElement("div");
            countEl.textContent = `Counting: ${count}`;
            countContainer.appendChild(countEl);
            count++;
        } else {
            clearInterval(intervalId);
        callback();
        }
    }, 500);

}
function countFinished() {
    let finishEl = document.createElement("b");
    finishEl.textContent = "Finished counting";
    countContainer.appendChild(finishEl);
}
startCounter(5, countFinished);
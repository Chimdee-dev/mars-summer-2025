console.log('a');
console.log('a');
console.log('a');
// asyncron gedeg uildel 

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(`i - ${i}, j - ${j}`);

    }
}
console.log("final");

// async function fryEgg() {
//     return "FryEgg";
// }
// fryEgg().then((res) => console.log(res));

async function fryEgg2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // data tataj avch baigaa gej tusuulnu
            resolve("done");
        }, 1000);
    });
    let result = await promise;
    console.log(result);
}
console.log("a");
console.log("b");
console.log("c");
fryEgg2();
console.log('final');


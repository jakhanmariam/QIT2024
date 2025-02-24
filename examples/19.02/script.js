async function myFunction() {
    return "Amjilt";
}

myFunction().then(console.log);


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function orderFood() {
    console.log("tapsyrys qabyldandy");
    await wait(1000);
}

async function prepareFood() {
    console.log("tamaq daiyndalyp jatyr");
    await wait(3000);
}

async function deliverFood() {
    console.log("tamaq jetkizilude");
    await wait(2000);
}

async function processOrder() {
    await orderFood();
    await prepareFood();
    await deliverFood();
    console.log("jetkizildi");
}

processOrder();

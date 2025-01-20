const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let operators = ['+', '-', '%', '*', '/'];


// inputtagy manderdy saktaidy
let output = "";


function calculate(btnValue) {
    if(btnValue == "=" && output !== "") {
        output = eval(output)
    } else if (btnValue == "C") {
        output = ""
    } else if (btnValue == "+/-") {
        output = eval(output) * -1
    } else if (btnValue == "DEL") {
        output = output.toString().slice(0, -1)
    } else {
        if(operators.includes(btnValue) && operators.includes(output[output.length -1])) {
            output = output.slice(0, -1) + btnValue
        } else {
            output += btnValue;
        }
    }
    display.value = output
}


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        calculate(e.target.dataset.value)
    })
});
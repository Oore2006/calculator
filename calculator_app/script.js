// JavaScript code in script.js

// Function to handle button clicks
// function press(value) {
//     // Get the display element
//     var display = document.getElementById('display');

//     // Handle different button clicks
//     switch (value) {
//         case '=':
//             // Evaluate the expression and display the result
//             display.value = eval(display.value);
//             break;
//         case 'C':
//             // Clear the display
//             display.value = '';
//             break;
//         default:
//             // Append the clicked button value to the display
//             display.value += value;
//             break;
//     }
// }
function clearResult() {
    document.getElementById('result').value = '0';
}

function changeSign() {
    var result = document.getElementById('result');
    result.value = -parseFloat(result.value);
}

function percentage() {
    var result = document.getElementById('result');
    result.value = parseFloat(result.value) / 100;
}

function append(value) {
    var result = document.getElementById('result');
    if (result.value === '0' && value !== ',') {
        result.value = value;
    } else {
        result.value += value;
    }
}

function removeLastChar() {
    var result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculate() {
    var result = document.getElementById('result');
    result.value = eval(result.value);
}


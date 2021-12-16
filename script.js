let displayValue = ''
let a = '';
let b = '';
let operator = '';
const screen = document.getElementById('screen');

function adder (a, b) {
    return parseFloat(a, 10) + parseFloat(b, 10);
}

function subtracter (a, b) {
    return parseFloat(a, 10) - parseFloat(b, 10);
}

function multiplyer (a, b) {
    return parseFloat(a, 10) * parseFloat(b, 10);
}

function divider (a, b) {
    return parseFloat(a, 10) / parseFloat(b, 10);
}

function cleanUp () {

}

function operate (num1, num2, operator) {
    let returnNum = ''
    switch (operator) {
        case '+': 
            returnNum = (adder(num1, num2));
            b = ''
            operator = ''
            displayValue = returnNum
            screen.innerText = returnNum
            return returnNum;
        case '-': 
            returnNum = (subtracter(a, b));
            b = ''
            operator = ''
            displayValue = returnNum
            screen.innerText = returnNum
            return returnNum;
        case '*': 
            returnNum = (multiplyer(a, b));
            b = ''
            operator = ''
            displayValue = returnNum
            screen.innerText = returnNum
            return returnNum;
        case '/': 
            returnNum = (divider(a, b));
            b = ''
            operator = ''
            displayValue = returnNum
            screen.innerText = returnNum
            return returnNum;
    }
}

const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    displayValue = ''
    a = ''
    b = ''
    operator = ''
    screen.innerText = ''
})

const del = document.getElementById('del')
del.addEventListener('click', function() {
    displayValue = displayValue.substring(0, displayValue.length-1)
    screen.innerText = displayValue
})

const decimal = document.getElementById('decimal')
decimal.addEventListener('click', function() {
    if (operator == '') {
        if (a.indexOf('.') == -1) {
            a += '.';
            displayValue += '.'
            screen.innerText += '.'
        }
    } else {
        if (b.indexOf('.') == -1) {
            b += '.';
            displayValue += '.'
            screen.innerText += '.'
        }
    } 
})


const one = document.getElementById('1')
one.addEventListener('click', function() {
    if (operator == '') {
        a += '1';
    } else {
        b += '1';
    }
    displayValue += '1'
    screen.innerText += '1'
})

const two = document.getElementById('2')
two.addEventListener('click', function() {
    if (operator == '') {
        a += '2';
    } else {
        b += '2';
    }
    displayValue += '2'
    screen.innerText += '2'
})

const three = document.getElementById('3')
three.addEventListener('click', function() {
    if (operator == '') {
        a += '3';
    } else {
        b += '3';
    }
    displayValue += '3'
    screen.innerText += '3'
})

const four = document.getElementById('4')
four.addEventListener('click', function() {
    if (operator == '') {
        a += '4';
    } else {
        b += '4';
    }
    displayValue += '4'
    screen.innerText += '4'
})

const five = document.getElementById('5')
five.addEventListener('click', function() {
    if (operator == '') {
        a += '5';
    } else {
        b += '5';
    }
    displayValue += '5'
    screen.innerText += '5'
})

const six = document.getElementById('6')
six.addEventListener('click', function() {
    if (operator == '') {
        a += '6';
    } else {
        b += '6';
    }
    displayValue += '6'
    screen.innerText += '6'
})

const seven = document.getElementById('7')
seven.addEventListener('click', function() {
    if (operator == '') {
        a += '7';
    } else {
        b += '7';
    }
    displayValue += '7'
    screen.innerText += '7'
})

const eight = document.getElementById('8')
eight.addEventListener('click', function() {
    if (operator == '') {
        a += '8'
    } else {
        b += '8'
    }
    displayValue += '8'
    screen.innerText += '8'
})

const nine = document.getElementById('9')
nine.addEventListener('click', function() {
    if (operator == '') {
        a += '9';
    } else {
        b += '9';
    }
    displayValue += '9'
    screen.innerText += '9'
})

const zero = document.getElementById('0')
zero.addEventListener('click', function() {
    if (operator == '') {
        a += '0';
    } else {
        b += '0';
    }
    displayValue += '0'
    screen.innerText += '0'
})


const add = document.getElementById('add') 
add.addEventListener('click', function() {
    if (b == '' && operator.length == 0) {
        operator = '+'
        displayValue += '+'
        screen.innerText += '+'
    } else if (operator.length == 1 && b !== '') {
        a = operate(a, b, operator)
        operator = '+'
        displayValue += '+'
        screen.innerText += '+'
    }
})

const sub = document.getElementById('sub') 
sub.addEventListener('click', function() {
    if (b == '' && operator.length == 0) {
        operator = '-'
        displayValue += '-'
        screen.innerText += '-'
    } else if (operator.length == 1 && b !== '') {
        a = operate(a, b, operator)
        operator = '-'
        displayValue += '-'
        screen.innerText += '-'
    }
})

const mult = document.getElementById('mult') 
mult.addEventListener('click', function() {
    if (b == '' && operator.length == 0) {
        operator = '*'
        displayValue += '*'
        screen.innerText += '*'
    } else if (operator.length == 1 && b !== '') {
        a = operate(a, b, operator)
        operator = '*'
        displayValue += '*'
        screen.innerText += '*'
    }
})

const divide = document.getElementById('divide') 
divide.addEventListener('click', function() {
    if (b == '' && operator.length == 0) {
        operator = '/'
        displayValue += '/'
        screen.innerText += '/'
    } else if (operator.length == 1 && b !== '') {
        a = operate(a, b, operator)
        operator = '/'
        displayValue += '/'
        screen.innerText += '/'
    }
})

const equals = document.getElementById('equals')
equals.addEventListener('click', function() {
    a = operate(a,b, operator)
    b = ''
    operator = ''
    displayValue = a
    screen.innerText = a
})
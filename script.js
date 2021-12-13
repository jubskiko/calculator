function add (a, b) {
    return a + b;
}
// console.log(add(1, 2));

function subtract (a, b) {
    return a - b;
}
// console.log(subtract(1, 2));
// console.log(subtract(2, 1));

function multiply (a, b) {
    return a * b;
}
// console.log(multiply(1,3))
// console.log(multiply(1,0))

function divide (a, b) {
    return a / b;
}
// console.log(divide(1,2))
// console.log(divide(2,1))
// console.log(divide(0,1))
// console.log(divide(1,0))

function operate (a, b, operator) {
    switch (operator) {
        case '+': 
            return (add(a, b));
        case '-': 
            return (subtract(a, b));
        case '*': 
            return (multiply(a, b));
        case '/': 
            return (divide(a, b));
    }
}
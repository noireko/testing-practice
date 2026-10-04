module.exports = capitalize, reverseString, calculator;

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function reverseString(word) {
    return word.split("").reverse().join("");
}

const calculator = {
    add: function suma(a, b) {
        return a + b;
    },
    subtract: function resta(a, b) {
        return a - b;
    },
    divide: function dividir(a, b) {
        return a / b;
    },
    multiply: function multi(a, b) {
        return a * b;
    }
}

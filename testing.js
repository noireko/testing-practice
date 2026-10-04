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

function caesarCipher(texto, clave) {
    const abecedario = "abcdefghijklmnñopqrstuvwxyz".split("");
    const n = abecedario.length;

    return texto
        .split("")
        .map((letra) => {
            const i = abecedario.indexOf(letra.toLowerCase());
            if (i === -1) return letra;

            const nueva = abecedario[(((i + clave) % n) + n) % n];
            const eraMayuscula = letra !== letra.toLowerCase();
            return eraMayuscula ? nueva.toUpperCase() : nueva;
        })
        .join("");
}

function analyzeArray(array) {
    const sumaArray = array.reduce((total, num) => total + num, 0);
    return {
        average: sumaArray / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
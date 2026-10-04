
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./testing.js"

test("si se capitaliza la primer letra en la palabra", () => {
    expect(capitalize("hola")).toBe("Hola");
});

test("verificar si se da vuelta la palabra", () => {
    expect(reverseString("Hola")).toBe("aloH");
});

test("decodificar mensaje caesar", () => {
    expect(caesarCipher("Hola", 3)).toBe("krñd")
});

test("calcular numeros", () => {
    expect(calculator.add(1, 3)).toBe(4);
    expect(calculator.subtract(3, 1)).toBe(2);
    expect(calculator.divide(3, 1)).toBe(3);
    expect(calculator.multiply(1, 3)).toBe(3);
});

test("analizar array de numeros", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
})
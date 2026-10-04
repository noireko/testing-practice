
import { capitalize, reverseString, calculator } from "./testing.js"

test("si se capitaliza la primer letra en la palabra", () => {
    expect(capitalize("hola")).toBe("Hola");
});

test("verificar si se da vuelta la palabra", () => {
    expect(reverseString("Hola")).toBe("aloH");
});
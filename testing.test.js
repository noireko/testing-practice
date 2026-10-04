const capitalize = require("./testing.js");
const reverseString = require("./testing.js");

test("si se capitaliza la primer letra en la palabra", () => {
    expect(capitalize("hola")).toBe("Hola");
});

test("verificar si se da vuelta la palabra", () => {
    expect(reverseString("Hola")).toBe("aloH");
});
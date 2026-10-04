const capitalize = require("./testing.js");

test("si se capitaliza la primer letra en la palabra", () => {
    expect(capitalize("hola")).toBe("Hola");
});
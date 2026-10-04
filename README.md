# testing-practice

A small project for practicing **unit testing in JavaScript** with [Jest](https://jestjs.io/). It includes a handful of utility functions and a test suite covering each one.

## Functions

| Function | Description |
| --- | --- |
| `capitalize(word)` | Uppercases the first letter and lowercases the rest |
| `reverseString(word)` | Returns the string reversed |
| `calculator` | Object with `add`, `subtract`, `divide` and `multiply` methods |
| `caesarCipher(text, key)` | Applies a Caesar cipher using the 27-letter Spanish alphabet (including `ñ`) |
| `analyzeArray(array)` | Returns the `average`, `min`, `max` and `length` of an array of numbers |

### Examples

```js
import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testing.js";

capitalize("hOLA");               // "Hola"
reverseString("Hola");            // "aloH"

calculator.add(1, 3);             // 4
calculator.divide(6, 3);          // 2

caesarCipher("Hola", 3);          // "Krñd"
caesarCipher("krñd", -3);         // "hola"  (negative keys decrypt)

analyzeArray([1, 8, 3, 4, 2, 6]);
// { average: 4, min: 1, max: 8, length: 6 }
```

### Notes on `caesarCipher`

- Uses the Spanish alphabet (`abcdefghijklmnñopqrstuvwxyz`), so shifts wrap around after `z`.
- Uppercase and lowercase letters are preserved.
- Characters outside the alphabet (spaces, numbers, punctuation) are left unchanged.
- Negative keys shift backwards, which allows decryption.

## Tech stack

- JavaScript (ES modules, transpiled with Babel)
- [Jest](https://jestjs.io/) for testing
- [Babel](https://babeljs.io/) (`@babel/preset-env`)

## Getting started

```bash
git clone https://github.com/noireko/testing-practice.git
cd testing-practice
npm install
```

## Running the tests

```bash
npm test               # run all tests once
npm run test:watch     # re-run tests on file changes
npm run test:coverage  # run tests and show a coverage report
```

## Project structure

```
.
├── testing.js         # functions under test
├── testing.test.js    # Jest test suite
├── babel.config.js    # Babel configuration
└── package.json
```

## License

ISC

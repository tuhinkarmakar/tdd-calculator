# tdd-calculator

## Introduction
The String Calculator is a simple utility that performs basic arithmetic operations on strings of numbers. This project is designed to demonstrate the use of TDD (Test-Driven Development) in building a robust and reliable calculator.

## Features
- Add numbers in a string
- Handle an unknown amount of numbers
- Support for new lines between numbers
- Support for different delimiters

## Usage
To use the String Calculator, simply call the `add` method with a string of numbers separated by commas or new lines.

```typescript
import { add } from './calc.ts';

const result = add('1,2,3');
console.log(result); // Outputs: 6
```

## Running Tests
To run the tests for the String Calculator, use the following command:

```bash
npm test
```

## License
This project is licensed under the MIT License.

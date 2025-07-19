/*
  - used to make two incompatible interfaces work together
  - used to make existing classes work with others without modifying their source code


  Here we have an old calculator class that was written some time ago. Now we created a new calculator
  but it has a different interface. So we need to create an adapter CalculatorAdapter that will make the
  old calculator work with the new one. THe CalculatorAdapter will have the same interface as the old
  calculator but it will call the new calculator methods.
*/

class OldCalculator {
  operation(num1, num2, op) {
    if (op === 'multiplication') return num1 * num2;
    if (op === 'division') return num1 / num2;
    if (op === 'addition') return num1 + num2;
    if (op === 'subtraction') return num1 - num2;
  }
}

class NewCalculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

class CalculatorAdapter {
  constructor() {
    this.calc = new NewCalculator();
  }
  operation = (num1, num2, op) => {
    if (op === 'multiplication') return this.calc.multiply(num1, num2);
    if (op === 'division') return this.calc.divide(num1, num2);
    if (op === 'addition') return this.calc.add(num1, num2);
    if (op === 'subtraction') return this.calc.subtract(num1, num2);
  }
}

const adaptedCalc = new CalculatorAdapter();
console.log(adaptedCalc.operation(10, 20, 'multiplication'));
console.log(adaptedCalc.operation(10, 20, 'division'));
console.log(adaptedCalc.operation(10, 20, 'addition'));
console.log(adaptedCalc.operation(10, 20, 'subtraction'));
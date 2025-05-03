class Calculator {
    _validator(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.log('Помилка: введіть числові значення!');            
        }
    }

    add(a,b) {
        this._validator(a, b);
        return a + b;
    }

    subtract(a,b) {
        this._validator(a, b);
        return a - b;
    }

    multiply(a, b) {
        this._validator(a, b);
        return a * b;
    }

    divide(a, b) {
        this._validator(a, b);
        if (b === 0) {
            console.log('Помилка: на 0 ділити не можна!');
            return;
        }
        return a / b;
    }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8

console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4
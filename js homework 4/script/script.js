function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const result = sumNumbers(1, 2, 34, 4, 5);
console.log(`Сума чисел: ${result}`);
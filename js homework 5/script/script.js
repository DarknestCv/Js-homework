// ! Exercise 1

// * незнаю як це зробити

// ! Exercise 2
function isloprot(num) {
    if (num < 2) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function loprot(start, end) {
    for (let number = start; number <= end; number++) {
        if (isloprot(number)) {
            console.log(number); 
        }
    }
}

const start = 4;
const end = 293;

loprot(start, end);
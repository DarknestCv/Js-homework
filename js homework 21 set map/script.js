// ! 1

arr = [1,23,6,23,23,5423,23,3,5,5,5,5,2,3,54,1,1,3,4]
const f = (mas) =>{
    let s  = new Set(mas)
    newar = [s]
    return console.log(newar)
}
f(arr)


! 2

const f2 = (...numbers) => {
    numbers.sort((a, b) => a - b);
    let m = new Map();
    for (let i = 0; i < numbers.length; i++) {
        m.set(numbers[i], numbers[i + 1] || 'Ilyha kaban');
    }
    return console.log(m);
};

f2(1, 265, 2, 34, 4263, 3125, 34, 6, 436, 2, 356, 3);

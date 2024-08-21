// ! 1 Exercise
function pod(a){
    const sum = a
    const stav = 5
    const nalog = a / 100 * stav
    console.log(nalog + ' ' + 'Платі налогии');
    return
}
pod(25000)
pod(750000)
pod(10000)

// ! 2 Exercise
function parn(a){
    return a % 2 === 0
}
console.log(parn(2));
console.log(parn(7));
console.log(parn(57));
console.log(parn(58));

// ! 3 Exercise 
function poriv(a, b) {
    if(a > b){
        console.log(a + '>' + b);
    } else{
        console.log(a + '<' + b);
    }
    return
}
poriv(50, 20)
poriv(40, 160)

// ! 4 Exercise
function prav(a) {
    if(a === 'admin'){
        return 'Welcome admin. Вам надано повний доступ для розробки - коректування додатку'
    } else if(a === 'user'){
        return 'Welcome user. Ви можете взаємодіїти з додатком використовуючи його функціонал'
    } else if(a === 'guest'){
        return 'Welcome guest. Нажаль ви можете тільки переглядати додаток без змоги взаємодіїти з ним, для взаємодії з додатком пройдіть реєстрацію'
    }
    return
}
console.log(prav('admin'));
console.log(prav('user'));
console.log(prav('guest'));


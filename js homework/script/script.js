// ! 1exercise
// const age = +prompt('Enter your age')
// if(age <= 0){
//     alert('Enter your true age please!')
// }else if(age > 0 && age <= 12){
//     alert('You small kid')
// }else if(age > 12 && age <=18){
//     alert('You teenager')
// }else if(age > 18 && age <=60){
//     alert('You are an adult')
// }else if(age > 60){
//     alert('Get out of here, old man')
// }else{
//     alert('Input error')
// }
// ! 2 exercise
// const num = +prompt('Введи число від 1 до 9 бро')

// let specialSymbols = {
//     1: '!',
//     2: '@',
//     3: '#',
//     4: '$',
//     5: '%',
//     6: '^',
//     7: '&',
//     8: '*',
//     9: '('
// };

// if(num > 9){
//     alert('Введи число від 1 до 9 бРООО!!')
// }else if(num === 1){
//     alert('Твій знак' + ' ' + specialSymbols[1])
// }else if(num === 2){
//     alert('Твій знак' + ' ' + specialSymbols[2])
// }else if(num === 3){
//     alert('Твій знак' + ' ' + specialSymbols[3])
// }else if(num === 4){
//     alert('Твій знак' + ' ' + specialSymbols[4])
// }else if(num === 5){
//     alert('Твій знак' + ' ' + specialSymbols[5])
// }else if(num === 6){
//     alert('Твій знак' + ' ' + specialSymbols[6])
// }else if(num === 7){
//     alert('Твій знак' + ' ' + specialSymbols[7])
// }else if(num === 8){
//     alert('Твій знак' + ' ' + specialSymbols[8])
// }else if(num === 9){
//     alert('Твій знак' + ' ' + specialSymbols[9])
// }
// ! 3Exercise
// let purchaseAmount = prompt("Введіть суму покупки:");

// if ( purchaseAmount <= 0) {
//     alert("Будь ласка, введіть дійсну суму покупки.");
// } else {
//     if (purchaseAmount >= 200 && purchaseAmount < 300) {
//         discount = 0.03; 
//     } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//         discount = 0.05; 
//     } else if (purchaseAmount >= 500) {
//         discount = 0.07; 
//     }

//     let discountedAmount = purchaseAmount - (purchaseAmount * discount);

//     alert("Сума до оплати зі знижкою: " + discountedAmount.toFixed(2) + " грн.");
// }
// ! 4Exercise

// let year = prompt("Введіть рік:");

// if (year <= 0) {
//     alert("Будь ласка, введіть дійсний рік.");
// } else {

//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         alert(year + " рік є високосним.");
//     } else {
//         alert(year + " рік не є високосним.");
//     }
// }
// ! 5Exercise
// ?НЕ ПОЛУЧИЛОСЬ
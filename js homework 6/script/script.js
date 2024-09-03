// ! Exercise 1
// function niceJob(arr) {
//     let result = new Array();
//     let index = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result[index] = arr[i];
//             index++;
//         }
//     }

//     return result;
// }

// const numbers = [-10, 15, -3, 8, 0, -1, 5, -10, 50, -95, 25];
// const positiveNumbers = niceJob(numbers);

// console.log(positiveNumbers);

// ! Exercise 2
// function MaxAndMinNumber(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return { min: min, max: max };
// }

// const numbers = [5, 9, 16, 29, 9, 1, 233, 5];
// const result = MaxAndMinNumber(numbers);

// console.log(result)

// ! Exercise 3
// function dablNumber(arr) {
//     let LikersOpium = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;
        
//         for (let j = 0; j < LikersOpium.length; j++) {
//             if (arr[i] === LikersOpium[j]) {
//                 isDuplicate = true;
//                 break;
//             }
//         }
        
//         if (!isDuplicate) {
//             LikersOpium[LikersOpium.length] = arr[i];
//         }
//     }
    
//     return LikersOpium;
// }

// const numbers = [1, 2, 2, 3, 4, 4, 5, 3];
// const uniqueNumbers = dablNumber(numbers);

// console.log(uniqueNumbers);

// ! Exercise 4
-
// ! Ex 1
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// const sum = sumArray(numbers);
// console.log(sum);

// ! Ex 2

// function higjNum(arr) {
//     let maxNum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }

// const numbers = [1, 2, 3, 4, 5, 55, 67, 22, 33, 56];
// const maxNumber = higjNum(numbers);

// console.log('Найвища сума в масиві: ' + maxNumber);

// ! Ex 3

// function averageArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// const numbers = [1, 2, 3, 4, 5, 55, 67, 22, 33, 56];
// const average = averageArray(numbers);

// console.log('Середнє арифметичне: ' + average);

// ! Ex 4

// function reverseArray(arr) {
//     return arr.reverse();
// }

// const array = [1, 2, 3, 4, 5];
// const reversedArray = reverseArray(array);
// console.log(reversedArray); 

// ! Ex 5

// function numberslol(arr) {
//     let koil = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             koil++;
//         }
//     }
//     return koil;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenCount = numberslol(array);
// console.log('Кількість парних чисел:' + ' ' + evenCount); 

// ! Ex 6

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// const array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
// const uniqueArray = removeDuplicates(array);
// console.log(uniqueArray); 

// ! Ex 7
// function findFirstOccurrence(arr, element) {
//     return arr.indexOf(element);
// }

// const array = [5, 3, 7, 1, 3, 9, 7];
// const element = 7;
// const firstIndex = findFirstOccurrence(array, element);
// console.log(firstIndex); 

// ! Ex 8

// function sumEvenIndices(arr) {
//     let sum = 0; 

//     for (let i = 0; i < arr.length; i += 2) {
//         sum += arr[i]; 
//     }
//     return sum; 
// }

// const array = [1, 2, 3, 4, 5];
// const result = sumEvenIndices(array);
// console.log(result); 

// ! Ex 9 

// function convertStringsToNumbers(arr) {
//     return arr.map(Number); 
// }
// const stringArray = ["1", "2", "3", "4", "5"];
// const numberArray = convertStringsToNumbers(stringArray);
// console.log(numberArray);

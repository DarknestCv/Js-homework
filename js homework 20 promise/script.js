// ! 1

// const ilyha = (callback) =>{
//     return new Promise(callback)
// }

// ilyha((resolve) => {console.log('ilyha krutoy'), resolve()})

// ! 2
// const ilyha = (callback, time) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             callback();
//             resolve()
//         }, time)
//     })
// }

// ilyha(() => {
//     console.log('done')
// }, 3000)
// .then(() => {
//     console.log('Promise завершено')
// })

// ! 3
// const ilyhaprom = (callback) =>{
//     return new Promise ((resolve, reject) => {
//         const result = callback();

//         if(result > 1) {
//             console.log('Processor overload')
//             reject()
//         }else{
//             console.log(result)
//             console.log('Task done')
//             resolve()
//         }
//     }
// )
// }

// ilyhaprom(() =>{
//     return Math.floor(Math.random() * 2) + 1
// })
// .then(() =>{
//     console.log('Promise done')
// })
// .catch(() =>{
//     console.log('Promise failed')
// })

// ! 4
// const ilyhaprom = (callback) =>{
//     return new Promise ((resolve, reject) => {
//         const result = callback();

//         if(result > 1) {
//             console.log(result)
//             console.log('Processor overload')
//             reject()
//         }else{
//             console.log(result)
//             console.log('Task done')
//             resolve()
//         }
//     }
// )
// }

// const runTask = async () => {
//     try {
//         await ilyhaprom(() => {
//             return Math.floor(Math.random() * 2) + 1;
//         });
//         console.log('Promise done');
//     } catch {
//         console.log('Promise failed');
//     }
// }

// runTask()
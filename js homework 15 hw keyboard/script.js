const p = document.querySelector('.p')
const inpt = document.querySelector('.inpt')
const div = document.querySelector('.div')

document.addEventListener('keydown', (event) =>{
    if (event.key === 'Tab') {
        event.preventDefault()
        inpt.focus()
    }
})


inpt.addEventListener('input', (event) =>{
    if(inpt.value === word[indexWord]){
        indexWord += 1
    }
})





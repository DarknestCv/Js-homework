
const inpt = document.querySelector('.inpt')
const div = document.querySelector('.wrong')
let i = 0
const word = 'banana'
const span = document.querySelectorAll('span')
let TabI = 0

document.addEventListener('keydown', (event) =>{
    if (event.key === 'Tab' && TabI === 0) {
        event.preventDefault()
        inpt.focus()
        TabI++
    }else if(event.key === 'Tab' && TabI === 1){
        event.preventDefault()
        inpt.blur()
        TabI -= 1
    }

})


inpt.addEventListener('input', (e) =>{
    if(span[i].textContent === inpt.value[i]){
        span[i].style.color = 'green'
        i++
    }
})

inpt.addEventListener('keydown', (e) =>{
     if(e.code !== 'Backspace' && e.key !== span[i].textContent) {
        div.textContent = Number(div.textContent) + 1
    }
})

inpt.addEventListener('input', () =>{
    if(inpt.value === 'banana'){
        inpt.style.display = 'none'
    }
})






const men = document.querySelector(".menu")

document.addEventListener("contextmenu", (event) =>{
    event.preventDefault()
    men.style.display = 'inline-block'
    men.style.left = `${event.pageX}px`
    men.style.top = `${event.pageY}px`
})

document.addEventListener("click", (event) =>{
    if(event.target.tagName !== "DIV"){
        men.style.display = 'none'
    }

})

const items = document.querySelectorAll('.item')
items.forEach(i =>{
    i.addEventListener('click', (event) => {
        const color = event.target.getAttribute('data-color')
        document.body.style.backgroundColor = color
        men.style.display = 'none'
    })
})





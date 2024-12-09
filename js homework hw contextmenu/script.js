const contMenu = document.getElementById('menu')

document.addEventListener("contextmenu", (event) =>{
    event.preventDefault()
    contMenu.style.display = 'block'
    contMenu.style.left = `${event.pageX}px`
    contMenu.style.top = `${event.pageY}px`
})

document.addEventListener('click', () =>{
    contMenu.style.display = 'none'
})

const ItemMen = document.querySelectorAll('.item')

ItemMen.forEach(item =>{
    item.addEventListener('click', (event) =>{
        const color = event.currentTarget.d
    })
})


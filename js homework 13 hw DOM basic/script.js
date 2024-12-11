// ! 1
// function f1 (value, text, name) {
//     for (let index = 0; index < value; index++) {
//         const el = document.createElement(name)  
//         el.textContent = text
//         document.body.appendChild(el);
//         console.log('GOod')
//     }
// }

// f1(3,"text", "div")

// ! 2
// const imgBank =[
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpeg'
// ]

// let i = 0;

// const bckch =() =>{
//     document.body.style.backgroundImage = `url(${imgBank[i]})`;
//         i = (i + 1) %  imgBank.length
// }

// setInterval(bckch, 3000)
// bckch()

// ! 3
// let el = document.createElement('div')
// el.textContent = 0

// document.body.appendChild(el)

// let count = 0

// function uptco(){
//     count++
//     el.textContent = count;
// }

// setInterval(uptco, 1000)

// ! 4

function help () {
    console.log('To summon deleteFunction enter the - "om()"');
}

function deleteEl(){
    const elements = document.getElementsByTagName('*')

    if(elements.length === 0){
        console.log("no items");
        return
    }
        const random = Math.floor(Math.random() * elements.length)
    
        const randomEl = elements[random];
    
        randomEl.remove()
        console.log('successfully');
}

function om(){
    console.log('You order deleteFunction say a GoodBye your html elements');
    
    setInterval(deleteEl, 1000)
}



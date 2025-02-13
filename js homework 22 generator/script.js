// ! 1
// function daysUntilNewYear() {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const newYearDate = new Date(currentYear + 1, 0, 1); 
//     const timeDifference = newYearDate - today;
//     const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
//     document.getElementById("newyear").textContent = daysLeft;
// }

// daysUntilNewYear();

// ! 2
function* generateRGBColors() {
    while (true) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        yield `rgb(${r}, ${g}, ${b})`;
    }
}

const colorGenerator = generateRGBColors();

document.getElementById('changeColorBtn').addEventListener('click', () => {
    const newColor = colorGenerator.next().value;

    document.body.style.backgroundColor = newColor;
});

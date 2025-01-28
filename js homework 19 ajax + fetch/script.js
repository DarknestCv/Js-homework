// ! AJAX

const button = document.querySelector('button')

function person() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://randomuser.me/api/', 3);

    xhr.onload = function() {
        const data = JSON.parse(xhr.responseText);
        const user = data.results[0];

        document.getElementById('image').src = user.picture.large;
        document.getElementById('phone').textContent = user.phone;
        document.getElementById('name').textContent = user.name.first + ' ' + user.name.last;
        document.getElementById('country').textContent = user.location.country;
        document.getElementById('city').textContent = user.location.city;
        document.getElementById('email').textContent = user.email;

        const userData = {
          image: user.picture.large,
          phone: user.phone,
          name: user.name.first + ' ' + user.name.last,
          country: user.location.country,
          city: user.location.city,
          email: user.email
        };
        localStorage.setItem('randomUser', JSON.stringify(userData));
    };

    xhr.send();
  }

button.addEventListener('click', () =>{
    document.getElementById('nasa').style.display = 'none';
    person()
})

// ! FETCH

const TWOButton = document.getElementById('getNASA');
const apodResultDiv = document.getElementById('apodResult');

const apiKey = "Pxq1oSRcz62uNOdIuc6Sk5rmp1p863kj5npRCOZs"; 

TWOButton.addEventListener('click', () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;
    document.getElementById("user-info").style.display = 'none'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.url;
            const title = data.title;
            const explanation = data.explanation;

            const result = '<h2>' + title + '</h2>' +
               '<img src="' + imageUrl + '">' +
               '<p><strong>Опис:</strong> ' + explanation + '</p>';
            apodResultDiv.innerHTML = result;
        })
});


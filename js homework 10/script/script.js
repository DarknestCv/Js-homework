
let cars = [
    { name: 'BMW', model: 'X5', productionYear: 2019, price: 33000, run: 66000, inGarage: true },
    { name: 'Audi', model: 'A6', productionYear: 2020, price: 29000, run: 45000, inGarage: true },
    { name: 'Mercedes', model: 'GLA', productionYear: 2018, price: 31000, run: 75000, inGarage: true },
    { name: 'Toyota', model: 'Camry', productionYear: 2021, price: 28000, run: 32000, inGarage: true },
    { name: 'Ford', model: 'Focus', productionYear: 2017, price: 18000, run: 85000, inGarage: true }
  ];
  
  // 1. для виведення всіх машин
  function showAllCars() {
    console.log("Всі автомобілі в гаражі:");
    cars.forEach(car => console.log(car));
  }
  
  // 2. для виведення кількості авто в гаражі
  function countCars() {
    console.log(`Кількість автомобілів в гаражі: ${cars.length}`);
  }
  
  // 3. для сортування автомобілів від дешевших до дорожчих
  function sortByPrice() {
    const sortedCars = [...cars].sort((a, b) => a.price - b.price);
    console.log("Автомобілі від дешевших до дорожчих:");
    sortedCars.forEach(car => console.log(car));
  }
  
  // 4. для сортування автомобілів від новіших до старіших
  function sortByYear() {
    const sortedCars = [...cars].sort((a, b) => b.productionYear - a.productionYear);
    console.log("Автомобілі від новіших до старіших:");
    sortedCars.forEach(car => console.log(car));
  }
  
  // 5.  для сортування автомобілів від меншого пробігу до більшого
  function sortByRun() {
    const sortedCars = [...cars].sort((a, b) => a.run - b.run);
    console.log("Автомобілі від меншого пробігу до більшого:");
    sortedCars.forEach(car => console.log(car));
  }
  
  // 6.  для пошуку автомобіля за name або model
  function searchCar(nameOrModel) {
    const foundCars = cars.filter(car => car.name === nameOrModel || car.model === nameOrModel);
    if (foundCars.length > 0) {
      console.log(`Знайдено автомобіль за запитом "${nameOrModel}":`);
      foundCars.forEach(car => console.log(car));
    } else {
      console.log(`Автомобіль за запитом "${nameOrModel}" не знайдено.`);
    }
  }
  
  // 7.  для додавання нової машини
  function addCar(newCar) {
    cars.push(newCar);
    console.log("Автомобіль додано в гараж.");
  }
  
  // 8.  для видалення машини за name або model
  function deleteCar(nameOrModel) {
    const index = cars.findIndex(car => car.name === nameOrModel || car.model === nameOrModel);
    if (index !== -1) {
      cars.splice(index, 1);
      console.log(`Автомобіль "${nameOrModel}" видалено з гаража.`);
    } else {
      console.log(`Автомобіль "${nameOrModel}" не знайдено.`);
    }
  }
  
  // 9.  для редагування пробігу машини
  function updateRun(nameOrModel, newRun) {
    const car = cars.find(car => car.name === nameOrModel || car.model === nameOrModel);
    if (car) {
      car.run = newRun;
      console.log(`Пробіг автомобіля "${nameOrModel}" оновлено до ${newRun} км.`);
    } else {
      console.log(`Автомобіль "${nameOrModel}" не знайдено.`);
    }
  }
  
  // 10. для редагування параметра автомобіля
  function updateCarParameter(nameOrModel, key, value) {
    const car = cars.find(car => car.name === nameOrModel || car.model === nameOrModel);
    if (car && car.hasOwnProperty(key)) {
      car[key] = value;
      console.log(`Параметр "${key}" автомобіля "${nameOrModel}" оновлено.`);
    } else {
      console.log(`Автомобіль "${nameOrModel}" або параметр "${key}" не знайдено.`);
    }
  }
  
  // 11. Додавання нової властивості всім автомобілям
  function addNewProperty(key, defaultValue = null) {
    cars.forEach(car => car[key] = defaultValue);
    console.log(`Властивість "${key}" додано до всіх автомобілів.`);
  }
  
  // 12. для зміни стану "в гаражі" або "виїхав"
  function updateGarageStatus(nameOrModel, status) {
    const car = cars.find(car => car.name === nameOrModel || car.model === nameOrModel);
    if (car) {
      car.inGarage = status;
      console.log(`Статус автомобіля "${nameOrModel}" оновлено. В гаражі: ${status}`);
    } else {
      console.log(`Автомобіль "${nameOrModel}" не знайдено.`);
    }
  }
  

  showAllCars();  // Виведення всіх авто
  countCars();  // Кількість авто
  sortByPrice();  // Сортування за ціною
  sortByYear();  // Сортування за роком
  sortByRun();  // Сортування за пробігом
  searchCar('BMW');  // Пошук за name
  addCar({ name: 'Honda', model: 'Civic', productionYear: 2016, price: 15000, run: 90000, inGarage: true });  // Додавання авто
  deleteCar('Toyota');  // Видалення авто
  updateRun('BMW', 70000);  // Оновлення пробігу
  updateCarParameter('Audi', 'price', 27000);  // Універсальне редагування параметра
  addNewProperty('description');  // Додавання нової властивості
  updateGarageStatus('Ford', false);  // Оновлення статусу виїзду авто

//   ! made in Ilyha programist
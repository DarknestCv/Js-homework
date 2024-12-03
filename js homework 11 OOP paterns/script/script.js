// ! 1
// function Citroen(name, range, power, weight){
//     return{
//         name: name,
//         range:range,
//         power:power,
//         weight:weight,
//     };
// }

// function factory(model){
//     switch(model){
//         case 'c4':
//             return Citroen('Citroen C4',600, 450, 2698);
//         case 'c3':
//             return Citroen('Citroen C3',340, 280, 1780);
//         case 'c1':
//             return Citroen('Citroen C1',280, 270, 1680);
//         default:
//             console.error('wrong model car')
//             return null
//     }
// }

// const car = factory(prompt('Write a model car, c1 or c3 or c4'))
// console.log(car);

// ! 2

class Heart {
    beat() {
        console.log("Серце скорочується!");
    }
}

class Eye {
    see() {
        console.log("Око бачить!");
    }
}

class Hand {
    grab() {
        console.log("Рука хапає!");
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.hearts = [new Heart(), new Heart()]; 
        this.eye = new Eye(); 
        this.hands = [new Hand(), new Hand(), new Hand()];
    }

    functionPerson() {
        console.log(`Ім'я: ${this.name}`);
        this.hearts.forEach(heart => heart.beat());
        this.eye.see();
        this.hands.forEach(hand => hand.grab());
    }
}

class PersonFactory {
    static createPerson(name) {
        return new Person(name);
    }
}

const person1 = PersonFactory.createPerson("Колян");
person1.functionPerson();

const person2 = PersonFactory.createPerson("Баба Зіна");
person2.functionPerson();
//! DZ
class ant{
    static allAnt = [];
    constructor(name){
        this.name = name;
        this.isAlive = true;
        this.backAnt = [];
        this.backAnt = ant.allAnt.slice()
        ant.allAnt.push(this)
    }
    die(){
        this.isAlive = false;
    }

    infection(){
        this.die()
        this.backAnt.forEach((ant) => ant.infection())
    }
}


const ant1 = new ant('Ant 1')
const ant2 = new ant('Ant 2')
const ant3 = new ant('Ant 3')
const ant4 = new ant('Ant 4')
const ant5 = new ant('Ant 5')

ant3.die()

ant5.infection()
console.log(ant1);
console.log(ant2);
console.log(ant3);
console.log(ant3);
console.log(ant4);
console.log(ant5);



//! DZ
class ant{
    static allAnt = [];
    constructor(name){
        this.name = name;
        this.isAlive = true;
        this.backAnt = [];
        this.backAnt = ant.allAnt.slice()
        ant.allAnt.push(this.name)
    }
    die(){
        this.isAlive = false;
    }
}


const ant1 = new ant('Ant 1')
const ant2 = new ant('Ant 2')
const ant3 = new ant('Ant 3')

ant3.die()

console.log(ant1);
console.log(ant2);
console.log(ant3);
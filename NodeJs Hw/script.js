// * cow
// console.log(cowsay.say({
    // text : "Go drink bro",
    // e : "oO",
    // T : "U"
    // }));
    
    // * cat
    
    // console.log(catsay.say('Go gym bro'));
    
    
const cowsay = require("cowsay");
const catsay = require('@miaos/catsay');

const firstpar = process.argv[2]
const twopar = process.argv[3]

if(firstpar === "666"){
    console.log('production mode')
}else if(firstpar % 2 === 0){
    console.log(cowsay.say({
        text : twopar,
        e : "oO",
        T : "U"
    }))
} else if(firstpar % 2 === 1){
    console.log(catsay.say(twopar))
}
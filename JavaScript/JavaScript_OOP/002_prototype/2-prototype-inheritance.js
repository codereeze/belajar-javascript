// prototype inheritance adalah konsep dimana object dapat mewarisi property dan method dari object lain melalui referensi prototype 

/* <===============================================================================> */
/* <===============================================================================> */

function Human(name){
    this.name = name;
}


Human.prototype.greet = function(){
    return `Hallo, saya ${this.name}`;
}


function MasFaiz(name, hobby){
    Human.call(this, name) // panggil constructor kelas induk
    this.hobby = hobby;
}


MasFaiz.prototype = Object.create(Human.prototype);
MasFaiz.prototype.constructor = MasFaiz;


MasFaiz.prototype.myHobby = function (){
    return `My hobbiy is ${this.hobby}`;
}


let faiz = new MasFaiz("Faiz Akamz", "Dance");

console.log(faiz.greet());
console.log(faiz.myHobby());
    
/* <===============================================================================> */

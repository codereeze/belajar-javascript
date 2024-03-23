// constructor function adalah blueprint atau cetakan untuk membuat sebuah object
// ini adalah cara lama untuk membuat object

/* <===============================================================================> */
/* <===============================================================================> */

// cara membuat object dengan constructor function 

function Mobil(){
    // property
    this.merk = "Avanza"
    this.brand = "Toyota"
    this.color = "Abu-abu"

    // method
    this.run = function (){
        console.log(`Mobil ${this.merk} dengan brand ${this.brand} berwarna ${this.color} melaju dengan cepat`);
    }
}

// instansiasikan object Mobil
let ObjectMobil = new Mobil();

// akses property
console.log(ObjectMobil.merk); // Avanza

// jalankan method run
ObjectMobil.run(); // Mobil Avanza dengan brand Toyota berwarna Abu-abu melaju dengan cepat

/* <===============================================================================> */

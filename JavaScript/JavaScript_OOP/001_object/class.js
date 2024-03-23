// class adalah blueprint atau cetakan untuk membuat sebuah object
// class adalah cara terbaru untuk membuat object
// usahakan untuk membuat nama object yang mewakili dengan object yang ingin dibuat

/* <===============================================================================> */
/* <===============================================================================> */

// cara membuat object mobil dengan class

class Mobil{
    // property
    merk = "Avanza";
    brand = "Toyota";
    color = "Abu-abu";

    // method
    run(){
        console.log(`Mobil ${this.merk} dengan brand ${this.brand} berwarna ${this.color} melaju dengan cepat`);
    }
}

// instansiasikan object Mobil
let ObjectMobil = new Mobil();

// akses property object Mobil
console.log(ObjectMobil.brand); // Toyota

// jalankan method run
ObjectMobil.run(); // Mobil Avanza dengan brand Toyota berwarna Abu-abu melaju dengan cepat



// untuk materi kedepannya mungkin saya akan menggunakan class dari pada constructor function
// kenapa?. karena penggunaan class lebih mudah dan cepat 

/* <===============================================================================> */

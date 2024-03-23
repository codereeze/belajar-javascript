// static digunakan untuk mendefinisikan property atau method secara statis pada class
// method atau property statis adalah anggota class yang melekat pada class itu sendiri, bukan dari instance atau object yang dibuat dari class tersebut
// kita dapat memanggil property atau method tanpa harus membuat object dari class

/* <===============================================================================> */
/* <===============================================================================> */

class Animal{
    // static field
    static tiger = "Harimau"
    static cat = "Kucing"
    static lion = "Singa"

    // static method
    static run(){
        console.log(`${this.tiger} berlari 35-40 km/jam`);
        console.log(`${this.cat} berlari 30-40 km/jam`);
        console.log(`${this.lion} berlari 50 km/jam`);
    }
}

// akses field dan method tanpa membuat object
console.log(Animal.tiger);
console.log(Animal.cat);
console.log(Animal.lion);

console.log();

Animal.run();

/* <===============================================================================> */

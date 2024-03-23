// kita juga bisa membuat method sebagai private artinya hanya bisa diakses oleh didalam class nya sendiri
// metode penggunaannya juga sama yaitu menggunakan #

/* <===============================================================================> */
/* <===============================================================================> */


class MasFaiz {
    nama = "Faiz Akamz";
    address = "Ngawi";
    hobby = "Dance";
    #money = "Punya";

    introduction() {
    console.log(
        `perkenalkan nama saya ${this.nama}, saya tinggal di ${
        this.address
        }, hobi saya ${this.hobby}, dan aku ${this.#money} uang`
    );

    this.#sayHelloWithName();

    }

    #sayHelloWithName(){
        console.log(`Hello, nama saya Faiz Akamz`);
    }

}
  
let Faiz = new MasFaiz();
Faiz.introduction();
  
  
  
  
// kelas anak
class MasHardin extends MasFaiz {
    introduction() {
        console.log(
            `perkenalkan nama saya ${this.nama}, saya tinggal di ${
            this.address
            }, hobi saya ${this.hobby}.`
        );

        // mencoba mengakses method yang diprivate
        this.#sayHelloWithName();
    }
}
  
new MasHardin().introduction() // error Private field '#sayHelloWithName' must be declared in an enclosing class

/* <===============================================================================> */

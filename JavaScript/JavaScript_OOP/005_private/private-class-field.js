// Saat kita membuat property atau field maka, secara default akan diatur sebagai public (bisa diakses dimanapun)
// kita bisa mengatur agar property class tidak bisa diakses dimanapun
// yaitu dengan cara menambahkan # pada nama property
// jika memaksa untuk mengakses field yang di private maka akan menghasilkan error

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
      }, hobi saya ${this.hobby}, dan aku ${this.#money} uang`
    );
  }
}

new MasHardin().introduction() // error Private field '#money' must be declared in an enclosing class

/* <===============================================================================> */

// prototype adalah konsep yang memungkinkan object untuk berbagi property dan method dengan object lain melalui sebuah referensi prototipe.
// prototype lebih sering digunakan untuk constructor function. meskipun begitu kita tetap bisa menggunakan prototype pada class

/* <===============================================================================> */
/* <===============================================================================> */

function Animal(name){
    this.name = name;
}

// tambahkan property dengan prototype
Animal.prototype.color = "Orange";
Animal.prototype.sound = "Rawwrrr"

// tambahkan method dengan prototype
Animal.prototype.descriptAnimal = function() {
    console.log(`${this.name} berwarna ${this.color} berbunyi ${this.sound}`);
}

// object Animal
let cat = new Animal("Kucing");
cat.descriptAnimal(); // Kucing berwarna Orange berbunyi Rawwrrr

/* <===============================================================================> */

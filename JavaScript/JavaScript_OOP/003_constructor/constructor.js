// constructor adalah method dalam object class yang akan dijalankan pertama kali saat object tersebut di instansiasikan

/* <===============================================================================> */
/* <===============================================================================> */

class HelloWorld{
    constructor(){
        // kode langsung dijalankan tanpa harus memanggil method constructor
        console.log("Hello World!"); // Hello World!
    }
}

// instansiasikan objek
let sayHello = new HelloWorld();
sayHello




// menggunakan constructor untuk property
class Person{
    constructor(firstName, middleName, lastName){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }

    introducing(){
        return `Perkenalkan nama saya, ${this.firstName} ${this.middleName} ${this.lastName}. Senang bisa berkenalan dengan mu`;
    }
}

// instansiasikan object Person
let masFaiz = new Person("Faiz", "Hardin", "Norman");
console.log(masFaiz.introducing()) // Perkenalkan nama saya, Faiz Hardin Norman. Senang bisa berkenalan dengan mu

/* <===============================================================================> */

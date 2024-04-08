// Object literals adalah cara untuk membuat objek dalam JavaScript dengan menggunakan sintaks yang mudah dibaca dan lebih ringkas. Ini adalah salah satu cara paling umum dan sederhana untuk membuat objek di JavaScript.

/* <===============================================================================> */
/* <===============================================================================> */


// contoh membuat object
const person = {
    firstName: "Guido",
    middleName: "Van",
    lastName: "Rossum",
    age: 30,
    introduction: function () {
        console.log(`pekenalkan nama saya, ${this.firstName} ${this.middleName} ${this.lastName}, saya berumur ${this.age}`);
    }
}

// contoh mengakses data object
console.log(person.firstName); 


// akses property method dari object person
person.introduction() //




// membuat object didalam object
const car = {
    merk: "pajero sport",
    brand: "Mitsubishi",
    price: 400_000_000,
    addressCompany: {
        city: "Tokyo",
        country: "Japan",
    }
}

console.log(car.merk); 

// akses object di dalam object
console.log(car.addressCompany.city); 
console.log(car.addressCompany.country); 

/* <===============================================================================> */

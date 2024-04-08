// pada part kali ini kita akan membahas kekurangan dari arrow function

/* <===============================================================================> */
/* <===============================================================================> */

// tidak dapat menggunakan kata kunci this di object
// akan menghasilkan undefined

let person = {
    firstName: "Hardin",
    lastName: "Nurudin",
    sayYourName: () => {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}

person.sayYourName(); 


// adapun masalah lainnya diantaranya
// 1. tidak bisa menggunakan argument object
// 2. tidak bisa menggunakan function generator
// 3. tidak bisa mengakses super 




/* <===============================================================================> */

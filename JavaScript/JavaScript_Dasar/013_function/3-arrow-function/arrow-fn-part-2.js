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

person.sayYourName(); // My name is undefined undefined


// adapun masalah lainnya diantaranya
// 1. tidak bisa menggunakan argument object
// 2. tidak bisa menggunakan function generator (akan kita bahas di folder generator function)
// 3. tidak bisa mengakses super (akan kita pelajari di folder OOP JavaScript)


// silahkan ikuti saja struktur alur dari folder ini
// pelan-pelan akan kita bahas di folder-folder yang akan datang

/* <===============================================================================> */

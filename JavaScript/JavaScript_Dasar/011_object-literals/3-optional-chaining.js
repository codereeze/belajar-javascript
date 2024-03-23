// optional chaining adalah operator yang digunakan untuk menghindari error ketika mecoba mengakses property yang tidak ada dalam suatu object
// jika menggunakan optional chaining kode yang seharusnya error menjadi undefined
// untuk menggunakan operator optional chaining kita bisa gunakan ( ? )

/* <===============================================================================> */
/* <===============================================================================> */


let person = {
    fullName: "Harits Azfa Al Atyla",
    age: 18,
}

// mengakses property object tanpa optional chaining

console.log(person.address.city); // error property address tidak ada


// mengakses property object dengan optional chaining
console.log(person.address?.city); // undefined

/* <===============================================================================> */

// for-in loop digunakan di JavaScript untuk mengulang melalui property-property enumerable dari object
// for-in loop lebih disarankan untuk melooping objek dari pada array
// meskipun begitu for-in loop tetap bisa digunakan untuk melooping array

/* <===============================================================================> */
/* <===============================================================================> */

// contoh for-in pada object
let person = {
    fullName: "Atyla Azfa Al Harits",
    age: 18,
    school: "SMK Negeri 3 Banjar",
    hobby: "Programming",
}


for(let key in person){
    console.log(`${key} : ${person[key]}`);
    // var key digunakan untuk mengambil nama dari property
    // var person[key] digunakan untuk mengambil isi dari property
}



// contoh for-in pada array
let mySelf = [
    "Harits Al Azfa Atyla", 
    18, 
    "SMK Negeri 3 Banjar", 
    "programming"
];

for(let key in mySelf){
    console.log(`${key} : ${mySelf[key]}`);
    // var key digunakan untuk mengambil index dari array
    // var person[key] digunakan untuk mengambil isi dari array
}


// perlu di ingat penggunaan for-in lebih direkomendasikan untuk object dibandingkan array
// untuk perulangan array ada yang namanya for-of
// silahkan buka file for-of untuk contohnya

/* <===============================================================================> */

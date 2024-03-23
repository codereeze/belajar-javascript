// set adalah struktur data yang digunakan untuk menyimpan kumpulan nilai unik, dimana nilai sets hanya muncul sekali

/* <===============================================================================> */
/* <===============================================================================> */

// contoh pembuatan sets
let animals = new Set(["kucing", "harimau", "singa"]);

// ubah kebentuk array terlebih dahulu
let changeToArray = Array.from(animals);

console.log(changeToArray); // [ 'kucing', 'harimau', 'singa' ]
console.log(changeToArray[0]); // kucing



// untuk mengaksesnya kita bisa menggunakan spread operator

let viaSpread = [...animals];
console.log(viaSpread[1]); // harimau

// langkah selanjutnya silahkan buka folder set-method, untuk mempelajari method-method yang digunakan untuk set


/* <===============================================================================> */

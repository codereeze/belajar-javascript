// kata kunci let adalah kata kunci yang digunakan untuk membuat variable

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan kata kunci let
let fullName = "Jane Doe";
console.log(fullName);


// ubah isi variable fullName
fullName = "Doe Jane";
console.log(fullName);


/* <===============================================================================> */


// let sama seperti var yang membedakan adalah akses blok scope ketika awal dideklarasikan
// misalkan saya membuat variable dengan let didalam blok if dengan kondisi true kemudian saya mencoba mengaksesnya di luar blok if
// output yang dihasilkan adalah undefined, karena let tidak mengabaikan blok yang mencakup dirinya
// contohnya seperti dibawah ini


if(true){
    let x = 100;
    console.log(x); // 100
}
console.log(x); // undefined

// ini juga berlaku pada perulangan atau looping juga

/* <===============================================================================> */
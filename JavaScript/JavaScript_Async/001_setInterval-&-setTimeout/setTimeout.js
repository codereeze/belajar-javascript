// setTimeout digunakan untuk menjalankan kode dengan delay waktu tertentu
// kita bisa menghentikan timeout dengan menggunakan method clearTimeout

/* <===============================================================================> */
/* <===============================================================================> */

// contoh penggunaan
console.log("kode pertama dieksekusi");

// menunggu dijalankan dengan delay 3 detik
setTimeout(function(){  
    console.log("Kode setTimeout sukses dijalankan");
}, 3000);

console.log("Menunggu kode setTimeout dijalankan...");


console.log();


// kita bisa membatalkan setTimeout
let timeoutId = setTimeout(function (){
    console.log("Hello World");
}, 1000);

// batalkan eksekusinya
clearTimeout(timeoutId);
console.log("kode setTimeout dibatalkan eksekusinya");

/* <===============================================================================> */


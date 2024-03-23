// setInterval adalah method Asynchronous yang digunakan untuk mengulangi kode program dengan waktu tertentu
// untuk menghentikan pengulangan interval kita bisa menggunakan method clearInterval

/* <===============================================================================> */
/* <===============================================================================> */

// contoh penggunaan
console.log("kode pertama dieksekusi");

// mengulangi kode setiap satu detik
let i = 0;
let intervalId = setInterval(function(){
    console.log("Kode dieksekusi setiap 1 detik");
    i++;

    if(i === 10){
        clearInterval(intervalId);
    }
}, 1000);

console.log("kode kedua dieksekusi");

/* <===============================================================================> */

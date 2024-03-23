// method padStart dan padEnd digunakan untuk menambahkan karakter di didalam string jika jumlahnya kurang dari yang ditentukan 
// perbedaannya adalah padStart menambahkan di awal string sedangkan padEnd di akhir string


/* <===============================================================================> */
/* <===============================================================================> */


// padStart
let angka = "1";
let start = angka.padStart(10, "0");
console.log(start); // 0000000001
console.log(start.length); // 10

// karna variable angka nilai panjangnya kurang dari 10 maka, tambahkan 0 di depannya sampai panjang dari variable angka sama dengan 10



// padEnd
let rupiah = "Rp.5";
let end = rupiah.padEnd(7, "0"); // Rp.5000
console.log(end);
console.log(end.length); // 7

// karna variable rupiah nilai panjangnya kurang dari 7 maka, tambahkan 0 di belakangnya sampai panjang dari variable rupiah sama dengan 7


/* <===============================================================================> */
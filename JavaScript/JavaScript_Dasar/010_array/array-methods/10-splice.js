// method splice digunakan untuk memodifikasi array dengan menghapus, menambahkan, atau mengganti elemen-elemen di dalamnya


// petunjuk penggunaan

// array.splice(start, deleteCount, item1, item2, ...);

/* 

start: Indeks dari mana operasi .splice() akan dimulai.
deleteCount (opsional): Jumlah elemen yang akan dihapus dari array, dimulai dari indeks start. Jika deleteCount tidak ditentukan, maka semua elemen dari start hingga akhir array akan dihapus.
item1, item2, ... (opsional): Elemen-elemen yang akan ditambahkan ke dalam array pada indeks start.

*/

/* <===============================================================================> */
/* <===============================================================================> */


// menghapus element array
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1); // Menghapus elemen dengan indeks 1 (yaitu "banana")

console.log(fruits); // ["apple", "cherry"]


// menambahkan element array
let fruits2 = ["apple", "cherry"];
fruits2.splice(1, 0, "banana", "date"); // Menambahkan "banana" dan "date" pada indeks 1

console.log(fruits2); // ["apple", "banana", "date", "cherry"]


// mengganti element array
var fruits3 = ["apple", "banana", "cherry"];
fruits3.splice(1, 1, "grape"); // Mengganti "banana" dengan "grape"

console.log(fruits3); // ["apple", "grape", "cherry"]


/* <===============================================================================> */

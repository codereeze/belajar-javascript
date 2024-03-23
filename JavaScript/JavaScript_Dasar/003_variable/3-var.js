// kata kunci var adalah kata kunci yang digunakan untuk membuat variable

/* <===============================================================================> */
/* <===============================================================================> */



// contoh penggunaan kata kunci var

var sayYourName = "Atyla Azfa Al Harits";
console.log(sayYourName); // Atyla Azfa Al Harits

// ubah isi variable sayYourName
sayYourName = "Harits Al Azfa Atyla";
console.log(sayYourName);


/* <===============================================================================> */
/* <===============================================================================> */


// masalah pada penggunaan kata kunci
// kata kunci var memiliki perilaku yang berbeda dalam hal lingkup variable dan dapat menyebabkan masalah yang sulit di identifikasi dalam kode


/* <===============================================================================> */


// 1. hoisting (kenaikan)
console.log(hello); // undefined
var hello = "Hello bro!";

// deklarasi variable akan naik ke atas lingkup fungsi atau blok, bahkan sebelum kode di jalankan
// sehingga meskipun kita mencoba mengaksesnya sebelum dideklarasikan, tidak ada kesalahan. Namun, nilainya akan menjadi undefined sampai diberikan nilai.


/* <===============================================================================> */


// 2. tidak ada blok scope
if (true) {
  var x = 10;
}

console.log(x);

// kata kunci var tidak mempedulikan blok program dimana dia dideklarasikan
// artinya, mereka dapat diakses di luar blok di mana mereka dideklarasikan
// tidak hanya pada pengkondisian, ini juga berlaku pada perulangan atau looping
// ini akan menjadi masalah ketika membuat kode yang kompleks


/* <===============================================================================> */


// 3. overriding global variables
var x = 20;

function fungsi() {
  var x = 30;
  console.log(x); // Output: 30 (variabel lokal)
}

fungsi();
console.log(x); // Output: 20 (variabel global)

// mendeklarasikan variabel dengan nama yang sama di dalam dan di luar sebuah fungsi, variabel global akan ditimpa oleh variabel lokal dalam fungsi, yang dapat menyebabkan konflik dan kesalahan yang sulit diidentifikasi


/* <===============================================================================> */


// 4. membuat variable tumpang tindih
var abc = "abcdefghi";
var abc = "abcdefghijklmnopq";
console.log(abc); // abcdefghijklmnopq

// tidak menyebabkan error
// karena var menganggap itu adalah merubah data yang sudah dideklarasikan diawal

// seperti contoh dibawah ini
var sayGoodBye = "goodbye";
sayGoodBye = "selamat tinggal";
console.log(sayGoodBye); // selamat tinggal


/* <===============================================================================> */


// penggunaan var sudah tidak direkomendasikan lagi
// gunakan let dan const
// jika ingin menggunakan var harap tidak digunakan untuk pembuatan aplikasi yang kompleks


/* <===============================================================================> */
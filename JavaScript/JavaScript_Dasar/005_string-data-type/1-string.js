// string adalah tipe data di JavaScript yang merepresentasikan text atau sekumpulan karakter tertentu
// string dapat berisi spasi, text, angka, symbol, emoji, dan karakter lainnya

/* <===============================================================================> */
/* <===============================================================================> */

// sebelumnya kita pernah menggunakan tipe data string untuk menuliskan hello world ke console dan penggunaan di variable
// untuk membuat string diawali kutip pembuka dan diakhiri kutip penutup
// untuk membuat tipe string kita bisa menggunakan kutip satu / single quote ( '' )
// kita bisa juga menggunakan kutip dua / double quote ( "" )

/* <===============================================================================> */


// membuat string bisa menggunakan object string
let color = new String("Hijau");
console.log(color);


// bisa juga membuat string secara primitive
// contoh seperti dibawah ini


// contoh penggunaan string kutip satu (single quote)
'Hallo apa kabar';
let sayHallo = 'aku baik, bagaimana kabarmu?';
console.log('ya, aku baik-baik saja');



// contoh penggunaan string kutip dua (double quote)
"Hai, apakah kamu ingin pergi ke pasar?";
let answer = "Tentu saja, ada bebrapa yang ingin aku beli";
console.log("Ayo pergi bersama");


/* <===============================================================================> */

// harap diperhatikan dalam penggunaan kutip satu dan dua
// di JavaScript menggunakan jenis kutip yang diapit jenis kutip yang sama dianggap tidak valid dan ambigu

/* <===============================================================================> */


// error string tidak valid atau ambigu
console.log('Harits selalu 'belajar' tiap hari');
// string valid 
console.log('Budi selalu "mandi" setiap 1 menit sekali'); 


// error string tidak valid atau ambigu
console.log("Tono "membaca" buku di perpustakaan"); 
// string valid
console.log("Supri 'bermain' kelereng di depan rumah"); 


/* <===============================================================================> */

// solusinya jika ingin menggunakan jenis kutip yang diapit sama
// kalian bisa menggunakan escape character ( \ ) untuk menghindari ambiguitas

/* <===============================================================================> */

// contoh string yang valid
console.log('Harits selalu \'belajar\' tiap hari');
console.log("Tono \"membaca\" buku di perpustakaan"); 



/* <===============================================================================> */

// di JavaScript kalian bisa menggambungkan dua buah string yang berbeda 
// yaitu menggunakan operator plus ( + )

/* <===============================================================================> */

// mengabungkan string dari variable
let firstName = "Nama depan: ";
let atyla = "Atyla";

console.log(firstName + atyla); // Nama depan: Atyla

// menggabungkan string
console.log("Nama belakang:" + " " + "Al Harits"); // Nama belakang: Al Harits 


/* <===============================================================================> */

// dari cara di atas sebenarnya ada cara yang lebih efektif untuk menggabungkan string
// yaitu menggunakan string template
// apa itu string template? kalian bisa buka file string-template.js untuk penjelasan lebih lanjut

/* <===============================================================================> */


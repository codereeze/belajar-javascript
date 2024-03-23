// pengkondisian atau percabangan adalah konsep dalam pemrograman dimana jika suatu kondisi terpenuhi maka akan menjalankan instruksi/perintah tertentu

/* <===============================================================================> */
/* <===============================================================================> */

// if-statement

if (10 + 10 == 20) {
  console.log("Kamu benar"); // kamu benar
}
// pada contoh diatas terdapat kondisi jika 10 + 10 hasilnya sama dengan 20 maka akan menjalankan console.log("Kamu benar")



// tetapi menggunakan if-statement saja itu tidak cukup. misalkan jika kondisinya salah, teman-teman ingin menjalankan perintah tertentu
// kita butuh yang namanya if-else-statement
// else digunakan untuk menjalankan kode tertentu jika kondisi if tidak terpenuhi



// if-else-statement

if (30 + 10 == 50) {
  console.log("jawaban benar");
  // kondisi if bernilai false maka, kondisi ini tidak akan di jalankan
} else {
  console.log("jawaban salah"); // jawaban salah
  // kondisi else dijalankan karna 30 + 10 = 40 bukan 50
}



// selain menggunakan if-else-statement kita bisa mengunakan else-if-statement
// else-if digunakan untuk mencari nilai true selanjutnya dari if-statement yang kondisinya tidak terpenuhi



// else-if-statement
let pilihan = "semut";

if (pilihan == "gajah") {
  console.log("kamu menang");
  // kondisi ini tidak dijalankan karena var pilihan nilainya tidak sama dengan gajah
} else if (pilihan == "semut") {
  console.log("kamu seri"); // kamu seri
  // kondisi ini dijalankan karena var pilihal nilainya sama dengan semut
} else {
  console.log("kamu kalah");
  // kondisi ini hanya akan dijalankan ketika if dan else-if kondisinya tidak terpenuhi
}



// selain penggunaan diatas kita juga bisa menggunakan pengkondisian di dalam pengkondisian
// ini dinamakan if bersarang

// contoh penggunaan statement bersarang
// kalian bisa menggunakan ini sebanyak-banyaknya
// kalian bisa terapkan di statement if, else if, atau else
// pada contoh saya hanya menggunakan if saja

// contoh
if (true) {
  if (!false) {
    console.log("Hello World!"); // Hello World!
    if (true == !false) {
      console.log("Hallo Dunia!"); // Hallo Dunia!
    }
  }
}


/* <===============================================================================> */
/* <===============================================================================> */
// sama seperti break, kata kunci continue digunakan untuk menghentikan perulangan
// perbedaannya adalah kata kunci continue digunakan untuk menghentikan perulangan sementara, kemudian melanjutkan ke perulangan berikutnya
// kode yang berada dibawah kata kunci continue tidak akan dieksekusi

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan kata kunci continue untuk pembuatan bilangan ganjil
 let i = 0;
 while(i < 10){
    i++;

    if(i % 2 === 0){
        console.log(`eksekusi berhenti sementara`);
        continue;
        console.log("Hallo"); // tidak di eksekusi
    }

    console.log(`bilangan ganjil ${i}`);
 }

//  pada contoh diatas, selama i tidak habis dibagi dua (ada sisa bagi), perulangan dilanjutkan

/* <===============================================================================> */

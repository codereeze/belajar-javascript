// kata kunci break digunakan untuk menghentikan eksekusi dari sebuah perulangan atau switch statement
// sebelumnya kita sudah menggunakan kata kunci break pada meteri conditional switch statement
// pada materi ini kita akan coba kata kunci break pada perulangan / looping

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan break di looping

while(true){
    console.log("ini perulangan dengan kata kunci break");
    break;
}

// pada contoh diatas saya membuat looping tanpa batas
// karena saya menggunakan kata kunci break, maka looping tersebut hanya dilakukan 1 kali




// contoh penggunaan kata kunci break dengan if statement

let i = 1;
while(true){
    console.log(`ini adalah perulangan ke ${i}`);
    i++;

    if(i > 10){
        break;
    }
}

// pada contoh diatas perulangan tanpa batas langsung dihentikan ketika i lebih dari 10

/* <===============================================================================> */

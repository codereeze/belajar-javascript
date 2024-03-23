// do-while loop mirip seperti while loop
// perbedaannya adalah loop ini akan menjalankan kode setidaknya satu kali, kemudian terus menjalankannya selama kondisi yang ditentukan masih terpenuhi
// loop ini akan menjalankan satu kali perulangan walaupun kondisinya false

/* <===============================================================================> */
/* <===============================================================================> */


// contoh penggunaan do-while
let i = 1;
do{
    console.log(`perulangan do-while ke-${i}`);
    i++;
}while(i <= 10);


// do-while dalam kondisi false
let a = 1;
do{
    console.log(`menjalankan sebanyak ${a} kali`);
    a++
    // menjalankan satu kali walau kondisinya false
} while(false);


// perulangan do-while tanpa henti
do{
    console.log("perulangan do-while tanpa henti");
    // perulangan do-while tanpa henti
}while(true);

/* <===============================================================================> */

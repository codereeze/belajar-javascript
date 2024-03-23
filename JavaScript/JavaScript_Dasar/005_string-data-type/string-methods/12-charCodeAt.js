// method charCodeAt digunakan untuk mengambil Unicode dari suatu karakter
// setiap karakter dalam JavaScript direpresentasikan oleh sebuah kode Unicode yang mewakili karakter tersebut dalam standar Unicode.

/* <===============================================================================> */
/* <===============================================================================> */

let a = "a";
console.log(a.charCodeAt(0)); // 97

console.log(" ");



// generate unicode menggunakan looping

// huruf
let alphabet = "abcdefghijklmnopqrstuvwxyz";
for(let i = 0; i < alphabet.length; i++){
    console.log(`${alphabet.charAt(i)}: ${alphabet.charCodeAt(i)}`);
    // menghasilkan unicode dari huruf alphabet
}


console.log(" ");


// symbol
let symbol = "~!@#$%^&*()-+_=[]{}:;\\|/><.,";
for(let i = 0; i < symbol.length; i++){
    console.log(`${symbol.charAt(i)}: ${symbol.charCodeAt(i)}`);
    // menghasilkan unicode dari symbol
}


console.log(" ");

// angka
let number = "0123456789";
for(let i = 0; i < number.length; i++){
    console.log(`${number.charAt(i)}: ${number.charCodeAt(i)}`);
    // menghasilkan unicode dari angka
}


/* <===============================================================================> */
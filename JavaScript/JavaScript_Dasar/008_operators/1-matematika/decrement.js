// decrement adalah kemampuan variable untuk menurunkan 1 angka nilainya sebelum atau sesudah eksekusi
// decrement terbagi menjadi dua bagian yaitu pre-decrement (sebelum) dan post-decrement (sesudah)
// ( -- )

/* <===============================================================================> */
/* <===============================================================================> */


// pre-decrement
let pre = 10;
console.log(--pre); // 9
// pada contoh diatas variable pre langsung diturunkan nilainya 1 angka

// contoh lainnya
let a = 20;
let b = --a;
console.log(a); // 19
console.log(b); // 19
// pada contoh diatas variable a diturunkan menjadi 19, dan  b akan menjadi 19




console.log(" ");




// post-decrement
let post = 20;
post--;
console.log(post);
// pada contoh diatas variable post di eksekusi terlebih dahulu, baru menurunkan 1 angka


// contoh lainnya
let c = 30;
let d = c--;
console.log(c);
console.log(d);
// pada contoh diatas variable d menjadi 30 dan variable c turun menjadi 29
// increment adalah kemampuan variable untuk menaikkan 1 angka nilainya sebelum atau sesudah eksekusi
// increment terbagi menjadi dua bagian yaitu pre-increment (sebelum) dan post-increment (sesudah)
// ( ++ )

/* <===============================================================================> */
/* <===============================================================================> */


// pre-increment
let pre = 10;
console.log(++pre); // 11
// pada contoh diatas variable pre langsung dinaikan nilainya 1 angka

// contoh lainnya
let a = 20;
let b = ++a;
console.log(a); // 21
console.log(b); // 21
// pada contoh diatas variable a dinaikan menjadi 21, dan  b akan menjadi 21




console.log(" ");




// post-increment
let post = 20;
post++;
console.log(post);
// pada contoh diatas variable post di eksekusi terlebih dahulu, baru menaikan 1 angka

// contoh lainnya
let c = 30;
let d = c++;
console.log(c);
console.log(d);
// pada contoh diatas variable d menjadi 30 dan variable c naik menjadi 31
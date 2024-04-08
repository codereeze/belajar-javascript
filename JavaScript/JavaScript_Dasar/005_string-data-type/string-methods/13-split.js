// method split digunakan untuk memecah string ke dalam bentuk array
// yaitu menjadikan karakter tertentu sebagai acuan batas array nya

/* <===============================================================================> */
/* <===============================================================================> */

let fullName = "Jane Doe";
let strToArray = fullName.split(" ");

console.log(strToArray); 

// pada kode di atas saya menggunakan karakter spasi untuk acuan batas panjang array nya
// acuannya bebas tidak harus menggunakan spasi. bisa dengan huruf atau karakter lainnya



// kita bisa memecah string berdasarkan beberapa substring pertama
// string.split(separator, limit)

console.log(fullName.split(" ", 2)); 

// pada contoh di atas saya memecah string berdasarkan 2 substring pertama

/* <===============================================================================> */
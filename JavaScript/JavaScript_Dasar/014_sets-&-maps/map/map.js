// map adalah object yang digunakan untuk menyimpan data dalam bentuk pasangan kunci dan nilai.
// mungkin sepintas mirip seperti array asosiative di PHP. tapi ini berbeda.
// kunci di map itu unik, artinya tidak boleh ada key yang sama

/* <===============================================================================> */
/* <===============================================================================> */

// membuat maps
let fish = new Map([
    ["kunci1", "cupang"],
    ["kunci2", "gurame"],
    ["kunci3", "lele"]
]);


console.log(fish.get("kunci1")); // cupang


// selanjutnya kita akan membahas method-method yang ada di object Map

/* <===============================================================================> */

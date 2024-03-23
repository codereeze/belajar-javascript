// getElementsByClassName mengembalikan HTMLCollection
// perhatikan dalam penulisan nama methodnya, terdapat huruf "s" yang artinya jamak

/* <===============================================================================> */
/* <===============================================================================> */


// ambil berdasarkan nama class
let paragraphClass = document.getElementsByClassName("paragraph");

// ubah text di paragraph
// karena bentuknya HTMLCollection, maka kita korversi dulu menjadi array menggunakan Array.from

Array.from(paragraphClass).forEach((element, index) => {
    // ubah text ke yang baru
    element.textContent = `Hello World ke-${index}`;
});

/* <===============================================================================> */

// getElementById akan menembalikan sebuah element
// getElementById akan mengambil element yang pertama. Maksudnya, jika ada element lain yang sama, maka yang akan diambil adalah element yang pertama kali dibuat di HTML

/* <===============================================================================> */
/* <===============================================================================> */


// panggil element paragraph di html
let elementParagraph = document.getElementById("paragraph");

// ambil text yang ada di tag p
console.log(elementParagraph.textContent);

// coba ubah text di tag p
elementParagraph.textContent = "Hallo ini adalah selection menggunakan id"

/* <===============================================================================> */

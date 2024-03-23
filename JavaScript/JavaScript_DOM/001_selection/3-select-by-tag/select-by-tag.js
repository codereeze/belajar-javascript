// getElementsByTagName sama seperti getElementByClassName yang mengembalikan HTMLCollection
// perbedaanya adalah selector rujukannya adalah tag HTML
// perhatikan penulisannya, karena ada huruf "s" artinya jamak

/* <===============================================================================> */
/* <===============================================================================> */

// ambil berdasarkan tag HTML
let tagDiv = document.getElementsByTagName("div");

// tambahkan tag p dan text kedalam div menggunakan innerHTML
Array.from(tagDiv).forEach((tagElement, index) => {
    // berikan text warna merah
    tagElement.innerHTML = `<p style="color: red">Selector menggunakan tag ke-${index}</p>`
});

/* <===============================================================================> */

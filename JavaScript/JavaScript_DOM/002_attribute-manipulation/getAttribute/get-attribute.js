// get attribut digunakan untuk mengambil data dari attribut

/* <===============================================================================> */
/* <===============================================================================> */


// panggil tag a yang ingin dipanggil
let tagLink = document.querySelector("#link-github");
// ambil data dari attribut tag a
let dataAttribut = tagLink.getAttribute("href");


// tampilkan datanya di tag h3
let showLink = document.querySelector("#show-link");
showLink.textContent = dataAttribut;

/* <===============================================================================> */

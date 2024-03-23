// setAttribut digunakan untuk mengatur/menambahkan attribut baru ke dalam tag html

/* <===============================================================================> */
/* <===============================================================================> */

let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");


// atur attribute input username
inputUsername.setAttribute("placeholder", "Masukan username Anda")
inputUsername.setAttribute("autocomplete", "off");


// atur attribut input password
inputPassword.setAttribute("placeholder", "Masukan password Anda");

/* <===============================================================================> */

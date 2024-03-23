// prompt adalah popup dalam bentuk inputan

/* <===============================================================================> */
/* <===============================================================================> */

let name = prompt("Siapa nama mu?");
let school = prompt("Asal sekolah");

let showName = document.getElementById("show-data-name");
let showSchool = document.getElementById("show-data-school");

showName.textContent = `Nama: ${name}`;
showSchool.textContent = `Sekolah: ${school}`;

/* <===============================================================================> */

// querySelectorAll mengembalikan nodeList
// method ini sering digunakan untuk menyeleksi class dan tag

/* <===============================================================================> */
/* <===============================================================================> */

// seleksi dengan class
let listLink = document.querySelectorAll(".link");

// seleksi dengan tag
let listTag = document.querySelectorAll("p");


// karena bentuknya nodeList kita tidak perlu menggunakan Array.from
listLink.forEach((element) => {
    element.innerHTML = "follow my github <br>";
});


listTag.forEach((element, index) => {
    element.textContent = `ini paragraph ke-${index}`;
});

/* <===============================================================================> */

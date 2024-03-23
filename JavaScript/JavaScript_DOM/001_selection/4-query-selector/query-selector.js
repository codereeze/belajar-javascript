// querySelector sama seperti getElementById yaitu mengembalikan sebuah element
// yang membedakan adalah querySelector bisa untuk id, class, dan tag
// perlu diingat jika ada element yang sama, method ini akan mengambil element yang paling pertama di buat

/* <===============================================================================> */
/* <===============================================================================> */

// selector dengan id harus menggunakan simbol #
let elementWithID = document.querySelector("#paragraph-id");

// selector dengan class harus menggunakan simbol .
let elementWithClass = document.querySelector(".paragraph-class");

// selector dengan tag, langsung tuliskan nama tag HTML nya
let elementWithTag = document.querySelector("span")


// tambahkan text kedalam masing-masing tag
elementWithID.textContent = "Selector dengan Id";
elementWithClass.textContent = "Selector dengan Class";
elementWithTag.textContent = "Selector dengan Tag";

/* <===============================================================================> */

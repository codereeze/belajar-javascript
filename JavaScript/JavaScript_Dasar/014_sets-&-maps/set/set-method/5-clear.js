// method clear digunakan untuk membersihkan seluruh nilai didalam set

/* <===============================================================================> */
/* <===============================================================================> */

let laptop = new Set(["HP", "Asus", "Samsung", "Lenovo"]);
laptop.clear();

console.log(Array.from(laptop)); // []
// mengembalikan array kosong, karena set sudah bersih dari nilai-nilai


/* <===============================================================================> */
// method entries digunakan untuk mengembalikan nilai iterator yang berisi nilai pasangan nilai-nilai

/* <===============================================================================> */
/* <===============================================================================> */

let providers = new Set(["Telkomsel", "Smartfren", "XL"]);

let getValues = providers.entries();

// jalankan pada looping
for(const [value] of getValues){
    console.log(value);
}

/* <===============================================================================> */

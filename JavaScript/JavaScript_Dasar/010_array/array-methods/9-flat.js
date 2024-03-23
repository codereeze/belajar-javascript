// method flat digunakan pada array dalam JavaScript, dan ia digunakan untuk "membongkar" atau "meratakan" array yang bersarang (nested array), sehingga menghasilkan array yang lebih datar (flat).


/* <===============================================================================> */
/* <===============================================================================> */



// method flat tanpa argument
let nestedArray = [1, [2, [3, 4]], 5];
let flatArray = nestedArray.flat();

console.log(flatArray); // Output: [1, 2, [3, 4], 5]

// jika tidak memberikan nilai argument maka, secara default method flat akan membongkar 1 tingkat ke dalam array



// method flat dengan argument
let deeplyNestedArray = [1, [2, [3, [4]]], 5];
let deeplyFlatArray = deeplyNestedArray.flat(2);

console.log(deeplyFlatArray); // Output: [1, 2, 3, [4], 5]

// pada contoh di atas, method flat membongkar 2 tingkat kedalam array


/* <===============================================================================> */
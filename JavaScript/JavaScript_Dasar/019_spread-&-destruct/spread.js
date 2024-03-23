// spread adalah operator yang memungkinkan kita bisa memecah element dari sebuah array atau object ke dalam komponen individualnya

/* <===============================================================================> */
/* <===============================================================================> */

// spread operator pada array
let numbers = [1,2,3,4,5];

// tanpa spread operator
console.log(numbers); // [1,2,3,4,5]

// menggunakan spread operator
console.log(...numbers); // 1 2 3 4 5





// spread operator pada object
let fruitTranslateID = {
    banana: "Pisang",
    watermelon: "Semangka",
    guava: "Jambu",
    orange: "Jeruk"
}

// tanpa spread operator
console.log(fruitTranslateID); // { banana: 'Pisang', watermelon: 'Semangka', guava: 'Jambu', orange: 'Jeruk' }

// menggunakan spread operator
console.log({ ...fruitTranslateID, dragonFruit: "Buah Naga"}); // { banana: 'Pisang', watermelon: 'Semangka', guava: 'Jambu', orange: 'Jeruk', dragonFruit: 'Buah Naga' }

/* <===============================================================================> */

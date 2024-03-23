// destructuring adalah teknik yang memukinkan dengan mudah mengambil nilai dari array atau property object dan menetapkannya di variable terpisah 

/* <===============================================================================> */
/* <===============================================================================> */


// contoh destructuring pada array
let cities = ["Bandung", "Jakarta", "Tasikmalaya", "Banjar"];
let [city1, city2, city3, city4] = cities

console.log(city1); // Bandung

// rest di destructuring array
let [kota1, kota2, ...rest] = cities;
console.log(kota1, rest); // Bandung [ 'Tasikmalaya', 'Banjar' ]




// contoh destructuring pada object
let person = {
    name: "Mas Faiz",
    age: 32,
    city: "Ngawi",
    hobby: "Dance"
}
let {name, age, ...restVar} = person;

console.log(name); // Mas Faiz
console.log(restVar); // { city: 'Ngawi', hobby: 'Dance' }

/* <===============================================================================> */

// getter adalah teknik mengambil nilai dari proprty class
// setter adalah teknik mengatur nilai dari property class

/* <===============================================================================> */
/* <===============================================================================> */

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        let result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}

let person = new Person("Faiz", "Norman");
// get nilai dari property class
console.log(person.fullName); // Faiz Norman

// set nilai property
person.fullName = "Hardin Rusdi";
// get nilai property
console.log(person.fullName);

/* <===============================================================================> */


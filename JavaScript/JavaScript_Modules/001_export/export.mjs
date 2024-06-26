// untuk mengeksport data kita perlu menggunakan kata kunci export
// kita bisa mengeksport apa saja entah itu variable, fungsi, atau object

/* <===============================================================================> */
/* <===============================================================================> */

// eksport variable
export let nama = "John Doe"


// eksport fungsi
export function sayHello(){
    return "Hello World!"
}

// eksport object class
export class Person{
    name = 'Jane Doe'
    school = 'SMK Jujutsu'

    biodata(){
        return `Hello, saya ${this.name}, saya bersekolah di ${this.school}`
    }
}



// mengeksport banyak data sekaligus
export {nama, sayHello, Person}
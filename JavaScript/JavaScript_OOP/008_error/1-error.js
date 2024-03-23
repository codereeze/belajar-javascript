// di JavaScript kita bisa membuat error di program kita
// untuk memberitahu program kita, kita harus mentrigger error kita dengan menggunakan kata kunci throw
// throw digunakan untuk melempar error dari object error
// jika terdapat error, otomatis eksekusi kode program kita akan berhenti
// detail error bisa dilihat di console browser kita

/* <===============================================================================> */
/* <===============================================================================> */

// contoh membuat error

class PersonalName{
    static createName(...names){
        if(names.length < 2){
            throw new Error("Mohon maaf nama anda kurang dari 2 kata");
        }

        console.log(`Hello my name is ${names[0]} ${names[1]}`);
    }
}


PersonalName.createName("Faiz", "Akamz"); // Hello my name is Faiz Akamz
PersonalName.createName(); // Mohon maaf nama anda kurang dari 2 kata

/* <===============================================================================> */


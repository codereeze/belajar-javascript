// inheritance atau pewarisan adalah konsep dalam pemrograman yang dimana kelas induk (parent class) mempunyai keturunan (child class) yang mewarisi sebagian atau keseluruhan sifat dari induknya
// hal yang diwariskan adalah property atau method nya
// agar sebuah class bisa mewarisi property atau method, kita perlu menggunakan kata kunci extends
// kelas anak juga bisa mewariskan keturunannya sendiri

/* <===============================================================================> */
/* <===============================================================================> */

class Mother{
    constructor(face, hair, skinColor, eyeColor){
        this.face = face
        this.hair = hair
        this.skinColor = skinColor
        this.eyeColor = eyeColor
    }

    identity(){
        console.log(`Ibuku mempunyai wajah ${this.face}, rambut ${this.hair}, warna kulit ${this.skinColor} dan bermata ${this.eyeColor}`);
    }

    sayHello(){
        console.log("Hello");
    }
}

let identityMyMother = new Mother("oval", "keriting", "coklat", "hitam");
identityMyMother.identity();


// buat kelas turunannya 
class Myself extends Mother{
    constructor(face, hair, skinColor, eyeColor){
        super(face, hair); // digunakan untuk memanggil constructor class Mother
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
    }

    identity(){
        console.log(`Aku mempunyai wajah ${this.face}, rambut ${this.hair}, warna kulit ${this.skinColor} dan bermata ${this.eyeColor}`);
        super.sayHello() // menggunakan method dari class Mother
    }
}

let identityMyself = new Myself("oval", "keriting", "putih", "biru");
identityMyself.identity();

/* <===============================================================================> */

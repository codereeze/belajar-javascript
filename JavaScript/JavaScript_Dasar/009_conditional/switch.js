// switch statement adalah versi sederhana dari pengkondisian atau percabangan.
// perbedaanya adalah switch hanya mendukung pengkondisian sama dengan

/* <===============================================================================> */
/* <===============================================================================> */


// switch statement

let akreditasi = "A";
switch(akreditasi){
    case "A":
        console.log("sekolah bagus"); // sekolah bagus
        // kondisi ini akan dijalankan karena var akreditasi sama dengan A
    break;
    case "E":
        console.log("sekolah jelek");
    break;
}



// kita bisa menggabungkan case jika ingin case tersebut mengeluarkan output yang sama
// kita bisa menggunakan kondisi default jika kondisi diatasnya tidak terpenuhi

let nilai = 90;
switch(nilai){
    case 90:
    case 80:
        console.log("kamu lulus dengan pujian");
        // kode ini di jalankan karena var nilai sama dengan case 90
    break;
    case 70:
        console.log("kamu lulus");
    break;
    default:
        console.log("kamu tidak lulus");
    break;
}

/* <===============================================================================> */
/* <===============================================================================> */
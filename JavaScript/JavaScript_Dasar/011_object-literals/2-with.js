// pada meteri sebelumnya kita tahu cara mengakses object yaitu dengan cara menamgin object dan peroperty nya
// ada cara yang lebih mudah untuk mengakses data dari object. namun kode ini akan menjadi membingungkan ketika membuat kode yang kompleks
// statement ini yaitu with statement
// penggunaan with sudah tidak direkomendasikan lagi


/* <===============================================================================> */
/* <===============================================================================> */

// penggunaan with statement
let person = {
    fullName: "Atyla",
    age: 18,
    hobby: "Programming",
    address: {
        subdistrict: "Lakbok",
        city: "Ciamis",
        country: "Indonesia"
    }
};

with(person){
    console.log(`Nama depan: ${fullName}`);
    console.log(`Umur: ${age}`);
    console.log(`hobi: ${hobby}`);
    console.log(`kecamatan: ${address.subdistrict}`);
    console.log(`kabupaten: ${address.city}`);
    console.log(`negara: ${address.country}`);

    // pada contoh diatas kita hanya tinggal memanggil property-property nya saja
}


// silahkan cari masalah pada with statement


/* <===============================================================================> */

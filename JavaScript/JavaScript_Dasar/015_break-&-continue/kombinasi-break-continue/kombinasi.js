// contoh penggunaan sederhana kombinasi break dan continue

let i = 0;

while(true){
    i++;

    if(i % 2 === 0){
        continue;
    }

    console.log(i);
    if(i == 11){
        break;
    }
}
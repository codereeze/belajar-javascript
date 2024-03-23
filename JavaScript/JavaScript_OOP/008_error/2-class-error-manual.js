// di JavaScript kita bisa membuat error secara kostume
// yaitu dengan cara memanfaatkan pewarisan dari class Error

/* <===============================================================================> */
/* <===============================================================================> */


class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = "ErrorCustom";
    }
}

class MathSum{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new CustomError("Anda belum memasukan angka")
        }

        let result = 0;
        for(const number of numbers){
            result += number;
        }

        return result;
    }
}

console.log(MathSum.sum(1,2,3,4,5,6,7,8,9)); // 45
console.log(MathSum.sum()); // Anda belum memasukan angka

/* <===============================================================================> */

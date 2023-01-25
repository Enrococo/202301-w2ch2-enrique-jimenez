let valueA = "hola";
let valueB = "hola";

const strictEquals = (A,B) => {

    if (isNaN(A) && isNaN(B)){
        console.log("false");
    }


    else console.log(Object.is(valueA,valueB));

}

strictEquals(valueA,valueB);
function validarNumero (numero: number){

    if (numero >= 0){
        return true;
    } else {
        return false;
    }
}

const validador = validarNumero(5)

console.log(validador)


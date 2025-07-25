function validadorNumeroReal (numero1:number){

    if (numero1 >= 0) {
        return true;
    } else{
            return false;
    }
}

const verificar = validadorNumeroReal(-7)

console.log(verificar)


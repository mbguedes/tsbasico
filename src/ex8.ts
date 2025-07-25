function dividir(v1: number, v2: number){

    const resultadoDivisao = v1 / v2;

    if (resultadoDivisao < 0){
        return "erro total"}
    else{
        return resultadoDivisao
    }
}

const resultado = dividir (10 , 5)
console.log(resultado)
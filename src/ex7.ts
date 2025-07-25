function soma(valor1:number, valor2:number){
    if (valor1 + valor2 < 0) {
        return 'número negativo'
    } else{
        return valor1 + valor2
    }
}

const valor = soma (1 , -7)
console.log(valor)
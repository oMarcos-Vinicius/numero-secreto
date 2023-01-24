function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (chuteForInvalido(numero)) {
        console.log('Valor não é um numero')
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`Valor inválido: o chute é menor que ${menorNumero} e é maior que ${maiorNumero}.`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}
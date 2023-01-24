function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor não é um numero</div>`;
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero}.</div>`;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}
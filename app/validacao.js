function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor não é um numero</div>`;
        return;
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorNumero} e ${maiorNumero}.</div>`;
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', e => {
    console.log(e)
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
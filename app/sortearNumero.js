const menorNumero = 1;
const maiorNumero = 1000;
const numeroSecreto = numeroAleatorio()

function numeroAleatorio() {
    return parseInt(Math.random() * maiorNumero + 1)
}

console.log('Numero Secreto: ', numeroSecreto);

const elementoMenorNumero = document.querySelector("#numero-menor");
const elementoMaiorNumero = document.querySelector("#numero-maior");
elementoMaiorNumero.innerHTML = maiorNumero;
elementoMenorNumero.innerHTML = menorNumero;
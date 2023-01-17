const numeroSecreto = numeroAleatorio()

function numeroAleatorio() {
    return parseInt(Math.random() * 100)
}

console.log('Numero Secreto: ', numeroSecreto)
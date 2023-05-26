console.log('Acerte o numero!')

const numeroSorteado = 15

let numero = Number(input.question('Digite um numero e tente acertar...'))

while (numero !== numeroSorteado) {
    console.log('voce errou tente novamente')
    numero = Number(input.question('Digite um numero e tente acertar...'))
}

console.log('voce acertou!')
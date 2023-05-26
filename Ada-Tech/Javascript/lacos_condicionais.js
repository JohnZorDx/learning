// LAÇOS CONDICIONAIS

const input = require('readline-sync')

const numero_Sorteado = 5

let numero = Number(input.question('Qual numero voce escolhe? '))

// if (numero === numero_Sorteado) {
//     console.log ('Voce acertou')
// } else {
//     console.log('Voce errou!')
// }
while (numero !== numero_Sorteado) {
    console.log('voce errou! tente novamente.....')
    numero = Number(input.question('Qual numero voce escolhe? '))

}

console.log('voce acertou!')
// LAÇOS NUMERICOS: FOR

const input = require('readline-sync')

// O Problema
// const nota1 = Number(input.question('Informe a nota 1: '))
// const nota2 = Number(input.question('Informe a nota 2: '))
// const nota3 = Number(input.question('Informe a nota 3: '))

// let media = (nota1 + nota2 + nota3) / 3


// Acumulador, exist essas 3 formas de usar o acumulador.

let acumulador = 0
acumulador = acumulador + 10

acumulador += 2

acumulador++

console.log(acumulador)
console.clear()

// Estrutura FOR

for (let i = 0; i < 3; i++) {
    console.log('repetiçao', i)
}

console.clear()

for (let i = 10; i >= 8; i--) {
    console.log('repetiçao', i)
}

console.clear()

// Resolvendo problema inicial.

let nota
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `)) // usar o ${} se chama templet string que podemos colocar variaveis dentro
    soma = soma + nota
}

media = soma / 3
console.log(`A media do aluno é: ${soma / 3}`)

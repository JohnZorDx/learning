const entrada1 = prompt("Digite o primeiro numero")
const entrada2 = prompt("Digite o segundo numero")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert (
    'Resultado: \n' +
    '\n Soma: ' + soma +
    '\n Subtração: ' + subtracao +
    '\n Multiplicação: ' + multiplicacao +
    '\n Divisão: ' + divisao
)
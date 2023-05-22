const firstNumber = prompt('Digite o primeiro numero')
const secondNumber = prompt('Digite o segundo numero')

const x = parseFloat(firstNumber)
const y = parseFloat(secondNumber)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert (
    'Resultado: \n' +
    '\n soma: ' + soma + 
    '\n subtração: ' + subtracao +
    '\n multiplicação: ' + multiplicacao + 
    '\n Divisão: ' + divisao
)
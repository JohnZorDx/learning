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
    '\n Soma: ' + soma +
    '\n Subtração: ' + subtracao +
    '\n Multiplicação: ' + multiplicacao +
    '\n Divisão: ' + divisao  
)
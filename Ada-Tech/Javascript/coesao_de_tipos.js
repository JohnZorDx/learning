// COERÇAO (CONVERSAO) DE TIPOS

// 1 - COERÇAO EXPLICITA (Manual)

const numero = 10
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)


console.log(Number('1234'))
console.log(parseFloat('4567.8'))
console.log(parseInt('4567.8'))
console.log(Boolean(123456))
console.log(Boolean(0))


console.clear()

// 2 - Coerçao implicita (Automatica)

console.log(10 + '1') // quando è soma entende que os dois sao texto
console.log(10 - '1')
console.log(10 * '1')
console.log(10 - 'texto') // NaN - Not a number

console.clear()

// Outros exemplos

//Qual vai ser a saida desse codigo?
let n = 1 + '1' // '11'
n = n - 1
console.log(n) // 10

//Qual vai ser a saida desse codigo?
console.log(2 + 3 +4 + '5') // 95 string

//Qual vai ser a saida desse codigo?
console.log('5' + 2 + 3 + 4) // 5234 string

//Qual vai ser a saida desse codigo?
console.log('10' - '4' - '3' - 2 + '5') // 15
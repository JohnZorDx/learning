// Operadores Boleanos

// Igualdade: == ou ===
// Desingualdade: != ou !==
// Maior que: >
// Maior ou Igual: >=
// Menor que: <
// Menor ou Igual: <=

const numero = 10

console.log(numero > 20)
console.log(numero == 10)


console.log(numero == 10)
console.log(numero == '10') // compara conteudo
console.log(numero === '10') // compara conteudo e tipo (recomendado)

console.clear()

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')

console.clear()

// conjunçoes Logicas

// AND => &&

let idade = 26
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir? ', possoDirigir)

// OR => ||

idade = 40

const votoFacultativo = idade < 18 || idade >= 70

// NOT => !

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)

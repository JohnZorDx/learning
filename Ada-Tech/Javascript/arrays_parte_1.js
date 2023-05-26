// Array

// Como cria um Array

let cliente = ['Jhonathan', 27, 1.90, true, 'teste', 5]

console.log(cliente)

// Como acessar os elementos do array

console.log('O nome do cliente é: ', cliente[0])
console.log('A idade do cliente é: ', cliente[1])
console.log('A altura do cliente é: ', cliente[2])
console.log('O cliente é estudante? : ', cliente[3])

// Como obter o tamanho do array

console.log('Quantidade de elementos no Array', cliente.length)

// Percorrendo Arrays
console.clear()

for (let i = 0; i < cliente.length; i++){ // adicionando cada elemento.
    console.log(cliente[i])
}

console.clear()

for (let elemento of cliente){ // percorrendo por dentro do elemento.
    console.log(elemento)
}

console.clear()

for (let indice in cliente){ // estou percorrendo os indices do array em vez dos elementos.
    console.log(indice, cliente[indice])
}
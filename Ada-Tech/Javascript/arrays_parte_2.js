// Arrays pate 2 - Metodos de arrays (funçoes dentro de uma variavel)

const arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice

console.log(arr1[0])
console.log(arr1.slice(0, 2)) // Ele vai pegar do 0 ate o abaixo do indice 2 nesse caso, 0 e 1
console.log(arr1.slice(2)) // Se nao definir o final ele vai pegar do 2 adiante.

console.clear()
// adicionando elementos: push | unshift

console.log('Antes de adicionar: ', arr2)

arr2.push(10, 20, 30) // serve para adicionar indice dentro do array
arr2.push(40) // ele sempre joga os elementos adicionados no final do array
arr2.unshift(0) // Unshift adiciona o elemento no inicio do array

console.log('Depois de adicionar: ', arr2)

console.clear()
// Removendo elementos: pop | shift

console.log('Antes de remover com  o pop: ', arr2)

arr2.pop() // O pop serve para remover o ultimo elemento.

console.log('Depois de remover com  o pop: ', arr2)

console.clear()

console.log('Antes de remover com o shift: ', arr2)

arr2.shift() // O shift remove o primeiro elemento do array.

console.log('Depois de remover com o shift: ', arr2)

console.clear()

// Concatenando arrays: concat

console.log('Array 1: ', arr1)
console.log('Array 2: ', arr2)

console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))

console.clear()

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34) // quando retornar -1 e porque o elemento nao existe dentro do array
console.log(indiceDoElemento34)

let arr3 = [1, 2, 3, 3, 5, 3]
console.log(arr3.indexOf(3)) // vai achar o primeiro indice 3
console.log(arr3.lastIndexOf(3)) // vai imprimir o indice do ultimo elemento que encontrar.

console.clear()

// Descobrindo a existencia de um elemento: includes

console.log(arr1)
console.log(arr1.includes(12)) // o includes eu posso buscar se o elemento esta dentro do array.

console.clear()

// Invertendo arrays: reverse

console.log('Array 1 normal: ', arr1)

const arr1inverdido = arr1.reverse() // inverte a posiçao dos elementos.

console.log('Array 1 invertiddo: ', arr1)

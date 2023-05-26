// FUNÇOES

//Definiçao da funçao
function saudacao() {
    console.log('Olá, seja bem-vindo ao nosso curso basico de JavaScript!')
}

saudacao()

console.clear()

// Como enviar parametros para a funçao

function saudacao(nome, curso) {
    
    console.log(`Olá, ${nome} seja bem-vindo ao nosso curso basico de ${curso}!`)
}

saudacao('Jhonathan', 'JavaScript')

console.clear()

// Retorno da funçao

function soma(numero1, numero2) {
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log ( resultado)
console.clear()

function maiorDoQue50 (numero) {
    if (numero > 50) {
        return true
    }

    return false
}
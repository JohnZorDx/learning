const firstName = window.prompt('Qual seu primeiro nome?')
const middleName = window.prompt('Qual seu sobrenome?')
const age = window.prompt('Qual sua idade?')

const personAge = parseFloat(age)

if (age < 18) {

    alert(
    'Nome completo: ' + firstName +" "+ middleName +
    '\n idade: ' + age +
    '\n Você não tem idade suficiente para entrar!')
   
} else {
    
    alert(
        'Nome completo: ' + firstName +" "+ middleName +
        '\n idade: ' + age +
        '\n Seja bem vindo (a)')
    
}
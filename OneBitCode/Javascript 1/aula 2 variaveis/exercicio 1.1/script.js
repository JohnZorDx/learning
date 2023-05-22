const primeiroNome = prompt('Digite o primeiro nome recruta:')
const segundoNome = prompt('Digite seu segundo nome:')
const campoDeEstudo = prompt('Qual é seu campo de estudo recruta?')
const anoDeNascimento = prompt('Qual seu ano de Nascimento?')

alert (
    'Nome completo: ' + primeiroNome + " " + segundoNome +
    '\n Campo de estudos: ' + campoDeEstudo +
    '\n Idade do recruta: ' + (2023 - anoDeNascimento)
)
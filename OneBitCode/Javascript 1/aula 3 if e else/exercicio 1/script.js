const personOld = prompt('Qual sua idade?')

const old = parseFloat(personOld)

if (old >= 18) {
    alert('Você é maior de idade')
} else if (old > 12) {
    alert('Você é menor de idade')
} else if (old > 4) {
    alert('você é criança')
} else {
    alert ('..')
}
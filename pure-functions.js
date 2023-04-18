// Função impura

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parâmetro
function calculateCricumferece(radius) {
    return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Camarada',
    age: 'jovem'
}

function changeName(name) {
    person.name = name
}

// Função pura

// Exemplo 1
const calculateCricumferece = function(pi, radius) {
    return pi * (radius + radius)
}

// com arrow function
const calculateCricumferece = (pi, radius) =>
    pi * (radius + radius) 

// Exemplo 2
const changePersonName = (person, name) =>
    ({...person, name})
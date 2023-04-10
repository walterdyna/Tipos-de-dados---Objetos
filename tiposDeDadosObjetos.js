// Objetos:

// propriedades: valor
// marca: samsung
// cor: preta
// tamanho:55

// nome: Alex_Dyna
// idade:39anos
// altura:1.75m

const person = {
    forma: "Busca todo o objeto",
    name: "Alex Dyna",
    age: 28,
    sex: "Male",
    height: 1.75,
    address: "Rua: Nelson Barbosa, 2"
}

// desta forma vamos mostar todo o OBJETO cadastrado.
console.log(person)

//Forma de buscar somente uma informação no objeto
const person2 = {
    forma: "Forma de buscar somente uma informação no objeto",
    name: "Alex Dyna",
    age: 28,
    sex: "Male",
    height: 1.75,
    address: "Rua: Nelson Barbosa, 2"
}
console.log(person2.forma)

//Forma de buscar somente uma informação no objeto fracionado
const person3 = {
    forma: "Forma de buscar somente uma informação no objeto",
    name: "Alex Dyna",
    age: 28,
    sex: "Male",
    height: 1.75,
    address: {
        rua: "Rua: Nelson Barbosa",
        numero: 2,
        lado: "Ao lado da escola joao calmon"
    }
}
console.log(person3.address.lado)
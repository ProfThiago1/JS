// Exercício para cração de objetos literais e exibição de suas propriedades no console

// 1º) Crie um objeto 'Pessoa' que tenha as propriedades: nome, idade, sexo, altura e peso (em kg); [ok]

// 2º) Exiba cada propriedade no console. [ok]

const Pessoa = {
    nome:'Augustus',
    idade: "10 meses",
    sexo: 'Masculino',
    altura: "80 cm",
    peso:'10 kg'
}

console.log(`Olá, ${Pessoa.nome}. \n Você tem ${Pessoa.idade}, ${Pessoa.altura} de altura, e pesa ${Pessoa.peso}.`)
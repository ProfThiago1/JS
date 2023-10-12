/*
Criar um objeto e incluir um método nele. Após isso, fazer a chamada e exibir no console. [ok]

*/

const pessoa = {
    nome: "Emanuel Augustus",
    sobrenome: "Ferreira de Jesus",
    idade: "10 meses",
    fullname: function () {
        return this.nome + ' ' + this.sobrenome
    }
}

console.log(`Olá, ${pessoa.fullname()}. Você tem ${pessoa.idade} de idade. `)
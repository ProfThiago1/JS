/*Verificação de obrigatoriedade de voto*/

var idade = 65;
console.log(`Você tem ${idade} anos.`);

if (idade <16) {
    console.log('Não vota.')
} else if (idade <18 || idade > 65 ){ /*Aqui está implicito a condição
    que se a idade estiver no I:[16,18)U(65,inf) o voto é opcional */
    console.log('Seu voto é opcional.')
} else {                                  /*Aqui está implicito a condição
    que se a idade estiver no I:[18,65] o voto é obrigatório */
    console.log('Seu voto é obrigatório.')
}
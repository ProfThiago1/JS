let n = document.getElementById('txtn1');
let analise = document.getElementById('an');
let res = document.getElementById("res")
let num = []
analise.innerHTML= ''
analise.setAttribute('size','5')

/* Não tem problema criar a função findNumber 
antews da lista, pois a chamaremos com os devidos parâmetros quando
a lista for criada na função 'clicou' */

function findNumber(m, num){
/* Criando um if dentro de um for para verificação */
for(let i =0; i<num.length; i ++){
    if(num[i]==m){
        return true
    }

}
return false
}

function clicou() {
    let m = Number(n.value);
    /*Verificações e exibição dos alerts*/

   if (n.value =='' || n.value <1 || n.value >100){
    window.alert('[ERRO] Campo vazio ou número inválido.')
   } else if(findNumber(m, num)){ /* Aqui estamos verificando se o número existe na lista,  utilizando  e chamando a função findnumber(m, num) como dito anteriormente. */
     
    window.alert('Número já existente na lista.')
   }else{
    num.push(m);
    let option = document.createElement('option')
    option.innerHTML =` Você adicionou o número ${m}`
    analise.appendChild(option)

   }
   n.value =''
   n.focus()
   res.innerHTML=''
}

function soma() {
    let result = 0;
    for (let j = 0; j < num.length; j++) {
        result += Number(num[j]);
        
    } return result
}

function mean (){
    let media =soma()/Number(num.length)

    return media
}


res.innerHTML =''
function enviou() {
let min_value = Math.min(...num);
let max_value = Math.max(...num);
res.innerHTML +=`Você adicionou ${num.length} números.<br>`
res.innerHTML += `A soma entre os números adicionados é ${soma()}.<br>`
res.innerHTML += `A média entre os números adicionados é ${mean()}.<br>`
res.innerHTML += `O menor valor entre os números adicionados é ${min_value}.<br>`
res.innerHTML += `O maior valor entre os números adicionados é ${max_value}.<br>`

}
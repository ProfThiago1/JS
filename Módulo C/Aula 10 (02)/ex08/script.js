
/*Variáveis globais*/

let tn1 = window.document.getElementById('txtn1');
let tn2 = window.document.getElementById('txtn2');
var n1
var n2
var show = window.document.getElementById('text_r');
var nome;

function escreveu() {
 nome = window.document.getElementById("name").value;  
}

function somar() { 
    n1 = Number(tn1.value);
    n2 = Number(tn2.value);
    var sum = n1 + n2

    show.innerHTML = `Olá, ${nome}. 1\n O resultado da soma: ${n1} + ${n2} = <strong>${sum}</strong>`
}

function subtrair() { 
    n1 = Number(tn1.value);
    n2 = Number(tn2.value);
    var sub = n1 - n2
    show.innerHTML = `Olá, ${nome}. 1\n O resultado da subtração: ${n1} - ${n2} = <strong>${sub}</strong>`
    
}

function multiplicar() {
    n1 = Number(tn1.value);
    n2 = Number(tn2.value);
    var mult = n1 * n2
    show.innerHTML =`Olá, ${nome}. 1\n O resultado da multiplicação: ${n1} * ${n2} = <strong>${mult}</strong>`

}

function dividir () {
    n1 = Number(tn1.value);
    n2 = Number(tn2.value);
    var div = n1/n2
    show.innerHTML = `Olá, ${nome}. 1\n O resultado da divisão: ${n1} / ${n2} = <strong>${div}</strong>`
    
}
/* Variáveis globais abaixo */
let agora = new Date();
let hora = agora.getHours();
let min = agora.getMinutes();
let corpo = window.document.getElementsByTagName('body')[0];
let img = document.querySelector('div#imagem');
let tx = document.getElementById('txt_img');
/* Conjunto de condições */
if (hora >= 0 && hora < 12) {
    /*Variáveis locais */
    corpo.style.background= 'rgb(70, 142, 216)'
    tx.innerHTML =`Bom dia! São <strong>${hora}h ${min}min</strong>`
    img.innerHTML = '<img src="imagens/dia.jpg" class = "redonda" alt="café representando o dia"></img>'
} else if (hora >= 12 && hora <= 18) {
    corpo.style.background= 'rgb(255, 165, 100)'
    tx.innerHTML =`Boa tarde! São <strong>${hora}h ${min}min</strong>`
    img.innerHTML = '<img src="imagens/tarde.jpg" class = "redonda" alt="por do sol representando a tarde"></img>'
} else if (hora > 18 && hora <23 ){
    corpo.style.background ='rgb(25, 25, 112)'
    tx.innerHTML =`Boa noite! São <strong>${hora}h ${min}min</strong>`
    img.innerHTML = '<img src="imagens/noite.jpg" class = "redonda" alt="céu estrelado representando a noite"></img>'
}
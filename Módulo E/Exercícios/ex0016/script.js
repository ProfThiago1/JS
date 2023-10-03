

function clicou () {
    var n1 = document.getElementById('txtn1');
    var res = document.querySelector('div#res');

    
    if (n1.value.length === 0) {
        window.alert('Digite um número válido.')
        
    } else {
        let c_1 = Number(n1.value);        
        res.innerHTML = "Aqui está atabuada: <br>"
    for (let i = 0; i<=10; i++) {
        let times = c_1*i
        res.innerHTML += `${c_1}x${i} = ${times} <br>`;
        
    }
        

    } res.innerHTML += `🏁`  





}
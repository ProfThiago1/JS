function clicou () {
    var n1 = document.getElementById('txtn1');
    var n2 = document.getElementById('txtn2');
    var pass = document.getElementById('txtn3');
    var res = document.querySelector('div#res');

    
    if (n1.value.length === 0 || n2.value.length === 0 || pass.value.length <= 0) {
        window.alert('Digite um número válido.')
        
    } else {
        let c_1 = Number(n1.value);
        let p = Number(pass.value);
        let c_2 = Number(n2.value);
        
        res.innerHTML = "Contando: <br>"
        if (p<=0) {
        window.alert('[ERRO] tomaremos passo = 1')
        p=1
        }


        if (c_1<c_2) {
                for (let i = c_1; i <= c_2; i+= p){
                 res.innerHTML += `${i} 👉`   ;
  
                }

        } else {
            for (let i = c_1; i >= c_2; i -= p) {
                res.innerHTML += `${i} 👉`;
                
            }
        
        }       
    } res.innerHTML += `🏁`  





}
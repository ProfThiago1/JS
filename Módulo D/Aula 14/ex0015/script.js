function clicou () {
    var data = new Date();
    var ano = data.getFullYear ();
    var fano = document.getElementById('txtage');
    var res = document.querySelector('div#res');
    var name = document.getElementById('txtnome').value;
    
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('Erro. Verifique seus dados e tente novamente.')
        
    } else {
        var fsex = document.getElementsByName('sex');
        var idade = ano - Number(fano.value);
        var gênero = ''
        var img = document.createElement('img'); //Adicionando um elemento 
        img.setAttribute('id','foto');
        img.setAttribute('class','redonda');

        if (fsex[0].checked) {
            gênero = 'uma Mulher'

            // Condições para idade
            if (idade>=1 && idade <=12) {
                img.setAttribute('src','imagens/mcriança.jpg');
                
            } else if (idade <50){
                img.setAttribute('src','imagens/mulheradulta.jpg');
            } else if (idade > 50) {
                img.setAttribute('src','imagens/midosa.jpg');
            }

        } else if (fsex[1].checked) {
            gênero ='um Homem'
            if (idade>=1 && idade <=12) {
                img.setAttribute('src','imagens/hcriança.jpg');
                
            } else if (idade <50){
                img.setAttribute('src','imagens/hadulto.jpg');
            } else if (idade > 50){
                img.setAttribute('src','imagens/hidoso.jpg');
            }
        }
        res.innerHTML =`Olá, ${name}. Você tem ${idade} anos.`
        res.appendChild(img)
        img.style.marginTop = '10px'

    }





}
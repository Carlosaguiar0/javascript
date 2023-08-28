function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector( 'div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe_homem1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_homem1.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_homem1.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_homem1.png')
            }

        } else if  (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe_mulher1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_mulher1.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_mulher1.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso_mulher1.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
    

}

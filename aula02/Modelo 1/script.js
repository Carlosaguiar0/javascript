function carregar () {
    var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById('imagem')
    var data = new Date()
    
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        Img.src = 'manha.jpg'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
    } else {
        img.src = 'noite.jpg'
    }

}
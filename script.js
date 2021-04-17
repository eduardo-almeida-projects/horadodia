function carregar() {
    var corpo = window.document.getElementById('corpo')
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min} horas`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        corpo.style.background = 'tan'

    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        corpo.style.background = '#d98364'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        corpo.style.background = '#32383f'
    }
}

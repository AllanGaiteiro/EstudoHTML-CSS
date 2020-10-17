
/// Variaveis /////
var obj = document.getElementById('bola')
var movBaixo = movCima = movDir = movEsq = false
var movbola
var mover = false
var posX = 60 
var posY = 240
var vel = 4
window.addEventListener('keydown', function (e){
    let tcl = e.keyCode
    //alert(tcl)
    if (tcl == 87) {
        movCima = true
    }
    if (tcl == 83) {
        movBaixo = true
    }
    if (tcl == 65) {
        movEsq = true
    }
    if (tcl == 68) {
        movDir = true
    }    
})
window.addEventListener('keyup', function (e){
    let tcl = e.keyCode
    if (tcl == 87) {
        movCima = false
    }
    if (tcl == 83) {
        movBaixo = false
    }
    if (tcl == 65) {
        movEsq = false
    }
    if (tcl == 68) {
        movDir = false
    }    
})
function atualizar() {
    if (movCima) {
        posY += -vel
    }
    if (movBaixo) {
        posY += vel
    }
    if (movDir) {
        posX += vel
    }
    if (movEsq) {
        posX += -vel
    }
    posX = Math.floor(Math.max(0,Math.min(800-180,posX)))
    posY = Math.floor(Math.max(40,Math.min(800-180,posY)))
    obj.style.top = `${posY}px`
    obj.style.left = `${posX}px`
}
function movimentar(){ 
    if (mover) {
        alert('Voce nao pode mais mover')
        clearInterval(movbola)
        mover = false
    } else {
        alert('click no W,A,S,D')
        movbola = setInterval(atualizar,1000/60)
        mover = true
    }
    
}


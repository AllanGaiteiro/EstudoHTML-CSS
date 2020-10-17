var cnv = document.querySelector('canvas')
var ctx = cnv.getContext('2d')
cnv.width = 600
cnv.height = 400

var bola = {x: cnv.height/2 - 25,y:cnv.width/2 - 25,width: 50, height: 50, color: 'blue'}
var raquete = {x: cnv.width/2 - 50,y:cnv.height- 50,width: 100, height: 40, color: 'white',movCim: false, movBax: false, movDir: false,movEsq: false }

var dx = 2
var dy = 2

function moverBola(){
    bola.x += dx
    bola.y += dy
    // metodo: 1
    /*
    if (bloco.x >= cnv.width - bloco.width || bloco.x <= 0) {
        dx *= -1
    }
    if (bloco.y >= cnv.height - bloco.height || bloco.y <= 0) {
        dy *= -1  
    }
    */
    // metodo: 2
    //dx
    dx = bola.x >= cnv.width - bola.width || bola.x <= 0 ? dx *= -1 : dx *= 1
    // dy
    dy = bola.y >= cnv.height - bola.height || bola.y <= 0 ? dy *= -1 : dy *= 1
}
function moverRaquete(){
    /*if (raquete.movCim) {
        raquete.y -= 5
    }
    if (raquete.movBax) {
        raquete.y += 5
    }
    */
    if (raquete.movEsq) {
        raquete.x -= 5
    }
    if (raquete.movDir) {
        raquete.x += 5
    }
    raquete.x = Math.max(0,Math.min(cnv.width - raquete.width,raquete.x))
}
function loadbola(){
    ctx.fillStyle = bola.color
    ctx.fillRect(bola.x,bola.y,bola.width,bola.height)
    moverBola()
}
function loadRaquete(){
    ctx.fillStyle = raquete.color
    ctx.fillRect(raquete.x,raquete.y,raquete.width,raquete.height)
}
function update(){
    moverRaquete()
}

function render(){
    ctx.clearRect(0,0,cnv.width,cnv.height)
    loadbola()
    loadRaquete()
}

function loop(){
    update()
    render()
    requestAnimationFrame(loop)
}
document.addEventListener('keydown', function (e){
    let tecla = e.keyCode
    //alert(tecla)
    switch (tecla) {
        /*case 87:///  W
            raquete.movCim = true
            break;
        case 83://// S
            raquete.movBax = true
            break;
        */case 65 :/// A
            raquete.movEsq = true
            break;/// D
        case 68:
            raquete.movDir = true
            break;
        default:
            break;
    }
    
})
document.addEventListener('keyup', function (e){
    let tecla = e.keyCode
    //alert(tecla)
    switch (tecla) {
        /*case 87: /// W
            raquete.movCim = false
            break;
        case 83: ////S
            raquete.movBax = false
            break;
        */case 65 :/// A
            raquete.movEsq = false
            break;
        case 68: /// D
            raquete.movDir = false
            break;
    

        default:
            break;
    }
    
})
loop()
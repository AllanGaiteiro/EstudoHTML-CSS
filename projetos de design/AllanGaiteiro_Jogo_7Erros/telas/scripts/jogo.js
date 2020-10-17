var acertos = -1;

function marcarErro(ref) {
  //alert('deuCerto')
  var erro = document.getElementsByClassName(ref);
  //alert(erro.length)
  for (var i = 0; i < erro.length; i++) {
    var erAtual = window.getComputedStyle(erro[i]).getPropertyValue("opacity");

    if (erAtual == 0) {
      erro[i].style.opacity = 1;
      atualizarAcertos();
    }
  }
}

////// como era 

function atualizarAcertos() {
  acertos+= 0.5;
  console.log(acertos);
  var marcadores = document.getElementsByClassName('int--er');
  var indAcertos = Math.round(acertos);
  marcadores[indAcertos].style.background = "#FF9900";
  tocarSomAcerto();
  mostrarTelaVit();
}
function mostrarTelaVit() {
  if (acertos >= 6) {
    var telaVit = document.getElementById('telaVit');
    telaVit.style.opacity = 1;
    telaVit.style.top = 0;
  }
}



function menuClick(){
    var menu = document.getElementById('btnMenu')
    var nav = document.querySelector('div.nav')

    nav.classList.toggle('menuRespons');
    menu.appendChild(nav) 
}

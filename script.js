let janelinhaLateral = document.querySelector("div");
let menuHamburguer= document.querySelector("section")

function abrirMenu() { 
    janelinhaLateral.classList.toggle("abrirMenu");
}

menuHamburguer.onclick=abrirMenu;
let icon = document.querySelector(".img");
let menu = document.querySelector(".navegador-lateral");
let fundo = document.querySelector(".fundo-preto");

function f() {
   
    menu.classList.toggle('active');
    fundo.classList.toggle("display");

}


icon.addEventListener("click", f); 
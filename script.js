//Global Variablea
const ptags = document.getElementsByTagName("P");
const box = document.getElementsByClassName("cell");

//Onload make all Xs and Os invisible
window.addEventListener('load', function() {
    for (let i = 0; i <ptags.length; i++){
        ptags[i].setAttribute("style", "opacity: 0;")
    }
})

//When you click on the box game starts

function showMove(){

}


box.addEventListener("click", showMove());
// Lista på alla element
const elementAntal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");
const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");
const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

var antal;
var frukt;
// Användaren klickar på skicka
elementSkicka.addEventListener("click", ruta);

function ruta() {
    elementFel.innerHTML = "";
    antal = elementAntal.value;
    frukt = elementFrukt.value;

    if (antal == "") {
        elementFel.innerHTML += "<br>Du har inte valt antal!";
    }

    if (frukt == "") {
        elementFel.innerHTML += "<br>Du har inte valt frukt!"
    }
    
    if (frukt !== "äpplen") { // !== Betyder om det "inte" är
        elementFel.innerHTML += "<br>Välj äppplen istället för " + frukt;
        
    }

    if (antal < 1) {
        elementOutput.innerHTML = "Doktorn säger: ett " + frukt + " om dagen håller doktorn borta"
    }

    if (antal = 1) {
        elementOutput.innerHTML = "Doktorn säger: ett " + frukt + " om dagen håller doktorn borta"
    }

    if (antal = 2) {
        elementOutput.innerHTML = "Doktorn säger: två " + frukt + " om dagen håller doktorn borta"
    }

    if (antal > 2) {
        elementOutput.innerHTML = "Doktorn säger: två " + frukt + " om dagen håller doktorn borta"
    }

}

elementRadera.addEventListener("click", radera)
    
function radera() {
    elementOutput.textContent.value = 0;
}
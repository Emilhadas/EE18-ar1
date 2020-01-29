// Globala variabler och konstanter 
var frågor = [
    "Stradivari slutar tilverka sina fioler, då han dör.",
    "En hjärtsjuk i Polen får ett grishjärta med dör inom 24 timmar",
    "Åre är först ut med Sveriges första skidlift",
    "George Orwell författar sin framtidsroman 1984",
    "Gordie Howe fyller 52 år och tycker det är dags att slut aspela ishocky. I NHL.",
    "Filmen När lammen tystnar har premiär",
    "Drömmar uttolkas och analyseras i Freuds verk Drömtydning",
    "AB Tipstjänst inträttas. Överskottet tillfaller idrottsrörelsen",
    "Kocklandslaget vinner sitt första guld i matlagnings-OS",
    "Hoa-Hoa Dahlgren uppmanar till \"barnlediga pappa!\" med spädbar i famnen."
];
var årtal = [
    1737, 1992, 1940, 1948, 1980, 1991, 1900, 1934, 2000, 1978
];
var slumptal,
poäng = 0,
varv = 10;

const elementKontainer = document.querySelector(".okontainer")
const elementFrågeRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("#årtal");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoängRuta = document.querySelector("#poäng");
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNed = document.querySelector("#ned");


// Skapa en funktion för att slumpa fram en fråga
function nyFråga() {
    // Slumptal 0-9
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);
    
    elementFrågeRuta.value = (frågor[slumptal]);
    elementÅrtalRuta.value = "";

    // Dölj tummarna
    elementTummeUpp.style.display = "none";
    elementTummeNed.style.display = "none";
}
// Kör funktionen
nyFråga();



// Dölj tummarna
elementTummeUpp.style.display = "none";
elementTummeNed.style.display = "none";

// Plocka fram en ny fråga, när man klickar på knappen nästa fråga!
elementKnappNästa.addEventListener("click", nyFråga);

// Kolla om man svarat rätt eller fel årtal
elementKnappSkicka.addEventListener("click", kollaSvaret);

// Skapa en funktion för att kolla om svaret är rätt
function kollaSvaret() {
    // Läsa av svaret
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    // Det rätta årtalet
    var årtalet =  årtal[slumptal];

    // Kolla om svaret är rätt
    if (svaret == årtalet) {
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";
        poäng++;
        
    } else {
        elementTummeNed.style.display = "block";
        elementTummeUpp.style.display = "none";
        poäng--;
    }

    // Skriv ut poäng
    elementPoängRuta.value = poäng;

    // Antal varv
    varv--;

    if (varv == 0) {
        if (poäng == 10) {
            elementKontainer.innerHTML = "Grattis! Du hade rätt på alla frågor!"
        } else {
            elementKontainer.innerHTML = "Du har gissat 10 gånger!"
        }
        
    }
}
    
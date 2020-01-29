// element vi använder 
const elementRutaTal1 = document.querySelector("#tal1");
const elementRutaTal2 = document.querySelector("#tal2");
const elementRutaTal3 = document.querySelector("#tal3");

const elementKnappPlus = document.querySelector("#plus")
const elementKnappMinus = document.querySelector("#minus")
const elementKnappGånger = document.querySelector("#gånger")
const elementKnappDividera = document.querySelector("#dividera")

const elementRutaResultat = document.querySelector("#resultat")

// Lysna på om man klickar på + knappen
elementKnappPlus.addEventListener("click", summera);
function summera() {
    // Läs av tal1 & tal2
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    // Räkna ut tal1 & tal2
    var summa = tal1 + tal2;

    // Skriver ut svaret i resultat rutan
    elementRutaResultat.value = summa; 
}
elementKnappMinus.addEventListener("click", minimera);
function minimera() {
    // Läs av tal1 & tal2
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    // Räkna ut tal1 & tal2
    var summa = tal1 - tal2;

    // Skriver ut svaret i resultat rutan
    elementRutaResultat.value = summa; 
}
elementKnappGånger.addEventListener("click", multiplisera);
function multiplisera() {
    // Läs av tal1 & tal2
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    // Räkna ut tal1 & tal2
    var summa = tal1 * tal2;

    // Skriver ut svaret i resultat rutan
    elementRutaResultat.value = summa; 
}
elementKnappDividera.addEventListener("click", delat);
function delat() {
    // Läs av tal1 & tal2
    var tal1 = Number(elementRutaTal1.value);
    var tal2 = Number(elementRutaTal2.value);

    // Räkna ut tal1 & tal2
    var summa = tal1 / tal2;

    // Skriver ut svaret i resultat rutan
    elementRutaResultat.value = summa; 
}
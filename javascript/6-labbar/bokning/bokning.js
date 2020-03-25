// Start 
// Element vi använder
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="tillägg"]');
const elementKampanjkod = document.querySelector("#kampanjkod");
const elementKnapp = document.querySelector('button');
const elementP = document.querySelector('p');

// Läsa av bokningen 
elementKnapp.addEventListener("click", räknaUt);

function räknaUt() {
    var kostnad = 0, rumspris = 0;

    // Vilket typ av rum har valts?
    if (elementRum[0].checked == true) {
        rumspris = rumspris + 500;
    }
   if (elementRum[1].checked == true) {
        rumspris = rumspris + 800;
    }
   if (elementRum[2].checked == true) {
        rumspris = rumspris + 1200;
    }

    // Hur många nätter har valts?
    var antalNätter = elementAntalNätter.value;
    kostnad = rumspris * antalNätter;

    // Vilka tillägg har valts?
    if (elementTillägg[0].checked == true) {
        kostnad = kostnad + 50;
    }
    if (elementTillägg[1].checked == true) {
        kostnad = kostnad + 200;
    }
    if (elementTillägg[2].checked == true) {
        kostnad = kostnad + 100;
    }
    
    
    var kampanjkod = elementKampanjkod.value;
    if (kampanjkod == "sportlov20") {
        kostnad = kostnad * 0.8;
    }
    if (kampanjkod == "sommar2020") {
        kostnad = kostnad * 0.85;
    }
    if (kampanjkod == "Nti2020") {
        kostnad = kostnad * 0.8;
    }


    console.log(kostnad);
    // Visa kostnaden
    
}


// Räkna ut kostnaden
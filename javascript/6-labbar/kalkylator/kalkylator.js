// Element vi använder
const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

// Blobala variabler
var minneA = "",
    minneB = ""
resultat = 0, operator = "";

elementKol4.addEventListener("click", tryck);

function tryck(event) {
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent)

        // Vilken knapp vi trycker på
        var knapp = event.target;

        // Gör olika saker beroende på kanpp

        switch (knapp.dataset.meta) {
            case "tal":
                // Lagra talet i minnet
                minneA += knapp.textContent;
                // Skriv ut i fönstret
                elementFönster.value += knapp.textContent;
                break;

            case "+":
                // Rensar textfältet
                elementFönster.value = "";
                // flytta över talet till minne B
                minneB = minneA;
                // Rensar minne A
                minneA = "";
                operator = "+";
                break;

            case "-":
                // Rensar textfältet
                elementFönster.value = "";
                // flytta över talet till minne B
                minneB = minneA;
                // Rensar minne A
                minneA = "";
                operator = "-";
                break;
            case "*":
                // Rensar textfältet
                elementFönster.value = "";
                // flytta över talet till minne B
                minneB = minneA;
                // Rensar minne A
                minneA = "";
                operator = "*";
                break;
            case "/":
                // Rensar textfältet
                elementFönster.value = "";
                // flytta över talet till minne B
                minneB = minneA;
                // Rensar minne A
                minneA = "";
                operator = "/";
                break;

            case "C":
                elementFönster.value = "";
                minneA = "";
                minneB = "";
                break;

                // Summera som tal
            case "=":
                switch (operator) {
                    case "+":
                        resultat = Number(minneA) + Number(minneB);
                        elementFönster.value = resultat;
                        break;

                    case "-":
                        resultat = Number(minneB) - Number(minneA);
                        elementFönster.value = resultat;
                        break;

                    case "*":
                        resultat = Number(minneA) * Number(minneB);
                        elementFönster.value = resultat;
                        break;

                    case "/":
                        resultat = Number(minneA) / Number(minneB);
                        elementFönster.value = resultat;
                        break;



                    default:
                        break;
                }



                default:
                    break;
        }

        console.log("minneA=", minneA, "minneB=", minneB);
        console.log("resultat=", resultat);

    }
}
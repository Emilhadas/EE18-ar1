/* Imports the elements that we use from the html file */
const galleryImage = document.querySelector ("#gallery-image");

var number = 1;
/* First function for the next button*/
function next() {
    number = number - 1;
    if (number == 0) {
        number = 3;
    }
    galleryImage.src = "../bilder/image" 
    + number + ".jpg";
}
/* Second function for the next button*/
function prev() {
    number = number - 1;
    if (number == 0) {
        number = 3;
    }
    galleryImage.src = "../bilder/image" 
    + number + ".jpg";
}


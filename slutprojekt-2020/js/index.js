    var i = 0; // Starting point
	var images = [];
    var time = 5000;

	// List of the images we use
	images[0] = './bilder/bild1.jpg';
	images[1] = './bilder/bild4.jpg';
	images[2] = './bilder/bild5.jpg';
	images[3] = './bilder/bild1.jpg';

	// The function that makes the images loop
	function changeImages(){
		document.drone.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImages()", time);
	}

	window.onload = changeImages; 


    var i = 0; // Start punkt
	var images = [];
    var time = 5000;

	// Image List
	images[0] = './bilder/bild1.jpg';
	images[1] = './bilder/bild4.jpg';
	images[2] = './bilder/bild5.jpg';
	images[3] = './bilder/bild1.jpg';

	// Byter bilden
	function changeImg(){
		document.test.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;


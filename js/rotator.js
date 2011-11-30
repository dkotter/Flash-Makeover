function theRotator( id ) {
	//Set the opacity of all images to 0
	var jqElem = $( '#' + id );
	jqElem.find('ul li').css({opacity: 0.0});
        
	//Get the first image and display it (gets set to full opacity)
	jqElem.find('ul li:first').css({opacity: 1.0});
        
	var rand = Math.round(Math.random() * (3000 - 500)) + 2500;
	//Call the rotator function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval(rotate,rand);

	function rotate() {    
		//Get the first image
		var current = (jqElem.find('ul li.show') ?  jqElem.find('ul li.show') : jqElem.find('ul li:first'));
    
		//Get next image, when it reaches the end, rotate it back to the first image
		var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jqElem.find('ul li:first') :current.next()) : jqElem.find('ul li:first'));    
        
		//Set the fade in effect for the next image, the show class has higher z-index
		next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000);
    
		//Hide the current image
		current.animate({opacity: 0.0}, 1000)
		.removeClass('show');
	};
}
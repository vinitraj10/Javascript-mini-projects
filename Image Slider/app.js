$(document).ready(function(){

  var img = [1,2,3];
  	a=0;
  	$( "#c2" ).click(function() {
    // Animation complete
    	a=a-1;
    	if(a<0)
    		a=img.length-1;
    	$('#c3').attr('src','img/'+img[a]+'.jpg');
	});

  	$( "#c1" ).click(function() {
    	a=a+1;
    	if(a>img.length-1)
    		a=0;
    	$('#c3').attr('src','img/'+img[a]+'.jpg');
	});

});

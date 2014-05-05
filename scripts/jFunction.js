$(function() {
// jQuery page init function

 	//parse the raw HTML 
  var clips = $('section').remove();

  showClip(clips,0);
});



var showClip = function(clips, i) {
	$("div#clip p, div.navbutton").detach();

  var theClip = clips[i];
  //get the text and media from the clip and prep it for display
  var theBG = $(theClip).attr('data-background');
  $('body').css('background', 'url(' + theBG + ')');
	$(theClip).find('p').appendTo("div#clip");
  

	$('<div>', {
		id: 'nextButton', class: 'navbutton',
		click: function() {
			i++; showClip(clips,i);
		}
	}).text('next').insertAfter("div#clip");



}


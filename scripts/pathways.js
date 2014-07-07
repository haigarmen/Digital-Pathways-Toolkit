// master bg audio for whole deck:

// FIX THIS: this should NOT be within a slide; it should be explicitly written in before the first slide,
//   if indeed this is the deck-level audio. So the selector needs to be different
//   NOTHING CAN STOP THE AMBIENT AUDIO.

jQuery(document).bind('deck.init', function(event, from, to) {
  var audioclip = jQuery('section.deck-current audio');
  var fadetime = audioclip.data('fadein') || 1000;
  audioclip.prop('volume', 0);
  audioclip.trigger('play');
  audioclip.animate({volume: 1}, fadetime);
});

// FIX THIS TOO: Slides and Subslides are treated equally by deck (previous, current, etc.), so it's easy enough to 
//   trigger new audio each time you advance, but much trickier to stop something playing -- because "previous" means
//   "immediately previous" regardless of whether it's a slide or a subslide. If we've advanced 4 subslides, how do 
//   we tell if we've gone to the point where we need to kill the slide-level audio -- ask the level explicitly?
//   Work-aroundable perhaps if the audio clips are all really short?

// How about jQuery('.deck-before audio').get(-1)  -- the last matching node: fade that out.


// Aaaaaaand... we need a way to trigger first-slide audio automatically.

jQuery(document).bind('deck.change', function(event, from, to) {
  var lastclip = jQuery('.deck-previous audio');
  var audioclip = jQuery('.deck-current audio');
  var fadetime = audioclip.data('fadein') || 1000;
  audioclip.prop('volume', 0);
  audioclip.trigger('play');
  lastclip.animate({volume: 0}, fadetime);
  audioclip.animate({volume: 1}, fadetime);

});


//btw... good docs here: http://codesamplez.com/programming/control-html5-audio-with-jquery


// hide older subslides as the current one appears.
// this might work better with deck.beforeChange instead???
jQuery(document).bind('deck.change', function(event, from, to) {
  jQuery("section.ephemeral  section.deck-before").hide();
  jQuery("section.ephemeral  section.deck-current").hide();
});

//jQuery("section.deck-current").show();
//setTimeout(function() {
  //alert('Moving from slide ' + from + ' to ' + to);
  //jQuery(".showlater").show();
  //var audioclip = jQuery('.deck-current audio').get(0);
  //audioclip.play();
 //}, 4000);



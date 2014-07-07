// master bg audio for whole deck:
jQuery(document).bind('deck.init', function(event, from, to) {
  var jaudioclip = jQuery('.deck-current audio');

  var fadein = jaudioclip.data('fadein') || 1000;
  jaudioclip.prop('volume', 0);
  jaudioclip.trigger('play');
  jaudioclip.animate({volume: 1}, fadein);

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

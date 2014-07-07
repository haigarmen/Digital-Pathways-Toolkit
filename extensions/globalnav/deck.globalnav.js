/*!
Deck JS - deck.globalnav
Hacked in by JMax
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds a (current)/(total) style status indicator to the deck.
*/
(function($, undefined) {
  var $document = $(document);
  var rootCounter;

  var updateCurrent = function(event, from, to) {
    var options = $.deck('getOptions');
    var currentSlideNumber = to + 1;
    if (!options.countNested) {
      currentSlideNumber = $.deck('getSlide', to).data('rootSlide');
    }
    $(options.selectors.statusCurrent).text('foo');
    $(.deck-globalnav).text('foo');
  };


})(jQuery, 'deck');


var hideaway = $('#hideaway');

$('#im').on('click', function () {
  
  if (hideaway.hasClass('hidden')) {
    hideaway.removeClass('hidden');
    setTimeout(function () {
      hideaway.removeClass('visuallyhidden');
    }, 20);
  } else {
    hideaway.addClass('visuallyhidden');
    hideaway.one('transitionend', function(e) {
      hideaway.addClass('hidden');
    });
  }

});

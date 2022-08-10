$(function() {
  $('#mv_fadein').fadeIn(1000);

    var $win = $(window),
    $body = $('body'),
    $header = $('header'),
    headerHeight = $header.outerHeight(),
    headerPos = $header.offset().top,
    fixedClass = 'fixed';

    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > headerPos+headerHeight ) {
        $header.addClass(fixedClass);
        $body.css('margin-top', headerHeight);
      } else {
        $header.removeClass(fixedClass);
        $body.css('margin-top', '0');
      }
    });
});

window.onload = function() {
  var nav = document.getElementById('wrapper');
  var hamburger = document.getElementById('hamburger');
  var bg = document.getElementById('bg');

  hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');
  });
  bg.addEventListener('click', function() {
      nav.classList.remove('open');
  })
}
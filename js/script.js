$(function() {
    $('#mvtext_wrap').fadeIn(1000);

    var $win = $(window),
    $body = $('body'),
    $nav = $('nav'),
    navHeight = $nav.outerHeight(),
    navPos = $nav.offset().top,
    fixedClass = 'is-fixed';

    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > navPos+navHeight ) {
        $nav.addClass(fixedClass);
        $body.css('margin-top', navHeight);
      } else {
        $nav.removeClass(fixedClass);
        $body.css('margin-top', '0');
      }
    });

      // #で始まるアンカーをクリックした場合に処理
      $('a[href*="#"]').click(function() {
         // スクロールの速度
         var speed = 600; // ミリ秒
         // アンカーの値取得
         var href= $(this).attr("href");
         // 移動先を取得
         var target = $(href == "#" || href == "" ? 'html' : href);
         // 移動先を数値で取得
         var position = target.offset().top - 100;
         // スムーススクロール
         $('body,html').animate({scrollTop:position}, speed, 'swing');
         return false;
      });
});
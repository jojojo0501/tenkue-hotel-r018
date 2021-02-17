// アコーディオンの実装はこちらに記述してください


jQuery(function ($) {
  $('.js-accordionLink').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(100);
    $(this).next().children().fadeToggle(100);
    /*矢印の向きを変更*/
    $(this).toggleClass('is-open', 0);
    $(this).next().toggleClass('is-open', 0);
    $(this).next().children().toggleClass('is-open', 0);

    return false;
  });
  });
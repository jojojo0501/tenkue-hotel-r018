// アコーディオンの実装はこちらに記述してください

// $(function(){
//   $('.js-menu__item__link').each(function(){
//       $(this).on('click',function(){
//           $("+.submenu",this).slideToggle(200);
//           $(this).toggleClass('open', 200);
//           return false;
//       });
//   });
// });

jQuery(function ($) {
  $('.js-menu__item__link').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(300);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 0);
    $(this).next().toggleClass('open', 0);
    return false;
  });
  });
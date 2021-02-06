// ハンバーガーメニューの実装はこちらに記述してください
// $('.js-button-Hamburger').on('click', () => {
//   $('js-button-Hamburger').toggleClass('close');
//   $('js-nav-cover').fadeToggle(500);
// });

$('.c-burger__btn').on('click',function(){
$('body').toggleClass('open');
$('.l-nav__wrapper').fadeToggle(500);
});
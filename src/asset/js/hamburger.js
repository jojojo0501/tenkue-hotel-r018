// ハンバーガーメニューの実装はこちらに記述してください
$('.js-button-Hamburger').on('click', () => {
  $('js-button-Hamburger').toggleClass('close');
  $('js-nav-cover').fadeToggle(500);
});


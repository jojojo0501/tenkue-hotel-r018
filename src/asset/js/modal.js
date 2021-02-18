$(function () {
  // モーダルのボタンをクリックした時
  $('.js-modal-opener').on('click', function() {
    // thisでクラスを指定
    var i = $('.js-modal-opener').index(this); 
    $('.js-modal-element').eq(i).fadeIn(300);
    $('html,body').css('overflow', 'hidden');
    console.log(i);
  });



  $('.js-modal-closer, .js-modal-cover').on('click', function() {
    $('html,body').removeAttr('style');
    $('.js-modal-element').fadeOut(300);
    return false;
  });
});

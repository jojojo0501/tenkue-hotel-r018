// $('.js-modal-opener').each(function() {
//   $(this).on('click', function() {
//       var target = $(this).data('target');
//       var modal = document.getElementById(target);
//       console.log(target);
//       $(modal).fadeIn(300);
//       $('html,body').css('overflow', 'hidden');
//       return false;
//   });
// });


// $(function () {
//   // モーダルのボタンをクリックした時
//   $('.js-modal-opener').on('click', function() {
//     var elm = $('.js-modal-opener');
//     var i = $('.p-modal').index(elm); 
//     $('.js-modal-element').eq(i).fadeIn(300);
//     console.log(i);
//   });

var target = $('.js-modal-opener');
$(function () {
target.on("click", function () {
  var btnIndex = $(this).index(); // .js-modalが何番目の要素かを取得（数字を取得）
  $('.l-col3 .js-modal-element').eq(btnIndex).fadeIn(300); // .modal_area内の'btnIndex'番目の要素をフェードインで表示
  console.log(btnIndex);
});

  $('.js-modal-closer, .js-modal-cover').on('click', function() {
    $('html,body').removeAttr('style');
    $('.js-modal-element').fadeOut(300);
    return false;
  });
});

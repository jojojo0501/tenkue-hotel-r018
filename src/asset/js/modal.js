// モーダルの実装はこちらに記述してください
// $('js-modal-opener').on('click', () => {
//   $('js-modal-element').toggleClass('is-show');
//   $('body').toggleClass('is-modal-hidden');
// });

$(function() {
  $('.js-modal-opener').on('click', function() {
    //  ボタンをクリックしたら、クリックしたい要素のdata属性を取得
    let target = $(this).data('p-modal');
    //  上記で取得した要素と同じclass名を持つ要素を取得
    let modal = document.querySelector('.' + target);
    //  その要素にclassを付け替える
    $(modal).toggleClass('is-show');
  });
});
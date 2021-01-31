// 画像スライダーの実装はこちらに記述してください
$(function(){
  //スライドの画像の数を取得
$('.p-top-slider').each(function(){
  let $slides = $(this).find('.slider-item');
  let slideNum = $slides.length;
  let currentIdx = 0;　//何番目か

  //最初の画像をフェードイン
  $('.slider-item').eq(currentIdx).fadeIn();
  //３秒後に次のスライドを表示
  setInterval(NextSlide,3000);
  
  //次のスライドを表示するメソッド
  function NextSlide(){
    let nextIdx = currentIdx + 1;
    //最後のスライドの場合は最初に戻る
    if (nextIdx > (slideNum - 1)){
      nextIdx = 0
    }
    //現在のスライドをフェードアウト
    $('.slider-item').eq(currentIdx).fadeOut();
    $('.slider-item').eq(nextIdx).fadeIn();
    currentIdx = nextIdx;
  }
});
});
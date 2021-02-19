// 画像スライダーの実装はこちらに記述してください
$(function(){
  //スライドの画像の数を取得
  $('.p-top__slider').each(function(){
    let $slides = $(this).find('.p-top__slider__item');
    let slideNum = $slides.length;
    let currentIdx = 0;　//何番目か

    //最初の画像をフェードイン
    $('.p-top__slider__item').eq(currentIdx).fadeIn(2000);
    //３秒後に次のスライドを表示
    setInterval(NextSlide,4000);
    
    //次のスライドを表示するメソッド
    function NextSlide(){
      let nextIdx = currentIdx + 1;
      //最後のスライドの場合は最初に戻る
      if (nextIdx > (slideNum - 1)){
        nextIdx = 0
      }
      //現在のスライドをフェードアウト
      $('.p-top__slider__item').eq(currentIdx).fadeOut(2000);
      $('.p-top__slider__item').eq(nextIdx).fadeIn(2000);
      currentIdx = nextIdx;
    }
  });
});
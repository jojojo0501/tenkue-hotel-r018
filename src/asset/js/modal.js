$('.js-modal-opener').each(function() {
  $(this).on('click', function() {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn(300);
      $('html,body').css('overflow', 'hidden');
      return false;
  });
});

$('.js-modal-closer, .js-modal-cover').on('click', function() {
  $('html,body').removeAttr('style');
  $('.js-modal-element').fadeOut(300);
  return false;
});

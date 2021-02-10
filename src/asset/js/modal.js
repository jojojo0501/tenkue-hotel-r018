$( '.js-modal-opener' ).each( function() {
  $( this ).on( 'click', function() {
       var target = $( this ).data( 'target' );
       var modal = document.getElementById( target );
       $( modal ).fadeIn( 300 );
       return false;
  });
});

// ウィンドウを閉じる
$( '.js-modal-closer' ).on( 'click', function() {
 $( '.js-modal-element' ).fadeOut( 300 );
 return false;
});
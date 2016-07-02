$(function() {
  var setZoom = function() {
    $('.s-product-detail-image').magnificPopup({
      delegate: 'a',
      type: 'iframe'
    });
  };
  setZoom();

  $('.h-other-images a').click(function(event) {
    event.preventDefault();
    $('.s-product-detail-image a').attr('href', $(this).data('image-zoom'));
    $('.s-product-detail-image img').css('background-image',
      'url(' + $(this).data('image') + ')');
    setZoom();
  });
});

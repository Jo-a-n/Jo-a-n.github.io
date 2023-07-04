$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 24,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});

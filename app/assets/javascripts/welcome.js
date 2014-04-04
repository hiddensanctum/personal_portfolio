$(document).ready(function() {
  $('.nav li a').each(function() {
    if($(this).text() == $('.nav').data('title')) {
      $(this).contents().unwrap();
    }
  });
  var maxHeight = -1;
  if $(window).width() > 1000 {
    $('.grid').each(function() {
     if (maxHeight < $(this).height()){
      maxHeight = $(this).height();
     };
     console.log($(this).height());
     console.log(maxHeight);
    });

    $('.grid').each(function() {
     $(this).height(maxHeight);
    });
  };


  // window.onresize = function(event) {
  //   $('.sidebar').each(function() {
  //    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  //   });

  //   $('.sidebar').each(function() {
  //    $(this).height(maxHeight);
  //   });
  // };
});

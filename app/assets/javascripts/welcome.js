// $(".sidebar").mouseover(function() {
//     $( this ).stop().animate({opacity: 0.5 }, 200);
//  }).mouseout(function() {
//     $( this ).stop().animate({opacity: 1 }, 200);
// });
$(document).ready(function() {
  var maxHeight = -1;

  $('.sidebar').each(function() {
   maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  });

  $('.sidebar').each(function() {
   $(this).height(maxHeight);
  });
  window.onresize = function(event) {
    $('.sidebar').each(function() {
     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('.sidebar').each(function() {
     $(this).height(maxHeight);
    });
  };

  $('.close').hide();
  $('.nav').hide();

  $('a.menu').click(function() {
    $('.nav').stop().show();
    $('.menu').stop().hide();
    $('.close').stop().show();
  });

  $('a.close').click(function() {
    $('.nav').stop().hide();
    $('.menu').stop().show();
    $('.close').stop().hide();
  });
});

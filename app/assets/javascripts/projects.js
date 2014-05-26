$(document).ready(function() {
  $('.nav li a').each(function() {
    if($(this).text() == $('.nav').data('title')) {
      $(this).parent().addClass( "highlight" );
    }
  });
  $(".fancybox").fancybox({
    maxWidth  : 1200,
    helpers: {
      title: {
        type: "inside",
      }
    },
    afterLoad: function() {
      this.content = this.content.html();
    }
  });
  // if($(window).width() >= 641 && $(window).width() < 1024) {
  //   var maxHeight = -1;
  //   $('.grid-text.bottom').each(function() {
  //    if (maxHeight < $(this).height()){
  //     maxHeight = $(this).height();
  //    };
  //    console.log($(this).height());
  //    console.log(maxHeight);
  //   });

  //   $('.grid').each(function() {
  //    $(this).height(maxHeight);
  //   });
  // }

  // window.onresize = function(event) {
  //   $('.sidebar').each(function() {
  //    maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
  //   });

  //   $('.sidebar').each(function() {
  //    $(this).height(maxHeight);
  //   });
  // };
});

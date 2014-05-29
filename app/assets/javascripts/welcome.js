var ready = function() {
  var clicked = false;
  $("#topbar-content").click(function() {
    if (clicked) {
      $(this).stop().animate({
        'margin-left': '0px'
      }, { duration: 100 });
      $("#sidebar-wrapper").stop().animate({
        'margin-left': '-160px'
      }, { duration: 100 });
      $("#page-content-wrapper").stop().animate({
        'left': '0'
      }, {
        duration: 100,
        complete: function() { $("#page-content-wrapper").css('position', 'initial'); }
      });
      clicked = false;
    } else {
      $(this).stop().animate({
       'margin-left': '80px'
     }, { duration: 100 });
      $("#sidebar-wrapper").stop().animate({
       'margin-left': '-80px'
     }, { duration: 100 });
      $("#page-content-wrapper").css('position', 'absolute');
      $("#page-content-wrapper").stop().animate({
        'left': '80px'
      }, { duration: 100 });
      clicked = true;
    }
  });

  $('#homepage-title').typed({
    strings: ["Hello! I am a Full Stack Developer"],
    typeSpeed: 30,
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
};

$(document).ready(ready);

$(document).on('page:load', ready);

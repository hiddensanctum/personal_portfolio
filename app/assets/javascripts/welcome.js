var button_click_menu = function() {
  var clicked = false;
  $("#topbar-content").click(function() {
    clicked = menu_move(clicked);
  });
}

var mobile_swipe_menu = function() {
  var swiped = false;
  $(window).on("swipe", function(event) {
    swiped = menu_move(swiped);
  });

}

var menu_move = function(status) {
  if (status) {
    $('#topbar-content').stop().animate({
      'margin-left': '-10px'
    }, { duration: 100 });
    $("#sidebar-wrapper").animate({
      'margin-left': '-160px'
    }, { duration: 100 });
    $("#page-content-wrapper").animate({
      'left': '-10'
    }, {
      duration: 100,
      complete: function() { $("#page-content-wrapper").css('position', 'initial'); }
    });
    return false;
  } else {
    $('#topbar-content').stop().animate({
     'margin-left': '70px'
   }, { duration: 100 });
    $("#sidebar-wrapper").animate({
     'margin-left': '-80px'
   }, { duration: 100 });
    $("#page-content-wrapper").css('position', 'absolute');
    $("#page-content-wrapper").animate({
      'left': '70px'
    }, { duration: 100 });
    return true;
  }
}

var ready = function() {
  button_click_menu();
  mobile_swipe_menu();

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

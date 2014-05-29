var menu_open = false;

var button_click_menu = function() {
  $("#topbar-content").click(function() {
    menu_open = menu_move(menu_open);
  });
}

var mobile_swipe_menu = function() {
  Hammer(window).on("swipeleft", function(event) {
    if (menu_open) {
      menu_open = menu_move(menu_open);
    }
  });

  Hammer(window).on("swiperight", function(event) {
    if (!menu_open) {
      menu_open = menu_move(menu_open);
    }
  });
}

var menu_move = function(status) {
  if (status) {
    $('#topbar-content').animate({
      'margin-left': '0px'
    }, { duration: 100 });
    $("#sidebar-wrapper").animate({
      'margin-left': '-160px'
    }, { duration: 100 });
    $("#page-content-wrapper").css('width', $('#page-content-wrapper').width() + 80);
    $("#page-content-wrapper").animate({
      'margin-left': '-10'
    }, {
      duration: 100,
      complete: function() { $("#page-content-wrapper").css('position', 'initial'); }
    });
    return false;
  } else {
    $('#topbar-content').animate({
     'margin-left': '80px'
   }, { duration: 100 });
    $("#sidebar-wrapper").animate({
     'margin-left': '-80px'
   }, { duration: 100 });
    $("#page-content-wrapper").css('width', $('#page-content-wrapper').width() - 80);
    $("#page-content-wrapper").animate({
      'margin-left': '80px'
    }, { duration: 100 });
    return true;
  }
}

var ready = function() {
  if ($(window).width() <= 640) {
    button_click_menu();
    mobile_swipe_menu();
  }


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



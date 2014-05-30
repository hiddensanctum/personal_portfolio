var menu_open = false;

var button_click_menu = function() {
  $("#topbar-content").click(function() {
    if ($('#topbar-wrapper').css('display') != 'none') {
      menu_open = menu_move(menu_open);
    }
  });
}

var mobile_swipe_menu = function() {
  Hammer(window).on("dragleft", function(event) {
    if (menu_open && $('#topbar-wrapper').css('display') != 'none') {
      menu_open = menu_move(menu_open);
    }
  });

  Hammer(window).on("dragright", function(event) {
    if (!menu_open && $('#topbar-wrapper').css('display') != 'none') {
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
      'margin-left': '0'
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
  $(window).resize(function() {
    if (menu_open && $(window).width() > 640) {
      $("#page-content-wrapper").css('width', 'auto');
      $("#page-content-wrapper").css('margin-left', '0');
      $("#topbar-content").css('margin-left', '0');
      $('#sidebar-wrapper').css('margin-left', '-320px');
      menu_open = false;
    }
  });


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



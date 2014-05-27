var ready = function() {
  var clicked = false;
  $("#topbar-content").click(function() {
    if (clicked) {
      $(this).animate({
        'padding-left': '0px'
      }, { duration: 100 });
      $("#sidebar-wrapper").animate({
        'margin-left': '-320px'
      }, { duration: 100 });
      clicked = false;
    } else {
      $(this).animate({
       'padding-left': '140px'
     }, { duration: 100 });
      $("#sidebar-wrapper").animate({
       'margin-left': '-180px'
     }, { duration: 100 });
      clicked = true;
    }
  });
};

$(document).ready(ready);

$(document).on('page:load', ready);

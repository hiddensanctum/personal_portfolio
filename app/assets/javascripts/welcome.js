var ready = function() {
  var clicked = false;
  $("#topbar-content").click(function() {
    if (clicked) {
      $(this).animate({
        'margin-left': '0px'
      }, { duration: 100 });
      $("#sidebar-wrapper").animate({
        'margin-left': '-320px'
      }, { duration: 100 });
      $("#page-content-wrapper").animate({
        'left': '0'
      }, {
        duration: 100,
        complete: function() { $("#page-content-wrapper").css('position', 'initial'); }
      });
      clicked = false;
    } else {
      $(this).animate({
       'margin-left': '140px'
     }, { duration: 100 });
      $("#sidebar-wrapper").animate({
       'margin-left': '-180px'
     }, { duration: 100 });
      $("#page-content-wrapper").css('position', 'absolute');
      $("#page-content-wrapper").animate({
        'left': '140px'
      }, { duration: 100 });
      clicked = true;
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
};

$(document).ready(ready);

$(document).on('page:load', ready);

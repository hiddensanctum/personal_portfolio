$(document).ready(function() {
  $('.nav li a').each(function() {
    if($(this).text() == $('.nav').data('title')) {
      $(this).contents().unwrap();
    }
  });
});

$( document ).ready(function() {
  console.log( "ready!" );
  setTimeout(function(){
    $('#loader').hide();
    $('#profile-title').fadeIn();
  }, 1000);
});
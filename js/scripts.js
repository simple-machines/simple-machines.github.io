$(document).ready(function() {
  $( "#contact" ).click(function(event) {
    event.preventDefault();
    target = $ (this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
  });
});
var cosa_Bugsy = ($('#cosa_Bugsy').offset().top) / 2;


$(".pulsanti_download").each(function(x) {
  $(this).click(function() {
  window.open("https://www.figma.com/file/FE3GzVQuCEGBjI5XK9teec/Bugsy-app?node-id=0%3A1");
  console.log("open");
})
})


$(document).on('scroll', function() {

  if ($(window).scrollTop() > (cosa_Bugsy)) {
    $("#header").addClass('menu_desktop');
    $("#header").removeClass('menu_desktop_top');


  } else{
    $("#header").addClass('menu_desktop_top');
    $("#header").removeClass('menu_desktop');

    console.log("scroll");
  }

});

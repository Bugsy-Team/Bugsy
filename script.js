var container = ($('#cosa_Bugsy').offset().top) / 2;

// var due = ($('#due').offset().top) - container;
//
// var tre = ($('#tre').offset().top) - container;
//
// var quattro = ($('#quattro').offset().top) - container;
//
// var cinque = ($('#cinque').offset().top) - container;




$(".pulsanti_download").each(function(x) {
  $(this).click(function() {
  window.open("https://www.figma.com/file/FE3GzVQuCEGBjI5XK9teec/Bugsy-app?node-id=0%3A1");
  console.log("open");
})
})


$(document).on('scroll', function() {

  if ($(window).scrollTop() > (container)) {
    $("#header").addClass('menu_desktop');
    $("#header").removeClass('menu_desktop_top');


  } else{
    $("#header").addClass('menu_desktop_top');
    $("#header").removeClass('menu_desktop');

    console.log("scroll");
  }


  // if ($(window).scrollTop() < (due)) {
  //
  //   $('#pallino-1').addClass('pallino-active');
  //   console.log("scroll");
  // } else {
  //   $('#pallino-1').removeClass('pallino-active');
  //   console.log("no");
  //   console.log($(window).scrollTop());
  // }
  //
  // if ($(window).scrollTop() > (due) && $(window).scrollTop() < (tre)) {
  //
  //   $('#pallino-2').addClass('pallino-active');
  //   console.log("scroll");
  // } else {
  //   $('#pallino-2').removeClass('pallino-active');
  //   console.log("no");
  //   console.log($(window).scrollTop());
  // }
  //
  //
  // if ($(window).scrollTop() > (tre) && $(window).scrollTop() < (quattro)) {
  //
  //   $('#pallino-3').addClass('pallino-active');
  //   console.log("scroll");
  // } else {
  //   $('#pallino-3').removeClass('pallino-active');
  //   console.log("no");
  //   console.log($(window).scrollTop());
  // }
  //
  // if ($(window).scrollTop() > (quattro) && $(window).scrollTop() < (cinque)) {
  //
  //   $('#pallino-4').addClass('pallino-active');
  //   console.log("scroll");
  // } else {
  //   $('#pallino-4').removeClass('pallino-active');
  //   console.log("no");
  //   console.log($(window).scrollTop());
  // }
  //
  // if ($(window).scrollTop() > (cinque)) {
  //
  //   $('#pallino-5').addClass('pallino-active');
  //   console.log("scroll");
  // } else {
  //   $('#pallino-5').removeClass('pallino-active');
  //   console.log("no");
  //   console.log($(window).scrollTop());
  // }






});

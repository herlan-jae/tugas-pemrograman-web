//jquery-click-scroll
//by syamsul'isul' Arifin - IMPROVED VERSION

var sectionArray = [1, 2, 4, 5]; // Updated array (no section_3, only 1,2,4,5)

$.each(sectionArray, function (index, value) {
  $(document).scroll(function () {
    var offsetSection = $("#" + "section_" + value).offset().top - 100;
    var docScroll = $(document).scrollTop();
    var docScroll1 = docScroll + 1;

    if (docScroll1 >= offsetSection) {
      $(".navbar-nav .nav-item .nav-link").removeClass("active");
      $(".navbar-nav .nav-item .nav-link").addClass("inactive");
      $(".navbar-nav .nav-item .nav-link").eq(index).addClass("active");
      $(".navbar-nav .nav-item .nav-link").eq(index).removeClass("inactive");
    }
  });

  // Updated selector to match our HTML structure
  $(".navbar-nav .nav-item .nav-link")
    .eq(index)
    .click(function (e) {
      var offsetClick = $("#" + "section_" + value).offset().top - 80;
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: offsetClick,
        },
        400
      ); // Increased animation time for smoother scroll
    });
});

$(document).ready(function () {
  // Initialize navigation states
  $(".navbar-nav .nav-item .nav-link").addClass("inactive");
  $(".navbar-nav .nav-item .nav-link").eq(0).addClass("active");
  $(".navbar-nav .nav-item .nav-link").eq(0).removeClass("inactive");

  // Handle navbar scroll effect
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Handle back to top button
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".back-to-top").addClass("show");
    } else {
      $(".back-to-top").removeClass("show");
    }
  });

  // Close mobile menu when clicking on a link
  $(".navbar-nav .nav-item .nav-link").click(function () {
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-toggler").click();
    }
  });

  // Preloader
  $(window).on("load", function () {
    $(".preloader").fadeOut(500);
  });
});

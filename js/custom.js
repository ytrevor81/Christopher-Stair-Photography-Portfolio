//Travel Modal
$( ".travel-img-wrapper" ).hover(
  function() {
    $(this).find(".travel-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".travel-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $travel_overlay = $('<div id="travel-overlay"></div>');
var $travel_image = $("<img>");
var $travel_prevButton = $('<div id="travel-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $travel_nextButton = $('<div id="travel-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $travel_exitButton = $('<div id="travel-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$travel_overlay.append($travel_image).prepend($travel_prevButton).append($travel_nextButton).append($travel_exitButton);
$(".travel-modal").append($travel_overlay);

// Hide overlay on default
$travel_overlay.hide();

// When an image is clicked
$(".travel-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var travel_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $travel_image.attr("src", travel_imageLocation);
  // Fade in the overlay
  $travel_overlay.fadeIn("slow");
});

// When the overlay is clicked
$travel_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$travel_nextButton.click(function(event) {
  // Hide the current image
  $("#travel-overlay img").hide();
  // Overlay image location
  var $travel_currentImgSrc = $("#travel-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $travel_currentImg = $('.travel-image-gallery img[src="' + $travel_currentImgSrc + '"]');
  // Finds the next image
  var $travel_nextImg = $($travel_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $travel_images = $(".travel-image-gallery img");
  // If there is a next image
  if ($travel_nextImg.length > 0) {
    // Fade in the next image
    $("#travel-overlay img").attr("src", $travel_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#travel-overlay img").attr("src", $($travel_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$travel_prevButton.click(function(event) {
  // Hide the current image
  $("#travel-overlay img").hide();
  // Overlay image location
  var $travel_currentImgSrc = $("#travel-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $travel_currentImg = $('.travel-image-gallery img[src="' + $travel_currentImgSrc + '"]');
  // Finds the next image
  var $travel_nextImg = $($travel_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#travel-overlay img").attr("src", $travel_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$travel_exitButton.click(function() {
  // Fade out the overlay
  $("#travel-overlay").fadeOut("slow");
});

///////////////////////////////////////////////////////

//Portraits Modal

$( ".portraits-img-wrapper" ).hover(
  function() {
    $(this).find(".portraits-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".portraits-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $portraits_overlay = $('<div id="portraits-overlay"></div>');
var $portraits_image = $("<img>");
var $portraits_prevButton = $('<div id="portraits-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $portraits_nextButton = $('<div id="portraits-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $portraits_exitButton = $('<div id="portraits-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$portraits_overlay.append($portraits_image).prepend($portraits_prevButton).append($portraits_nextButton).append($portraits_exitButton);
$(".portraits-modal").append($portraits_overlay);

// Hide overlay on default
$portraits_overlay.hide();

// When an image is clicked
$(".portraits-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var portraits_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $portraits_image.attr("src", portraits_imageLocation);
  // Fade in the overlay
  $portraits_overlay.fadeIn("slow");
});

// When the overlay is clicked
$portraits_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$portraits_nextButton.click(function(event) {
  // Hide the current image
  $("#portraits-overlay img").hide();
  // Overlay image location
  var $portraits_currentImgSrc = $("#portraits-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $portraits_currentImg = $('.portraits-image-gallery img[src="' + $portraits_currentImgSrc + '"]');
  // Finds the next image
  var $portraits_nextImg = $($portraits_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $portraits_images = $(".portraits-image-gallery img");
  // If there is a next image
  if ($portraits_nextImg.length > 0) {
    // Fade in the next image
    $("#portraits-overlay img").attr("src", $portraits_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#portraits-overlay img").attr("src", $($portraits_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$portraits_prevButton.click(function(event) {
  // Hide the current image
  $("#portraits-overlay img").hide();
  // Overlay image location
  var $portraits_currentImgSrc = $("#portraits-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $portraits_currentImg = $('.portraits-image-gallery img[src="' + $portraits_currentImgSrc + '"]');
  // Finds the next image
  var $portraits_nextImg = $($portraits_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#portraits-overlay img").attr("src", $portraits_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$portraits_exitButton.click(function() {
  // Fade out the overlay
  $("#portraits-overlay").fadeOut("slow");
});

/////////////////////////////////////////////////////

//Weddings Modal

$( ".weddings-img-wrapper" ).hover(
  function() {
    $(this).find(".weddings-img-overlay").animate({opacity: 1}, 600);
  }, function() {
    $(this).find(".weddings-img-overlay").animate({opacity: 0}, 600);
  }
);

// Lightbox
var $weddings_overlay = $('<div id="weddings-overlay"></div>');
var $weddings_image = $("<img>");
var $weddings_prevButton = $('<div id="weddings-prevButton"><i class="fa fa-chevron-left"></i></div>');
var $weddings_nextButton = $('<div id="weddings-nextButton"><i class="fa fa-chevron-right"></i></div>');
var $weddings_exitButton = $('<div id="weddings-exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$weddings_overlay.append($weddings_image).prepend($weddings_prevButton).append($weddings_nextButton).append($weddings_exitButton);
$(".weddings-modal").append($weddings_overlay);

// Hide overlay on default
$weddings_overlay.hide();

// When an image is clicked
$(".weddings-img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var weddings_imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $weddings_image.attr("src", weddings_imageLocation);
  // Fade in the overlay
  $weddings_overlay.fadeIn("slow");
});

// When the overlay is clicked
$weddings_overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
  $('#weddings-overlay').scrollTop(0);
});

// When next button is clicked
$weddings_nextButton.click(function(event) {
  // Hide the current image
  $("#weddings-overlay img").hide();
  // Overlay image location
  var $weddings_currentImgSrc = $("#weddings-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $weddings_currentImg = $('.weddings-image-gallery img[src="' + $weddings_currentImgSrc + '"]');
  // Finds the next image
  var $weddings_nextImg = $($weddings_currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $weddings_images = $(".weddings-image-gallery img");
  // If there is a next image
  if ($weddings_nextImg.length > 0) {
    // Fade in the next image
    $("#weddings-overlay img").attr("src", $weddings_nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#weddings-overlay img").attr("src", $($weddings_images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$weddings_prevButton.click(function(event) {
  // Hide the current image
  $("#weddings-overlay img").hide();
  // Overlay image location
  var $weddings_currentImgSrc = $("#weddings-overlay img").attr("src");
  // Image with matching location of the overlay image
  var $weddings_currentImg = $('.weddings-image-gallery img[src="' + $weddings_currentImgSrc + '"]');
  // Finds the next image
  var $weddings_nextImg = $($weddings_currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#weddings-overlay img").attr("src", $weddings_nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$weddings_exitButton.click(function() {
  // Fade out the overlay
  $("#weddings-overlay").fadeOut("slow");
});

/////////////////////////////////////////////////////////////




//Navbar Fade In

$(document).ready(function(){

  $(".navbar").hide(); //Hide the navigation bar first

    $(window).scroll(function () {  //Listen for the window's scroll event
        if (isScrolledAfterElement("#Gallery")) { //if it has scrolled beyond the #content elment
            $('.navbar').fadeIn();  //Show the navigation bar
        } else {
            $('.navbar').fadeOut(); //Else hide it
        }
    });

    //Function that returns true if the window has scrolled beyond the given element
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }
});

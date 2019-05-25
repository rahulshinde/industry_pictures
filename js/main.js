$(document).ready(function(){
  $('.project_link').on('mouseenter', showVid);
  $('.project_link').on('mouseleave', hideVid);
  
  $('.nick_link').on('mouseenter', showImage);
  $('.nick_link').on('mouseleave', hideImage);

  window_width = $(window).width();
  console.log(window_width);

  if (window_width <= 1000) setupCycleImages();
});

showVid = function(){
  $('body').addClass('video_shown')
}

hideVid = function(){
  $('body').removeClass('video_shown')
}

showImage = function(){
  $('body').addClass('image_shown')
}

hideImage = function(){
  $('body').removeClass('image_shown')
}

setupCycleImages = function(){
  $('.project_link').first().addClass('selected');
  
}
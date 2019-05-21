$(document).ready(function(){
  $('.project_link').on('mouseenter', showVid);
  $('.project_link').on('mouseleave', hideVid);
  
  $('.nick_link').on('mouseenter', showImage);
  $('.nick_link').on('mouseleave', hideImage);
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
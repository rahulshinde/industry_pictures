$(document).ready(function(){
  $('.project_link').on('mouseenter', showVid);
  $('.project_link').on('mouseleave', hideVid);
  
  $('.nick_link').on('mouseenter', showImage);
  $('.nick_link').on('mouseleave', hideImage);

  window_width = $(window).width();

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
  project_links = $('.project_link');
  project_links.first().addClass('selected');
  current_project = 0;
  total_projects = project_links.length - 1;
  cycleImages();
}

cycleImages = function(){
  cycle = setInterval(function(){
    current_project = current_project + 1
    if (current_project > total_projects) current_project = 0;
    project_links.removeClass('selected');
    project_links.eq(current_project).addClass('selected');
  }, 3000)
}
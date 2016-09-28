$(document).ready(function(){
// For resizing
var height = $(window).height();
var width = $(window).width();
var button_width = $('.button').width();
var button_height = $('.button').height();
var coverall_top_width = $('#coverall_top_raspberry_car').width();
var coverall_top_height = $('#coverall_top_raspberry_car').height();
var ongoing = 0;
function screenadjust(){
  $('#pg1_active_navibutton').show();
  $('#pg2_active_navibutton').hide();
  $('#pg3_active_navibutton').hide();
  $('#pg4_active_navibutton').hide();
  $('.button').css('margin-left',width/2 - button_width/2 + 'px');
  $('.button').css('margin-top',height/2 + 2.5*button_height + 'px');
  $('#coverall_top_raspberry_car').css('margin-left',width/2 - coverall_top_width/2 + 'px');
  $('#coverall_top_raspberry_car').css('margin-top',height/2 - coverall_top_height/2 + 'px');
  $('#coverall_top_raspberry_car').hide();
  $('#coverall_top_caliper_mount').css('margin-left',width/2 - coverall_top_width/2 + 'px');
  $('#coverall_top_caliper_mount').css('margin-top',height/2 - coverall_top_height/2 + 'px');
  $('#coverall_top_caliper_mount').hide();
  $('#coverall_top_calsol_website').css('margin-left',width/2 - coverall_top_width/2 + 'px');
  $('#coverall_top_calsol_website').css('margin-top',height/2 - coverall_top_height/2 + 'px');
  $('#coverall_top_calsol_website').hide();
  $('.coverall').hide();
}
function scroll_limit(){
  $('body').addClass('no-scroll');
  ongoing = 0;
}
screenadjust();
scroll_limit();
//makes inner circle appear/ disappear
$('#first_page').waypoint(function(){
  $('#pg1_active_navibutton').show();
  $('#pg2_active_navibutton').hide();
  $('#pg3_active_navibutton').hide();
  $('#pg4_active_navibutton').hide();
},{offset:'-80%'});
$('#first_page').waypoint(function(){
  $('#pg2_active_navibutton').show();
  $('#pg1_active_navibutton').hide();
  $('#pg3_active_navibutton').hide();
  $('#pg4_active_navibutton').hide();
},{offset:'-81%'});
$('#second_page').waypoint(function(){
  $('#pg2_active_navibutton').show();
  $('#pg1_active_navibutton').hide();
  $('#pg3_active_navibutton').hide();
  $('#pg4_active_navibutton').hide();
},{offset:'-80%'});
$('#second_page').waypoint(function(){
  $('#pg3_active_navibutton').show();
  $('#pg1_active_navibutton').hide();
  $('#pg2_active_navibutton').hide();
  $('#pg4_active_navibutton').hide();
},{offset:'-81%'});
$('#third_page').waypoint(function(){
  $('#pg3_active_navibutton').show();
  $('#pg1_active_navibutton').hide();
  $('#pg2_active_navibutton').hide();
  $('#pg4_active_navibutton').hide();
},{offset:'-80%'});
$('#third_page').waypoint(function(){
  $('#pg4_active_navibutton').show();
  $('#pg1_active_navibutton').hide();
  $('#pg2_active_navibutton').hide();
  $('#pg3_active_navibutton').hide();
},{offset:'-81%'});
// This function does scrolling
$('.navibutton').click(function(){
    $('body').removeClass('no-scroll');
    $('html,body').animate({
      scrollTop:$($.attr(this,'href')).offset().top
    },800);
    scroll_limit();
    return false
  });
  $('.navigation-item').click(function(){
    $('body').removeClass('no-scroll');
    $('html,body').animate({
      scrollTop:$($.attr(this,'href')).offset().top
    },800);
    scroll_limit();
    return false
  })

/// Used to get keyboard inputs
document.addEventListener('keydown',function(event){
console.log(event.keyCode);
if(event.keyCode == 39 || event.keyCode == 13 || event.keyCode == 40){
  $('body').removeClass('no-scroll');
 if($('#pg1_active_navibutton').css('display') == 'block'){
  $('html,body').animate({
    scrollTop:$('#second_page').offset().top
  },800);
  scroll_limit();
  return false
  }
  else if($('#pg2_active_navibutton').css('display') == 'block'){
   $('html,body').animate({
     scrollTop:$('#third_page').offset().top
   },800);
   scroll_limit();
   return false
  }
  else if($('#pg3_active_navibutton').css('display') == 'block'){
   $('html,body').animate({
     scrollTop:$('#fourth_page').offset().top
   },800);
   scroll_limit();
   return false
  }
  else if($('#pg4_active_navibutton').css('display') == 'block'){
   $('html,body').animate({
     scrollTop:$('#first_page').offset().top
   },800);
   scroll_limit();
   return false
  }
}
else if(event.keyCode == 37 || event.keyCode == 8|| event.keyCode == 38){
    $('body').removeClass('no-scroll');
   if($('#pg1_active_navibutton').css('display') == 'block'){
    $('html,body').animate({
      scrollTop:$('#fourth_page').offset().top
    },800);
    scroll_limit();
    return false
      }
  else if($('#pg2_active_navibutton').css('display') == 'block'){
   $('html,body').animate({
     scrollTop:$('#first_page').offset().top
   },800);
   scroll_limit();
   return false
  }
  else if($('#pg3_active_navibutton').css('display') == 'block'){
   $('html,body').animate({
     scrollTop:$('#second_page').offset().top
   },800);
   scroll_limit();
   return false
  }
  else if($('#pg4_active_navibutton').css('display') == 'block'){
   $('html,body').animate({
     scrollTop:$('#third_page').offset().top
   },800);
   scroll_limit();
   return false
    }
  }
});

//scrolling
$('body').on('mousewheel', function(event) {
  if (ongoing == 0){
  ongoing = 1;
  console.log(event.deltaX, event.deltaY, event.deltaFactor);
  console.log(ongoing);
    if(event.deltaY == -1){
      $('body').removeClass('no-scroll');
     if($('#pg1_active_navibutton').css('display') == 'block'){
      $('html,body').animate({
        scrollTop:$('#second_page').offset().top
      },400);
      scroll_limit();
      return false
    }
    else if($('#pg2_active_navibutton').css('display') == 'block'){
     $('html,body').animate({
       scrollTop:$('#third_page').offset().top
     },400);
     scroll_limit();
     return false
    }
    else if($('#pg3_active_navibutton').css('display') == 'block'){
     $('html,body').animate({
       scrollTop:$('#fourth_page').offset().top
     },400);
     scroll_limit();
     return false
    }
    else if($('#pg4_active_navibutton').css('display') == 'block'){
     $('html,body').animate({
       scrollTop:$('#first_page').offset().top
     },400);
     scroll_limit();
     return false
    }
    }
    else if(event.deltaY == 1){
      $('body').removeClass('no-scroll');
     if($('#pg1_active_navibutton').css('display') == 'block'){
      $('html,body').animate({
        scrollTop:$('#fourth_page').offset().top
      },400);
      scroll_limit();
      return false
    }
    else if($('#pg2_active_navibutton').css('display') == 'block'){
     $('html,body').animate({
       scrollTop:$('#first_page').offset().top
     },400);
     scroll_limit();
     return false
    }
    else if($('#pg3_active_navibutton').css('display') == 'block'){
     $('html,body').animate({
       scrollTop:$('#second_page').offset().top
     },400);
     scroll_limit();
     return false
    }
    else if($('#pg4_active_navibutton').css('display') == 'block'){
     $('html,body').animate({
       scrollTop:$('#third_page').offset().top
     },400);
     scroll_limit();
     return false
    }
    }
    else if (event.deltaY > 1){
      alert("Don't spin your mouse that fast, and please refresh!");
      return false
    }
    else if (event.deltaY < -1){
      alert("Don't spin your mouse that fast, and please refresh!")
      return false
    }
}});
//unslider
$('.my-slider').unslider({
  autoplay:true,
  delay:8000,
  infinite:true
});
// wall coverall trigger
$('#calsol_website_box').click(function(){
  if( $('.coverall').css('display')=='none' ){
    $('.coverall').fadeIn(500);
    $('#coverall_top_calsol_website').fadeIn(500);
    scroll_limit();
  }
});
$('#raspberry_car_box').click(function(){
  if( $('.coverall').css('display')=='none' ){
    $('.coverall').fadeIn(500);
    $('#coverall_top_raspberry_car').fadeIn(500);
    scroll_limit();
  }
});
$('#caliper_mount_box').click(function(){
  if( $('.coverall').css('display')=='none' ){
    $('.coverall').fadeIn(500);
    $('#coverall_top_caliper_mount').fadeIn(500);
    scroll_limit();
  }
});



$('.square').click(function(){
  if( $('.coverall').css('display')=='none' ){
    $('.coverall').fadeIn(500);
    $('.coverall_top').fadeIn(500);
    scroll_limit();
  }
});
$('.square_first_next').click(function(){
  if( $('.coverall').css('display')=='none' ){
    $('.coverall').fadeIn(500);
    $('.coverall_top').fadeIn(500);
    scroll_limit();
  }
});
$('.square_next').click(function(){
  if( $('.coverall').css('display')=='none' ){
    $('.coverall').fadeIn(500);
    $('.coverall_top').fadeIn(500);
    scroll_limit();
  }
});
$('.coverall').click(function(){
  $('.coverall').fadeOut(500);
  $('.coverall_top').fadeOut(500);
  $('#coverall_top_raspberry_car').fadeOut(500);
  $('#coverall_top_caliper_mount').fadeOut(500);
  $('#coverall_top_calsol_website').fadeOut(500);
});
$('.refresh').click(function(){
  location.reload();
});
$('#button_calsol_website').click(function(){
  window.open("http://mannylazalde.github.io");
});

@media screen and (orientation:landscape) {

#container {
-ms-transform: rotate(-90deg); /* IE 9 */
-webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
transform: rotate(-90deg);
width: /* screen width */ ;
height: /* screen height */ ;
overflow: scroll;
}
}

})

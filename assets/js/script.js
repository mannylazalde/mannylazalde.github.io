$(document).ready(function(){

//old method for finding right size for image
var height = $(window).height()
var width = $(window).width()
function screenadjust(){
  $('#subtitle').css("margin-top", (height/2) - 120 + "px"  );
  $('.business').css("margin-left", (width/2) - 125 + "px" );
  $('#manny-summarybox').css("margin-top", (height) - 300 + "px"  );
  $('#felix-summarybox').css("margin-top", (height) - 300 + "px"  );
  $('#neeka-summarybox').css("margin-top", (height) - 300 + "px"  );
  $('#rachel-summarybox').css("margin-top", (height) - 300 + "px"  );
  $('.description').css("margin-top", (height/2) +36 + "px"  );
  $('.description').css("margin-left", (width/2) - 380 + "px"  );
  //$('#team_members-summarybox').css("margin-top", (height) - 300 + "px"  );
  $('.business_summary').css("margin-left", (width/2) - 180 + "px" );
  $('.business_summary').css("margin-top", height - 260 + "px" );
  $('.business_summary').hide();
  $('.mechanical_summary').hide();
  $('.electrical_summary').hide();
}
screenadjust()
// Slide to right
$('#carousel-next').click(function(){
    var current_margin_left = parseInt($('.carousel').css('margin-left').replace("px",""));
    if(current_margin_left==-2880){
      $('#carousel-next').css('opacity','0.2');
      return false
    }
    else{
      $('.carousel').css('margin-left',current_margin_left - 960);
      $('#carousel-prev').css('opacity','1');
    }
  })
  //Slide to left
  $('#carousel-prev').click(function(){
  var current_margin_left = parseInt($('.carousel').css('margin-left').replace("px",""));
  if (current_margin_left == 0){
    $('#carousel-prev').css('opacity','0.2');
    return false
  }
  else{
    $('.carousel').css('margin-left',current_margin_left + 960);
    $('#carousel-next').css('opacity','1');
  }

})
 /*
function parallax(){
  var scrolls = $(window).scrollTop();
  $('#page').css("top", -(scrolls * 0.2) + "px")
}

$(window).scroll(function(){
  parallax();
})
*/

/* This function makes the top bar get an opacity after you scroll*/
$(window).scroll(function(){
  var scrolls = $(window).scrollTop();
  if(scrolls < 15){
    $('.navigation').css('opacity','0.8');
  }
/*
  else if ( (scrolls > 570) && (scrolls < 625) ){
      $('.navigation').css('opacity','0.8');
  }
  else if ( (scrolls > 1170) && (scrolls < 1245) ){
      $('.navigation').css('opacity','0.8');
  }
  else if((scrolls > 1785) && (scrolls < 1855 )){
    $('.navigation').css('opacity','0.8');
  }
  else if((scrolls > 2340) && (scrolls < 2520)) {
      $('.navigation').css('opacity','0.8');
  }
  else if(scrolls > 2950) {
      $('.navigation').css('opacity','0.8');
  }

  else{
    $('.navigation').css('opacity','0.4');
  }
  */
})

// Try scrolling using waypoints instead
$('#introduction-section').waypoint(function(){
  $('.navigation').css('opacity','0.4');
},{offset:'-8%'})

$('#solar_car-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'5%'})

$('#solar_car-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'-5%'})

$('#solar_car-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'10%'})

$('#solar_car-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'-10%'})


$('#race-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'5%'})

$('#race-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'-5%'})

$('#race-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'10%'})

$('#race-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'-10%'})



$('#subgroups-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'5%'})

$('#subgroups-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'-5%'})

$('#subgroups-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'10%'})

$('#subgroups-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'-10%'})




$('#team_members-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'5%'})

$('#team_members-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'-5%'})

$('#team_members-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'10%'})

$('#team_members-section').waypoint(function (direction){
$('.navigation').css('opacity','0.4');
},{offset:'-10%'})



$('#sponsers-section').waypoint(function (){
$('.navigation').css('opacity','0.8');
},{offset:'5%'})

$('#sponsers-section').waypoint(function (){
$('.navigation').css('opacity','0.4');
},{offset:'10%'})

// This function does scrolling
$('.navigation-item').click(function(){
    $('html,body').animate({
      scrollTop:$($.attr(this,'href')).offset().top
    },800);
    return false
  })
//This function makes the subgroup section icons move
$('.business').hover(function(){
  $('.business').css('transform', 'translateY(-50px)');
  $('.business_summary').fadeIn(400);
},function(){
  $('.business').delay(4000).css('transform', 'translateY(0px)');
  $('.business_summary').fadeOut(400);
})

$('.mechanical').hover(function(){
  $('.mechanical').css('transform', 'translateY(-50px)');
  $('.mechanical_summary').fadeIn(400);
},function(){
$('.mechanical').css('transform', 'translateY(0px)');
$('.mechanical_summary').fadeOut(400);
})

$('.electrical').hover(function(){
  $('.electrical').css('transform', 'translateY(-50px)');
  $('.electrical_summary').fadeIn(400);
},function(){
  $('.electrical').delay(4000).css('transform', 'translateY(0px)');
  $('.electrical_summary').fadeOut(400);
  })



//Makes the team_members-summary comes up


$('.manny').click(function(){
  if ($('#manny-summarybox').css('display') == 'block'){
  $('#manny-summarybox').fadeOut('300ms');
  $('.description').fadeIn('300ms');
}else{
  $('#manny-summarybox').fadeIn('300ms');
  $('#felix-summarybox').fadeOut('300ms');
  $('#neeka-summarybox').fadeOut('300ms');
  $('#rachel-summarybox').fadeOut('300ms');
  $('.description').fadeOut('300ms');
  }
})
$('.felix').click(function(){
  if ($('#felix-summarybox').css('display') == 'block'){
  $('#felix-summarybox').fadeOut('300ms');
  $('.description').fadeIn('300ms');
}else{
  $('#felix-summarybox').fadeIn('300ms');
  $('#manny-summarybox').fadeOut('300ms');
  $('#neeka-summarybox').fadeOut('300ms');
  $('#rachel-summarybox').fadeOut('300ms');
  $('.description').fadeOut('300ms');
  }
})
$('.neeka').click(function(){
  if ($('#neeka-summarybox').css('display') == 'block'){
  $('#neeka-summarybox').fadeOut('300ms');
  $('.description').fadeIn('300ms');
}else{
  $('#neeka-summarybox').fadeIn('300ms');
  $('#manny-summarybox').fadeOut('300ms');
  $('#felix-summarybox').fadeOut('300ms');
  $('#rachel-summarybox').fadeOut('300ms');
  $('.description').fadeOut('300ms');
  }
})
$('.rachel').click(function(){
  if ($('#rachel-summarybox').css('display') == 'block'){
  $('#rachel-summarybox').fadeOut('300ms');
  $('.description').fadeIn('300ms');
}else{
  $('#rachel-summarybox').fadeIn('300ms');
  $('#manny-summarybox').fadeOut('300ms');
  $('#felix-summarybox').fadeOut('300ms');
  $('#neeka-summarybox').fadeOut('300ms');
  $('.description').fadeOut('300ms');
  }
})



})

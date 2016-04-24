$(document).ready(function(){

//old method for finding right size for image
var height = $(window).height()
var width = $(window).width()
function screenadjust(){
  $('#subtitle').css("margin-top", (height*0.26)  );
  $('.business').css("margin-left", width*0.40 );
  $('#manny-summarybox').css("margin-top", (height/2));
  $('#felix-summarybox').css("margin-top", (height/2));
  $('#neeka-summarybox').css("margin-top", (height/2));
  $('#rachel-summarybox').css("margin-top", (height/2) );
  $('.description').css("margin-top", (height/1.75) );
  $('.description').css("margin-left", (width/4.5)  );
  //$('#team_members-summarybox').css("margin-top", (height) - 300 + "px"  );
  $('.business_summary').css("margin-left", width / 2.82 );
  $('.business_summary').css("margin-top", height *0.58);
  $('.mechanical_summary').css("margin-top", height *0.58);
  $('.electrical_summary').css("margin-left", width / 1.45);
  $('.electrical_summary').css("margin-top", height *0.58);
  $('.business_summary').hide();
  $('.mechanical_summary').hide();
  $('.electrical_summary').hide();
  $('#solarpic').css("height",0.35 * height);
  $('.arrow').css("height",height*0.16);
  $('#zephr').css("height",height*0.45);
  $('#impulse').css("width",width*0.37);
  $('#goldrush').css("width",width*0.34);
  $('#summarybox_image_manny').css("height",height * 0.42);
  $('#summarybox_image_neeka').css("height",height * 0.42);
  $('#summarybox_image_felix').css("height",height * 0.42);
  $('#summarybox_image_rachel').css("height",height * 0.42);
  $('#subteam-image_manny').css("width",width * 0.14);
  $('#subteam-image_felix').css("width",width * 0.14);
  $('#subteam-image_neeka').css("width",width* 0.14);
  $('#subteam-image_rachel').css("width",width * 0.14);
  $('#calsol_mechanical').css("width",width * 0.19);
  $('#calsol_electrical').css("width",width *  0.19);
  $('#calsol_business').css("width",width *  0.19);
  $('#instagram').css('height',height*0.045);
  $('#youtube').css('height',height*0.045);
  $('#facebook').css('height',height*0.045);
  $('#flickr').css('height',height*0.045);
  $('#twitter').css('height',height*0.045);
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
$('#calsol_business').hover(function(){
  $('.business').css('transform', 'translateY(-50px)');
  $('.business_summary').fadeIn(400);
},function(){
  $('.business').delay(4000).css('transform', 'translateY(0px)');
  $('.business_summary').fadeOut(400);
})

$('#calsol_mechanical').hover(function(){
  $('.mechanical').css('transform', 'translateY(-50px)');
  $('.mechanical_summary').fadeIn(400);
},function(){
$('.mechanical').css('transform', 'translateY(0px)');
$('.mechanical_summary').fadeOut(400);
})

$('#calsol_electrical').hover(function(){
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

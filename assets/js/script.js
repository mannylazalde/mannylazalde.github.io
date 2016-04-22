$(document).ready(function(){

//old method for finding right size for image
var height = $(window).height()
var width = $(window).width()
console.log(width)
function screenadjust(){
  $('#subtitle').css("margin-top", (height/2) - 120 + "px"  );
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

/* This function makes the top bar get an opacity after you scroll */
$(window).scroll(function(){
  var scrolls = $(window).scrollTop();
  if(scrolls < 10){
    $('.navigation').css('opacity','0.8');
  }
  else if ( (scrolls > 570) && (scrolls < 625) ){
      $('.navigation').css('opacity','0.8');
  }
  else if ( (scrolls > 1170) && (scrolls < 1245) ){
      $('.navigation').css('opacity','0.8');
  }
  else if((scrolls > 1765) && (scrolls < 1815 )){
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
})
// This function does scrolling
$('.navigation-item').click(function(){
    $('html,body').animate({
      scrollTop:$($.attr(this,'href')).offset().top
    },800);
    return false
  })

})

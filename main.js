$(document).ready(function(){
   $(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }
         else {
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });


  });

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('.hiddenlogo').fadeIn().css('display', 'block');
    } else {
        $('.hiddenlogo').fadeOut();
    }

});
$(function(){
    $('div.awesome img').mousemove(function(){
        $('.overlay').hide()
    });

    $('.first').click(function(){
        $('.f1 .one').show().siblings().hide();
       


    });

    $('.second').click(function(){
       $('.f1 .two').show().siblings().hide();
        
    });

    $(window).scroll(function(){
           var scroll = $(this).scrollTop();
           console.log(scroll);
           if(scroll>500){
               $('.header').slideDown();
           }else{
            $('.header').slideUp(); 
           }
    });

    $('.one').css('display','block');
    $('div.accordion h3').click(function(){
           $(this).next().slideToggle();
           $("div.accordion p").not($(this).next()).slideUp();
    });

    $(function(){
        $('.timer').countTo();
    });

});
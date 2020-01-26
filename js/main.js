


//menu
    $(function(){
        $('.togg').click(function(){
            $('.menu ul').slideToggle("slow");
        });
    });


    
   




$(document).ready(function(){


    

    //scrolling
    $(document).ready(function(){
        if($(window).width() >= 320)
        {
            $('html,body').niceScroll({
                cursorcolor:"#EEC275",
                cursorwidth: "10px",
                zindex: "999999"
            });
        }

    });

    
    //counter
     $(function() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });

    //answers of questions
    $('.ask .q').click(function(){
        $(this).toggleClass('active');
        if($(this).hasClass('active'))
        {
            $(this).find("p").slideDown().click(false);
            $(this).find(".fa-plus-square").addClass("hide");
            $(this).find(".fa-minus-square").removeClass("hide");
        }
        else
        {
            $(this).find("p").slideUp().click(false);
            $(this).find(".fa-plus-square").removeClass("hide");
            $(this).find(".fa-minus-square").addClass("hide");
        }
    });


    //testmonials
    function checkClient(){
        if($('.client:first-of-type').hasClass('active'))
        {
            $('.slider .fa-chevron-left').fadeOut(100);
        }
        else
        {
            $('.slider .fa-chevron-left').fadeIn();
        }
    
        if($('.client:last-of-type').hasClass('active'))
        {
            $('.slider .fa-chevron-right').fadeOut(100);
        }
        else
        {
            $('.slider .fa-chevron-right').fadeIn();
        }
    }
    
    checkClient();
    
    
    $('.slider .svg-inline--fa').click(function(){
    
        if($(this).hasClass('fa-chevron-right'))
        {
            $('.slider .active').fadeOut(100,function(){
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
        else
        {
            $('.slider .active').fadeOut(100,function(){
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
    
    });
    

});

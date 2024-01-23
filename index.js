$(function(){

    $('.icon_hamburger').click(function(){
        $('.sub_menu').toggleClass('on')
        $(this).toggleClass('close')
    })

    $('.dep1_ul > li > a').click(function(){
        
        if($(this).parent().hasClass('open') === true){
            $('.dep1_ul > li').removeClass('open');
            $('.dep1_ul > li').children('.dep2_ul').stop().slideUp();
        }else{
            $('.dep1_ul > li').removeClass('open');
            $('.dep1_ul > li').children('.dep2_ul').stop().slideUp();
            $(this).parent().addClass('open');
            $(this).siblings('.dep2_ul').stop().slideDown();
        }

    })

    $('.dep2_ul > li > a').click(function(){
            
        if($(this).parent().hasClass('open') === true ){
            $('.dep2_ul > li').removeClass('open')
            $('.dep2_ul > li').children('.dep3_ul').stop().slideUp()
        }else{
            $('.dep2_ul > li').removeClass('open')
            $('.dep2_ul > li').children('.dep3_ul').stop().slideUp()
            $(this).parent().addClass('open')
            $(this).siblings('.dep3_ul').stop().slideDown()
        }

    })

})
$(function(){
    $(window).scroll(function(){
        let scrollPosition = $(window).scrollTop();
        
        let me = $('#me').offset().top;
        let skill = $('#skill').offset().top;
        let connect = $("#connect").offset().top;

        if(scrollPosition >= me&&scrollPosition < skill){
            $('header > ul > li:nth-child(2)').css('color', 'blue');
            $('header > ul > li:nth-child(3)').css('color', 'black');
        }else if(scrollPosition >= skill&&scrollPosition < connect){
            $('header > ul > li:nth-child(2)').css('color', 'black');
            $('header > ul > li:nth-child(3)').css('color', 'blue');
        }else if(scrollPosition >= connect){
            $("header > ul > li:nth-child(2)").css("color", "black");
            $("header > ul > li:nth-child(3)").css("color", "black");
            $("header > ul > li:last-child").css("color", "blue");
        }else{
            $("header > ul > li:nth-child(2)").css("color", "black");
            $("header > ul > li:nth-child(3)").css("color", "black");
            $("header > ul > li:last-child").css("color", "black");
        }


    })















})
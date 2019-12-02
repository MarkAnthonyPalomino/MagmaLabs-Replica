$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = parseInt($(window).scrollTop());
        console.log(scrollTop);
        if (scrollTop > 100) {
            $(".navbar").css("background-color","#362f2f");
        }else{
             $(".navbar").css("background-color","transparent");
        }
    });
});
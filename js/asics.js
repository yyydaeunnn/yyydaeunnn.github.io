$(document).ready(function(){
    //태블릿 모바일 메뉴
    $("#t_m_nav_wrap, #t_m_back").hide()
    
    $("#t_m_menu").click(function(){
        $("#t_m_nav_wrap, #t_m_back").show();
//        $("body").css("overflow-y","hidden");
//        $("#top").css("z-index","1");
    });
    $(".close_btn").click(function(){
        $("#t_m_nav_wrap, #t_m_back").hide();
    });

    //위클리 베스트
    $(".cont1_text > ul.best_type > li").click(function(){
        $(".cont1_text > ul.best_type > li").removeClass("best_type_on");
        $(this).addClass("best_type_on");
        return false;
    });

/*     $(".cont1_prod > ul > li").hover(function(){
        var img_num2 = $(this).attr("data-img-num2");
        $(this).css("background-image","url(img/best"+img_num2+".jpg)")
        },function(){
            var img_num1 = $(this).attr("data-img-num1");
            $(this).css("background-image","url(img/best"+img_num1+".jpg)")
        });
    }) */

    //완성
    $(".cont1_prod > ul > li").hover(function(){
        var img_num2 = $(this).attr("data-img-num2");
        $(".best_img",this).attr("src","img/best"+img_num2+".jpg")
    },function(){
        var img_num1 = $(this).attr("data-img-num1");
        $(".best_img",this).attr("src","img/best"+img_num1+".jpg")
    });











    
});
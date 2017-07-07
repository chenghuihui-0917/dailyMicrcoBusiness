$(function(){
    $("body").fadeIn();
    $(".map-box").css("min-height",$(window).height()-410);
    $(".news-box").css("min-height",$(window).height()-360);


    $(".nav-left").hover(function(){
        $(this).addClass("pulse")
    },function(){
        $(this).removeClass("pulse")
    });

    setTimeout(function(){
        $(".down_move").fadeIn();
    },1000);

    setTimeout(function(){
        $(".container>h1").fadeIn(2000);
    },500);
    setTimeout(function(){
        $(".j1").addClass("slideUp")
    },2000);
    setTimeout(function(){
        $(".j2").addClass("slideUp")
    },2250);
    setTimeout(function(){
        $(".j3").addClass("slideUp")
    },2500);

    setTimeout(function(){
        $(".banner_left").addClass("bigEntrance");
    },100);

    setTimeout(function(){
        $(".banner_right").addClass("bigEntrance");
    },100);
    setTimeout(function(){
        $(".banner_download").addClass("bigEntrance");
    },100);
	setTimeout(function(){
        $(".download_img").addClass("hatch");
    },100);
});


$('.btn-download,.btn-download3,.btn-download4').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});



$(window).scroll(function(){
    var scrollY = $(document).scrollTop();
    if(scrollY>640){
        //$(".nav-box").css("background-color","rgba(229, 28, 35, 0.9)");
        $(".nav-box").css("box-shadow"," 0 2px 3px #d11b21");
        //$(".banner-bg").css("background","white")
    }else{
        //$(".nav-box").css("background-color","rgba(229, 28, 35, 0.9)");
        $(".nav-box").css("box-shadow"," 0 0 0");
        //$(".banner-bg").css("background","url('img/job.jpg')");
        //$(".banner-bg").css("background-size","cover")
    }


//        
    
    $('.page2_phone').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeIn");
            setTimeout(function(){
                $(".page2-phone").addClass("slideLeft");
            },1000);

            setTimeout(function(){
                $(".page2_text_box h1").addClass("slideLeft");
            },1200);
            setTimeout(function(){
                $(".page2_text_box p").addClass("slideLeft");
            },1250);
            setTimeout(function(){
                $(".page2_text_box span").addClass("slideLeft");
            },1300);

        }
    });

    $('.page3_text_box').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeIn");
            setTimeout(function(){
                $(".page3_phone").addClass("slideUp");
            },1000);


            setTimeout(function(){
                $(".page3_text_box h1").addClass("slideDown");
            },1300);
            setTimeout(function(){
                $(".page3_text_box p").addClass("slideDown");
            },1400);
            setTimeout(function(){
                $(".page3_text_box h1 span").addClass("slideDown");
            },1500);

        }
    });

    $('.page4_phone').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeIn");
            setTimeout(function(){
                $(".page4-phone").addClass("expandUp");
            },1000);


            setTimeout(function(){
                $(".page4_text_box h1").addClass("slideUp");
            },1700);
            setTimeout(function(){
                $(".page4_text_box p").addClass("slideUp");
            },1800);
            setTimeout(function(){
                $(".page4_text_box span").addClass("slideUp");
            },1900);

        }
    });
	
	$('.page5_phone').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeIn");
            setTimeout(function(){
                $(".page5-phone").addClass("expandUp");
            },1000);


            setTimeout(function(){
                $(".page5_text_box h1").addClass("slideUp");
            },1700);
            setTimeout(function(){
                $(".page5_text_box p").addClass("slideUp");
            },1800);
            setTimeout(function(){
                $(".page5_text_box span").addClass("slideUp");
            },1900);

        }
    });
	
	$('.page6_top').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeIn");
        }
    });
    $('.page6_bottom').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("slideUp");
        }
    });


    $('.page7_phone').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+750) {
            $(this).addClass("fadeIn");
            setTimeout(function(){
                $(".page7_phone").addClass("fadeIn");
            },500);
			
			setTimeout(function(){
                $(".page7_text_box").addClass("slideUp");
            },1000);
        }
    });


});

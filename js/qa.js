$(".qa1 > li").on("click",function(){
	$(".qa1 > li:nth-child(2n)").toggle(1000);
});

$(".qa2 > li").on("click",function(){
	$(".qa2 > li:nth-child(2n)").toggle(1000);
});

$(".qa3 > li").on("click",function(){
	$(".qa3 > li:nth-child(2n)").toggle(1000);
});

$(".qa4 > li").on("click",function(){
	$(".qa4 > li:nth-child(2n)").toggle(1000);
});

$(".btn1").on("click",function(){
	$(".content1").show(1000);
	$(".content2").hide(1000);
	$(".content3").hide(1000);
	$(".content4").hide(1000);
});

$(".btn2").on("click",function(){
	$(".content1").hide(1000);
	$(".content2").show(1000);
	$(".content3").hide(1000);
	$(".content4").hide(1000);
});

$(".btn3").on("click",function(){
	$(".content1").hide(1000);
	$(".content2").hide(1000);
	$(".content3").show(1000);
	$(".content4").hide(1000);
});

$(".btn4").on("click",function(){
	$(".content1").hide(1000);
	$(".content2").hide(1000);
	$(".content3").hide(1000);
	$(".content4").show(1000);
});

$(function() {
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 640 }, 'slow');  
        return false;
    });
     
    
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});



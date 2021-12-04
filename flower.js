
$(function () {
  $(window).on('load scroll resize',function () {
    var scroll = $(window).scrollTop();
    mv_scale(scroll);
  });
});

function mv_scale(scroll) {
  if (window.innerWidth > 900) {
    $(".top-img-box img").css({
      width: 100 / 3 + scroll / 10 + "%",
    });
  }else {
    $(".top-img-box img").css({
      width: 100 - scroll / 10 + "%",
    });
  }
}


$("#drawer-open").click(function(){
$(this).toggleClass('active');
});


$(function() {
      var header = $('.header');
      header.hide();
      //スクロールが300に達したらボタン表示
      $(window).on('load scroll',function () {
          if ($(this).scrollTop() > 550) {
              header.fadeIn();
          }else{
            header.fadeOut();
          }
      });
  });


  $(function(){
    //リロード、スクロールした時の動き
    $(window).on('load scroll resize',function (){
      $('.fadein').each(function(){
        var elementTop = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elementTop - windowHeight + 100){
        $(this).addClass('contents');
        }
      });
    });
  });


$(function(){
var scrollStart=$('.start').offset().top;
var scrollEnd=$('.end').offset().top;
var windowHeight=$(window).height();
var distance=0;

$(document).on('load scroll resize',function (){
  distance=$(this).scrollTop();

  if (scrollStart <= distance){
    $('.start').addClass('fixed');
  }else if(scrollStart >= distance){
    $('.star').removeClass('fixed');
  }

  if (scrollEnd <= distance + windowHeight){
    $('.start').fadeOut();
  }else{
    $('.start').fadeIn();
  }
});
	});


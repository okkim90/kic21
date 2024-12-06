/* 스크롤 이벤트 */
var vh = $(window).height();
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return (elementBottom > viewportTop )  && (elementTop < viewportBottom ) ;
};




$(function(){
    $(window).on('load resize',function(){
        vh = $(window).height();
    });
    $(window).on('load resize scroll',function(){
        $('.aniBox').each(function(){
            let target = $(this);
            if(target.isInViewport()){
                setTimeout(function(){
                    console.log('123123')
                    target.addClass('gogo');
                },100)
                
            }
        });
    });
});


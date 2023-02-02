const $header = $('.header');
const $header_menu = $('.header_menu');
const $nav = $('#nav');
const $btn_nav =  $('.btn_toggle_nav');


$(window).on('load resize',function(){
// Hide Header on on scroll down
    let didScroll = false;
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('#header').outerHeight();

    $(window).scroll(function(event){
        
        //$('#header').addClass('scrolled');
        didScroll = true;
    });

    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 0);


    

    function hasScrolled() {
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop ){
            // Scroll Down
            if($('#header').hasClass('nav_on') || $('#header').hasClass('m_nav_on')){
            
            }else{
                $('#header').removeClass('down').addClass('up');
            }
            
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#header').removeClass('up').addClass('down');
            }
        }
        
        lastScrollTop = st;
    }

    if (!(window.innerWidth<1025)){
        $header.removeClass('m_nav_on');
    }
});


$(window).on('load resize scroll',function(){
    nav_ani();
    nav_bg();
    
   
});

function nav_ani(){
    $header_menu.on('mouseover',function(){
        if (window.innerWidth < 1025) return;
        $header.addClass('nav_on');
    });
    $header_menu.on('mouseleave',function(){
        if (window.innerWidth < 1025) return;
        $header.removeClass('nav_on');
    });
}

nav_bg();
function nav_bg(){
    let pos = this.scrollY;
    if(pos <= 100){
        if (!$('.container').hasClass('no-visual')) {
            $header.addClass('top');
        }
    }else{
        $header.removeClass('top');
    }
};

$btn_nav.on('click',function(){
    toggle_nav();
});
function toggle_nav(){
    console.log('123123');
    if($header.hasClass('m_nav_on')){
        $header.removeClass('m_nav_on');
    }else{
        $header.addClass('m_nav_on');
    }
}




//     let before = window.scrollY;
//     let pos = this.scrollY;
//     console.log(pos);
//     let isScrolling;
//     if(pos <= 100){
//         if (!$('.container').hasClass('no-visual')) {
//             $header.addClass('top');
//         }
//     }else{
//         $header.removeClass('top');
//     }
//     window.addEventListener('scroll',(ev)=>{
//         pos = window.scrollY;
//         if(pos <= 100){
//             if (!$('.container').hasClass('no-visual')) {
//                 $header.addClass('top');
//             }
//         }else{
//             $header.removeClass('top');
//         }
        
//         if($header.hasClass('nav_on')){
//             return;
//         }else{
            
//             if(before < window.scrollY && pos > 100) {
//                 header_up();
//             }else {
//                 header_down();
//             } 
//             before = window.scrollY;
//         }
        
//     }, false);




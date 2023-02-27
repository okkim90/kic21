



if($('.right_nav_area').length){
    let r_nav = $('.right_nav_area');
    let r_nav_w = $('.right_nav_wrap');
    $(window).on('load scroll',function(){
    
        let top_pos = r_nav_w.offset().top; 
        let win_pos = this.scrollY;
        if(win_pos > top_pos){
            r_nav.addClass('on');
        }else{
            r_nav.removeClass('on');
        }
    });
}



function close_popup(target){
    let $this = $(target);
    let $layer_popup = $this.parents('.layer_popup');
    $layer_popup.removeClass('on');
}



$('.sub_tab_link.no_link').on('click',function(e){
    e.preventDefault();
    let $li = $(this).parents('.sub_tab_item');
    let $idx = $li.index();
    let $tabCont = $('.tab_cont_wrap').find('.tab_cont');
    //console.log($idx);
    $li.addClass('on').siblings('.sub_tab_item').removeClass('on');
    $tabCont.removeClass('on');
    $tabCont.eq($idx).addClass('on');
});
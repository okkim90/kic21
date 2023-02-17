function open_file(target){
    let $this = $(target);
    let $input_file = $this.parents('.file_box').find('.f_hidden');
    $input_file.trigger('click');
}

function select_file(target){
    let $this = $(target);
    let $val = $this.val();
    let $file_box = $this.parents('.file_box');
    let $input_txt = $file_box.find('.f_input');

    

    console.log($val);
    if($val){
        $input_txt.val($val);
        $file_box.addClass('hasFile');
        

        
        let $idx = $file_box.data('val');
        let $del_chk = $(`.del_chk${$idx}`);
        console.log($idx);
        $del_chk .val($idx);
    }
}

function del_file(target){
    let $this = $(target);
    let $file_box = $this.parents('.file_box');
    let $input_file = $file_box.find('.f_hidden');
    let $input_txt = $file_box.find('.f_input');
    
    $file_box.removeClass('hasFile');
    $input_file.val(null);
    $input_txt.val(null);
    console.log($input_file.val());


    let $idx = $file_box.data('val');
    let $del_chk = $(`.del_chk${$idx}`);
    console.log($idx);
    $del_chk .val($idx);

}

function add_form(max){
    let $file_set = `<div class="file_set">
        <div class="file_box">
            <input type="file" name="files[]" class="f_hidden" onchange="select_file(this)">
            <input type="text" class="f_input" placeholder="파일을 선택해주세요." onclick=" open_file(this)" readonly>
            <button class="btn_del" onclick=" del_file(this)"><span class="blind">파일삭제</span></button>
        </div>
        <button class="btn_remove" onclick="del_form(this)"><span class="blind">행 삭제</span></button>
    </div>`
    let $file_wrap = $('.file_wrap');
    let $length = $file_wrap.find('.file_set').length;
    if($length >= max){
        alert(`첨부파일은 최대 ${max}개 까지 등록 가능합니다.`)
    }else{
        $file_wrap.append($file_set);
    }
}

function del_form(target){
    let $this = $(target);
    let $file_set = $this.parents('.file_set');
    let $file_box = $file_set.find('.file_box');
    
    let $idx = $file_box.data('val');
    let $del_chk = $(`.del_chk${$idx}`);
    console.log($idx);
    $del_chk .val($idx);


    $file_set.remove();
    
}
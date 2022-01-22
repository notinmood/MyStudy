import $ from "jquery";
import {helper} from "basiclibrary.javascript/utils/stringHelper.mjs"



$(document).ready(function(){
    $('#btnOK').click(function(){
        alert('你好！') ;
    });

    $('button').on("click",function(){
        let whole ="qingdao city";
        let result = helper.left(whole,3);
        alert(result) ;
    });
});

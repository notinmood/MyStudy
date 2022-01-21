import $ from "jquery";

$(document).ready(function(){
    $('#btnOK').click(function(){
        alert('你好！') ;
    });

    $('button').on("click",function(){
        alert('hello！') ;
    });
});

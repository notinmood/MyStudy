import $ from "jquery";
import {helper} from "basiclibrary.javascript/utils/stringHelper.mjs";
import * as st from "store2";


$(document).ready(function () {
    $('#btnOK').click(function () {
        alert('你好！');
    });

    $('button').on("click", function () {
        let whole = "qingdao city";
        let result = helper.left(whole, 3);
        alert(result);
    });

    $('#btnStoreSet').click(function () {
        st.default.set("myKey", "myValue");
    });

    $('#btnStoreGet').click(function () {
        let result = st.default.get("myKey");
        alert(result);
    });
});

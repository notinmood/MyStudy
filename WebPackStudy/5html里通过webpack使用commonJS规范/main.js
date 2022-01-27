const ah = require("basiclibrary.javascript/utils/arrayHelper");
const nh = require("basiclibrary.javascript/utils/numberHelper");
const rh = require("basiclibrary.javascript/utils/requesHelper");
const jQuery = require("jquery");

let all = {nh, ah, rh};

window._bl_ = all;
window.$ = jQuery;

jQuery(document).ready(function () {
    let url = "http://localhost/diyipingce/index.php/open/getecho";
    let settings = {
        "successFunc": function (data) {
            alert(data);
        }
    };
    let submitData = {"name": "lisi"};
    let actual = rh.request(url, settings, submitData);
});


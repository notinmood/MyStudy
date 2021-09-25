const axios = require("axios");

/**
 * 在浏览器下的使用等更多信息,请参看 E:\myworkspace\MyStudy\PHP\AxiosStudy 内
 */

//如果没有指定baseURL,那么此处的url必须是完整的路径
axios.get('http://localhost/PHP.Study/AxiosStudy/server.php').then((response) => {
    console.log(response.data);
}).catch((reason) => {
    console.log(reason.toString());
});
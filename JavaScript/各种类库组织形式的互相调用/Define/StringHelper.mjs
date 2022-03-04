/**
 * 格式化字符串
 * ════════════════════════
 * 字符串的格式化,建议使用 `${key}` 这种方式
 * @param args
 * @returns {String}
 */
String.prototype.format = function (args) {
    let result = this;
    if (arguments.length < 1) {
        return result;
    }

    let data = arguments;		//如果模板参数是数组
    if (arguments.length === 1 && typeof (args) == "object") {
        //如果模板参数是对象
        data = args;
    }

    for (let key in data) {
        let value = data[key];
        if (undefined !== value) {
            result = result.replace("{" + key + "}", value);
        }
    }
    return result;
}

/**
 * 将字符串进行前后翻转
 * @returns {string}
 */
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

function sayHello(name) {
    return "hello " + name;
}

export default {sayHello};
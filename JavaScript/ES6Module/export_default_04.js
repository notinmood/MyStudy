// export_default_04.js

/**
 * 如果是给某些类型指定原型方法,那么export的时候,直接 {} 内部为空就好.
 */

/**
 * 将字符串进行前后翻转
 * @returns {string}
 */
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

export default {}
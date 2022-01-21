/**
 * 截取某个字符串的子字符串
 * @param {*} whole 待截取的全字符串
 * @param {*} length 截取长度
 * @param {*} positive 截取方向（true表示正向，false表示反向）
 */
const getSubString = function (whole, length, positive = true) {
    const realLength = whole.length;
    let result = '';
    if (length >= realLength) {
        result = whole;
    } else if (positive == true) {
        result = whole.substring(0, length);
    } else {
        result = whole.substring(realLength - length, realLength);
    }
    return result;
};

/**
 * 从右向左截取字符串
 * @param {*} whole
 * @param {*} length
 */
const right = function (whole, length) {
    return getSubString(whole, length, false);
};

/**
 * 从左向右截取字符串
 * @param {*} whole
 * @param {*} length
 */
const left = function (whole, length) {
    return getSubString(whole, length, true);
};

/**
 * 将字符串进行方向反转
 * @param {*} data 待反转的字符串
 */
const reverse = function (data) {
    return data.split('').reverse().join('');
};



export {
    getSubString,
    reverse,
    right,
    left,
};

let originalArray = [];

/**
 * 设置第二个参数为删除元素的个数
 * @type {string[]}
 */
originalArray = initArray();
originalArray.splice(1, 1);
console.log(originalArray);

/**
 * 删除一个元素，添加一个新元素的方式，达到更新数组元素的目的
 * @type {string[]}
 */
originalArray = initArray();
originalArray.splice(1, 1, "qingdao");
console.log(originalArray);

/**
 * 通过把第二个参数deleteCount设置为0,配合第三个参数一起使用，可以达到为数组添加新元素的作用
 */
originalArray = initArray();
originalArray.splice(1, 0, "qingdao");
console.log(originalArray);

function initArray() {
    return ["beijing", "shanghai", "guangzhou", "shenzhen"];
}
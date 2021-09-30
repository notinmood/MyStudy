/**
 * 1、for...in 是把目标数组作为一个对象来看,来查看他内部所有的各个成员.
 *      in查看的是key
 *      (in表示查看某某内部成员,但不管内部成员的性质是否一致全部列出来)
 *
 * 2、其他(for...of、forEach、length)都是查看数组本身上的索引元素的情形.
 *      of查看的是value
 *
 * 记忆方法：
 * for...of 两者都有一个相同的o,就列出相同性质的内部元素(这个性质是索引元素)
 */


Object.prototype.objCustom = function () {
};
Array.prototype.arrCustom = function () {
};

let myArray = [1, 3, 5];
myArray['foo'] = "FOO";

/**
 * 1、
 * 标准length属性,只能把索引数组的长度求取出来;
 * 如果是关联数组(或者数组内有关联元素)则无能为力.
 */
console.log("标准length:" + myArray.length);
console.log("════════════════════════");

/**
 * 2、
 * for...of取到的是索引数组的元素value;
 * 仅仅只能取到索引的元素,其他关联元素、原型链元素无法取到.
 */
console.log("for...of内容：");
let ofCount = 0;
for (const number of myArray) {
    console.log(number);
    ofCount++;
}
console.log("for...of结果:" + ofCount);
console.log("════════════════════════");

/**
 * 3、
 * for...in取到的是数组所有的元素的key;
 * 所有的元素包括索引元素、关联元素、通过原型链自定义元素
 */
console.log("for...in内容:");
let inCount = 0;
for (const myArrayKey in myArray) {
    console.log(myArrayKey);
    inCount++;
}
console.log("for...in结果:" + inCount);
console.log("════════════════════════");

/**
 * 4、
 * for...in + hasOwnProperty取到的是数组本身所有的元素的key;
 * 数组身所有的元素包括索引元素、关联元素,但不包括通过原型链的自定义元素.
 */
console.log("for...in + hasOwnProperty内容:");
let inHasCount = 0;
for (const myArrayKey in myArray) {
    if (myArray.hasOwnProperty(myArrayKey)) {
        console.log(myArrayKey);
        inHasCount++;
    }
}
console.log("for...in + hasOwnProperty结果:" + inHasCount);
console.log("════════════════════════");

/**
 * 5、
 * forEach能得到索引数组key、value,
 * 其他关联元素、原型链元素无法得到.
 */
console.log("forEach内容：");

let eachCount = 0;
myArray.forEach((v, i, a) => {
    console.log(`第 ${i}元素为 ${v}`);
    eachCount++;
});
console.log("forEach结果:" + eachCount);


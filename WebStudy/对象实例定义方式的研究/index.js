/**
 * @file   : index.js
 * @time   : 10:17
 * @date   : 2022/2/8
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 如果对象属性的 key 与 value 相同，则可以采用ES6的简写方法
// |::一一·|  定义对象属性的时候，key 可以用单引号或双引号包裹起来，也可以不用引号包裹
// +--------------------------------------------------------------------------

const aa = "AA";

let fa = function doSomething() {

};

function fb() {

};

/**
 * 定义对象的标准写法 1（key 不用引号包裹）
 */
let objectA1 = {
    aa: aa,
    fa: fa,
    fb: fb,
};

/**
 * 定义对象的标准写法 2（key 使用引号包裹）
 */
let objectA2 = {
    "aa": aa,
    "fa": fa,
    "fb": fb,
};

/**
 * 对象定义的简写方式（如果 key 和 value 的字面文字相同，可以省略简写）
 */
let objectB = {
    aa,
    fa,
    fb,
    fbb: fb,
};

console.log("标准写法 1 的结果");
console.log(objectA1);
console.log("标准写法 2 的结果");
console.log(objectA2);
console.log("简写方式的结果");
console.log(objectB);

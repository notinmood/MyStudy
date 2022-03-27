/**
 * @file   : 4.ES6创建对象新方法.js
 * @time   : 8:45
 * @date   : 2022/3/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 1. 通过传统方式 (字面量 {} 方式)定义对象
 */
let p = {
    'name'   : 'zhangsan',
    'age'    : 20,
    'getName': function () {
        return this.name;
    },
    'setName': function (name) {
        this.name = name;
    }
};

/**
 * 2. 以上面创建的对象为基础，创建新对象
 */
console.log("────────────────────────");
let q1 = new Object(p);
console.log("以下显示通过 let q = new Object(p);创建新对象，跟源对象的比较结果：");
determineIsEqual(p, q1);

console.log("────────────────────────");
let q2 = p;
console.log("以下显示 let q = p; 直接赋值，创建新对象，跟源对象的比较结果：");
determineIsEqual(p, q2);


/**
 * 3. ES6 的 Object.create方法
 */
console.log("────────────────────────");
console.log("以下显示通过Object.create(p)获得对象，跟原对象比较的结果：");
let q3 = Object.create(p);
determineIsEqual(p, q3);


function determineIsEqual(originalValue, newValue) {
    if (Object.is(originalValue, newValue)) {
        console.log("YYY相等");
    } else {
        console.log("NNN不等");
    }
}
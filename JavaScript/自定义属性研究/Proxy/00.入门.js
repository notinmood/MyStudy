/**
 * @file   : 00.入门.js
 * @time   : 9:07
 * @date   : 2022/3/2
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

const person = {
    name: "张三"
};

const proxy = new Proxy(person, {
    get(target, property) {
        if (property in target) {
            return target[property];
        } else {
            return `当前对象不存在属性-${property}`;
        }
    }
});


console.log(proxy.name);// 张三
console.log(proxy.age); // 当前对象不存在属性-age

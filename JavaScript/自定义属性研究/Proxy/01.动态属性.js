/**
 * @file   : 01.动态属性.js
 * @time   : 15:20
 * @date   : 2022/3/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 这是一个完全有动态成员组成的对象（因为最开始的时候，初始的对象为{}）
// +--------------------------------------------------------------------------

let handler = {
    get: function(target, key) {
        console.log('正在读取属性 '+key);
        return target[key]; // 不是target.key
    },
    set: function(target, key, value) {
        console.log('正在设置属性 '+key);
        target[key] = value;
    }
}

let my = new Proxy({},handler);
my.name= "zhangsan";
console.log(my.name);
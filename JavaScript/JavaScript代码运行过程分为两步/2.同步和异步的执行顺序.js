/**
 * @file   : 2.同步和异步的执行顺序.js
 * @time   : 19:56
 * @date   : 2022/5/10
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

setTimeout(function () {
    console.log(1)
}, 0);

new Promise(function (resolve, reject) {
    console.log(2); // 这里是同步任务
    resolve();
}).then((res) => {
    console.log(3);
})
console.log(4);
// 输出结果是 2  4  3  1

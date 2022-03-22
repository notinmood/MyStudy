/**
 * @file   : 02.拦截function.js
 * @time   : 15:30
 * @date   : 2022/3/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| Proxy除了可以拦截一般的object对象外，还能拦截 function，数组甚至其他Proxy
// +--------------------------------------------------------------------------

function sub(a, b) {
    return a - b;
}

let handler = {
    apply: function (target, ctx, args) {
        console.log('handle apply。应用 handler 处理函数');

        // // 方式1
        // return Reflect.apply(...arguments);

        // // 方式2
        // console.log(target);
        // console.log(args);
        // return target(...args);

        // 方式3
        return Reflect.apply(target, ctx, args);
    }
}
let proxy = new Proxy(sub, handler);
let myValue = proxy(100, 20);
console.log(myValue);
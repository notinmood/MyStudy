/**
 * @file   : 02.拦截function.js
 * @time   : 15:30
 * @date   : 2022/3/3
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function sub(a, b){
    return a - b;
}
let handler = {
    apply: function(target, ctx, args){
        console.log('handle apply');
        return Reflect.apply(...arguments);
    }
}
let proxy = new Proxy(sub, handler);
console.log(proxy(2, 1));
// /**
//  * @file   : 01.dd.js
//  * @time   : 9:08
//  * @date   : 2022/3/2
//  * @mail   : 9727005@qq.com
//  * @creator: ShanDong Xiedali
//  * @company: HiLand & RainyTop
//  */
// const pipe = (function () {
//     return function (value) {
//         const funcStack = [];
//         const proxy = new Proxy({}, {
//             get: function (pipeObject, fnName) {
//                 if (fnName === 'get') {
//                     return funcStack.reduce(function (val, fn) {
//                         return fn(val);
//                     }, value);
//                 }
//                 funcStack.push(window[fnName]);
//                 return proxy;
//             }
//         });
//
//         return proxy;
//     }
// }());
//
// const double = n => n * 2;
// const pow = n => n * n;
// const reverseInt = n => n.toString().split("").reverse().join("") | 0;
//
// pipe(3).double.pow.reverseInt.get; // 63
/**
 * @file   : 2.对象的解构.ts
 * @time   : 10:53
 * @date   : 2022/4/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

// @ts-ignore
let {a, b} = o;//从o中解构出a,b
console.log(a);
console.log(b);


// @ts-ignore
let {a, ...rest2} = o;
console.log(a);
console.log(rest2);



/**
 * @file   : typeOf的使用.ts
 * @time   : 12:24
 * @date   : 2022/4/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import {Worker} from "../../00.res/Worker";

let _key: any = 123;
console.log(typeof _key); //number

_key= "qingdao";
console.log(typeof _key);//string

_key={};
console.log(typeof _key); //object

_key= new Date();
console.log(typeof _key); //object

_key= new Worker("zhangsan","HR");
console.log(typeof _key); //object

// 更多 typeof 的使用参见 99.特殊符号研究\7.关键字typeof

/**
 * @file   : var2.函数可以作为作用域.js
 * @time   : 10:29
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

var myFunc= function (){
    var innerData= "qingdao";
}

/**
 * 外部代码无法访问到 函数内部 var 变量的。
 */
//console.log(innerData);
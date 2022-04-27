/**
 * @file   : 5.使用extends做类型关系判断.ts
 * @time   : 15:30
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

type result3 = string extends string | number ? true : false // true

const myVar1 :result3= true;

//
// const myVar2 :result3= false;

// if(string extends string | number)

/**
 * @file   : 0.入门.ts
 * @time   : 9:46
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let str: string = 'Hi'
console.log(typeof str[Symbol.iterator]) // function
console.log(str[Symbol.iterator]().next()) // { value: 'H', done: false }
console.log(str[Symbol.iterator]().next().value) // H

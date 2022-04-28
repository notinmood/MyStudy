/**
 * @file   : 2.对类型使用typeof.ts
 * @time   : 11:23
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

import {Student}   from "../../00.res/Student";
import {Worker}    from "../../00.res/Worker";
import {President} from "../../00.res/President";

type sType = typeof Student;//new (): Student
console.log(typeof Student);//function

type wType = typeof Worker; //new (name: string, workType: string): Worker
console.log(typeof Worker); //function

/**
 * 以下演示，虽然 typeof Worker 和 typeof Student 是不同的函数形式（函数的签名不同），
 * 但如果用 === 或者 == 简单对比还是一样的。
 */
if (typeof Student === typeof Worker) {
    console.log("YY-两个相等！");
} else {
    console.log("NN-两个不等！");
}


// 通过这两个新类型 sType 和 wType 定义新的函数 需要进一步研究
const s: sType = Student; //变量 s 就是一个函数，这个函数的签名为 new():Student
console.log(s);//[Function: Student]
console.log(new s());//Student {}

const w: wType = Worker;//变量 w 就是一个函数，这个函数的签名为 new (name: string, workType: string): Worker
console.log(w);//[Function: Worker]
console.log(new w("zhangsan", "HR"));//Worker { name: 'zhangsan', workType: 'HR' }


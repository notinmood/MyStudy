/**
 * @file   : Student.ts
 * @time   : 7:58
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
import {Human} from "./Human";

export class Student extends Human {
    study(): void {
        console.log("我是一个学生，我正在读书。");
    }
}

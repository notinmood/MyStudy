/**
 * @file   : 2.转换失败的情形.ts
 * @time   : 7:52
 * @date   : 2022/4/20
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
import {Human}   from '../00.res/Human';
import {Worker}  from '../00.res/Worker';
import {Student} from "../00.res/Student";

const w = new Worker("zhangsan", "IT Engineer");

const h = w as Human;
console.log(h); // Worker { name:'zhangsan', workType:'IT Engineer'}

const s = h as Student;
console.log(s); // Worker { name:'zhangsan', workType:'IT Engineer'}

const t = typeof s;
console.log(t);

if (s instanceof Student) {
    console.log("YY 是Student的实例！");
} else {
    console.log("NN 不是Student的实例！");
}

// +--------------------------------------------------------------------------
// |::说明·| 通过本示例我们可以发现使用类型断言，只是可以改变对象在IDE里面的智能感知情形，
// |::一一·| 不会改变对象在内存里面真实的存在和所属类型。（本例中对象始终为 Worker{...}）
// +--------------------------------------------------------------------------

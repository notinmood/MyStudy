/**
 * @file   : 1.X.联合类型和交叉类型综合使用2.ts
 * @time   : 8:58
 * @date   : 2022/5/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    type XPoint = {
        myName: string,

        xv: number,
        id: number,
    };

    type YPoint = {
        myName: string,

        yv: string,
        code: string,
    };

    type XNY = XPoint & YPoint;
    type XUY = XPoint | YPoint;

    const xPoint: XPoint = {
        xv    : 123,
        id    : 123,
        myName: "i am x",
    };

    const yPoint: YPoint = {
        yv    : "123",
        code  : "qingdao",
        myName: "i am y",
    };

    let xuy: XPoint | YPoint;
    // 把 A 或者 B 的实例，都可以赋值给联合后的类型变量
    xuy = xPoint;
    xuy = yPoint;
    xuy = {...xPoint, ...yPoint};

    let xny: XPoint & YPoint;
    // A 或者 B 的实例，都无法赋值给交叉后的类型变量
    // xny = xPoint;
    // xny = yPoint;
    // 只有同时包含了 A 和 B 类型的成员才能赋值给交叉类型的变量
    xny = {...xPoint, ...yPoint};//...是解构语法


    function using交叉类型(p: XPoint & YPoint) {        //myName 可以正常访问
        console.log(p.myName);
        console.log(p.id);
        console.log(p.code);
        console.log(p.xv);
        console.log(p.yv);
    }

    function using联合类型(p: XPoint | YPoint) {
        // 只有 A、B 内共同含有的属性才可以访问
        console.log(p.myName);

        // 其他各种只属于 A 或者只属于 B 的属性无法访问
        // console.log(p.id);
        // console.log(p.code);
    }
}

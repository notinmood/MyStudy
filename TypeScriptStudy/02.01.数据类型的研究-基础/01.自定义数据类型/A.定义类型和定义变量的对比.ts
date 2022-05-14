/**
 * @file   : A.定义类型和定义变量的对比.ts
 * @time   : 17:51
 * @date   : 2022/5/6
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 定义函数的时候，可以先定义类型再去定义函数和执行函数；也可以直接定义函数和执行函数
// +--------------------------------------------------------------------------

export namespace MyNameSpace {
    //1. 先定义函数类型，再定义函数，最后执行函数。
    type myType = (string, number) => string;
    const myFunc1: myType = (x: string, y: number): string => {
        return `hello,${x} ${y.toString()}`;
    }

    const result: string = myFunc1("qingdao", 1908);
    console.log(result);

    //2. 直接定义函数和执行函数
    const myFunc2 = (input: string | number) => {
        return `输入的信息为${input.toString()}`;
    }
    console.log(myFunc2(123));
}

/**
 * @file   : 4.ReturnType和infer.ts
 * @time   : 12:10
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


/**
 * infer 一般用于 T 为 function 的泛型中；
 * 用于延时推断函数的参数或者返回值的类型。
 */

export namespace M {
    interface User {
        name: string;
        age: number;
    }

    type Func1 = (user: User) => void;
    type Func2 = () => User;

    const add = (x: number, y: number) => x + y;
    type Func3 = typeof add;

    const power = (x: number) => x * x;
    type Func4 = typeof power;

    /**
     * infer 使用于参数部分
     */
    type ParamType<T> = T extends (param: infer P) => any ? P : T;

    // TODO:xiedali@2022/5/5 param0 和 param3 为什么是这个结果？
    type param0 = ParamType<Func2>; // () => User extends ((param: infer P) => any) ? P : (() => User)
    type param1 = ParamType<string>; // string
    type param2 = ParamType<Func1>; // User
    type param3 = ParamType<Func3>; // (x: number, y: number) => number
    type param4 = ParamType<Func4>; // number

    /**
     * infer 使用于返回值
     */
    type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
    type result1 = ReturnType<Func1>; // void
    type result2 = ReturnType<Func2>; // User
    type result3 = ReturnType<Func3>; // number
    type result4 = ReturnType<Func4>; // number
}


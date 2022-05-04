/**
 * @file   : 9.综合使用.ts
 * @time   : 11:21
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 定义一种方法，可以取出接口类型中的函数类型：
 */

export namespace MyNameSpace {
    type FunctionPropertyCalc<T> = { [K in keyof T]: T[K] extends Function ? K : never };
    type FunctionPropertyNames<T> = FunctionPropertyCalc<T>[keyof T];
    type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

    interface Part {
        id: number
        name: string
        subParts: Part[]
        firstFn: (brand: string) => void,
        anotherFn: (channel: string) => string
    }

    type FnCalc = FunctionPropertyCalc<Part>;
    type FnNames = FunctionPropertyNames<Part>;
    type FnProperties = FunctionProperties<Part>;
}

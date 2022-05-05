/**
 * @file   : 0.内置类型的实现原理.ts
 * @time   : 12:17
 * @date   : 2022/5/4
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


/**
 * Partial<T>等类型都是 ES5 内部已经定义好的类型，此处只是演示其实现逻辑
 */


export namespace MyNameSpace {
    /**
     * Make all properties in T optional
     */
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

    /**
     * Exclude from T those types that are assignable to U
     */
    type Exclude<T, U> = T extends U ? never : T;

    type Readonly<T> = {
        readonly [K in keyof T]: T[K]
    }

    type Pick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    /**
     * Obtain the return type of function type
     */
    type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
}

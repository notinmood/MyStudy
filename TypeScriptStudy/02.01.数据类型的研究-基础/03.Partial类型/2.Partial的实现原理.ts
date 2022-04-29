/**
 * @file   : 2.Partial的实现原理.ts
 * @time   : 9:26
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    /**
     * Make all properties in T optional
     * Partial<T> 是 ES5 内部已经定义好的类型，此处只是演示其实现逻辑
     */
    type Partial<T> = {
        [P in keyof T]?: T[P];
    };

}

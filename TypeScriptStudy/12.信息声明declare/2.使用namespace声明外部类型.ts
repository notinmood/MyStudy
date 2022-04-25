/**
 * @file   : 2.使用namespace声明外部类型.ts
 * @time   : 8:41
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，
 * 它用来表示全局变量是一个对象，包含很多子属性。
 *
 * 比如 aQuery 是一个全局变量，它是一个对象，提供了一个 aQuery.ajax 方法可以调用，
 * 那么我们就应该使用 declare namespace aQuery 来声明这个拥有多个子属性的全局变量。
 */

// src/aQuery.d.ts
declare namespace aQuery {
    function ajax(url: string, settings?: any): void;
}

// src/index.ts
aQuery.ajax('/api/get_something');

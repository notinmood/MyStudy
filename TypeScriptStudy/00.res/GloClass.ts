/**
 * @file   : g.ts
 * @time   : 9:20
 * @date   : 2022/4/25
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 如果不使用 export 关键字定义标的信息，那么这个标的信息就是全局级别的。
 * 但可以，使用的时候仍需 import 引入，否则还是无法找到这个标的信息。
 * 所以不推荐使用 全局级别 的标的信息，其不仅会污染 全局空间，同时依然还需要 import。
 */

class GloClass {
    sayHi: (string) => void = (name) => {
        return `hello,${name}`;
    }
}

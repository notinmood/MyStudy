/**
 * @file   : 2.构造函数内赋值以及类型的属性可以省略.ts
 * @time   : 11:51
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export class Bar {
    // 给参数 name 加一个访问控制符，编译器就会自动将 name 编译成类型的字段
    constructor(private name: string) {
    }

    getName() {
        return this.name;
    }
}

const bar = new Bar("qingdao");
console.log(bar.getName());

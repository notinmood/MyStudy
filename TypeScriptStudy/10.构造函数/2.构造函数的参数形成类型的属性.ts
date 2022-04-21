/**
 * @file   : 2.构造函数内赋值以及类型的属性可以省略.ts
 * @time   : 11:51
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 2.构造函数内赋值以及类型的属性可以省略
//  参数属性通过给构造函数参数前面添加一个访问限定符来声明。使用 private
//  限定一个参数属性会声明并初始化一个私有成员；对于 public 和 protected 来说也是一样。
// +--------------------------------------------------------------------------

export class Bar {
    // 给参数 name 加一个访问控制符，编译器就会自动将 name 编译成类型的字段。这种用法称为参数属性（即构造函数的参数形成类型的属性）
    constructor(private name: string) {
        //can do nothing;
    }

    getName() {
        return this.name;
    }
}

//定义类型实例并使用
const bar = new Bar("qingdao");
console.log(bar.getName());


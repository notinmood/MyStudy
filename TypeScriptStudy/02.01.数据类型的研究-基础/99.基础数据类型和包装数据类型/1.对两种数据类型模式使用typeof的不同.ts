/**
 * @file   : 1.对两种数据类型模式使用typeof的不同.ts
 * @time   : 7:51
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    const data_s: string = "value";
    const data_SS: String = new String("qingdao");

    type type_s = typeof data_s;//"string"
    type type_SS = typeof data_SS;//String

    // TODO:xiedali@2022/4/30 typeof 对基础类型进行运算后，返回的是字面量类型？
    if (typeof data_s == "string") {

    }
}

/**
 * @file   : 6.keyof的使用.ts
 * @time   : 9:54
 * @date   : 2022/4/27
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * keyof 是获取类型成员名称的操作符。
 *
 * 假设 T 是一个类型，那么 keyof T 产生的类型是 T 的所有成员名称字符串字面量类型构成的联合类型。
 * 例如下面代码中 Ikea = 'name' | 'count'。IKea是 字符串字面量构成的类型 'name' 和 'count' 的联合类型
 * 特别说明:T是数据类型，并非数据本身。
 *
 * 更多参考 https://blog.csdn.net/qq_34629352/article/details/103557567
 */

export namespace MyNameSpace {
    interface IProps {
        name: string;
        count: number;
    }

    type Ikea = keyof IProps; // Ikea = 'name' | 'count'

    function testKeyof(props: Ikea): void {
        let _length = props.length;
        console.log(`长度为 ${_length}`);
    }

    // 因为变量 param 是 IKea 类型，因此其只能接受 字符串 "name" 或 "count" 作为其值。
    let param: Ikea;
    param = "name";
    testKeyof(param);
    param = "count";
    testKeyof(param);
}

/**
 * @file   : 4.1.other.ts
 * @time   : 6:50
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    type FieldState = {
        value: string;
    };

    type FromState = {
        [filedName: string]: FieldState;
        // 以下代码编译失败，他不符合上面有[]指定的统一规整
        //isValid: boolean; // Error: 不符合索引签名
    };

    type MyState = {
        [filedName: string]: FieldState | boolean;
        /**
         * 因为 [] 通用规则内，含有了 boolean 类型，因此下面定义属性是 ok 的。
         */
        isValid: boolean;
    }
}

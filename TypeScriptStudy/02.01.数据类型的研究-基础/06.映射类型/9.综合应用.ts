/**
 * @file   : 9.综合应用.ts
 * @time   : 9:20
 * @date   : 2022/5/2
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    // +--------------------------------------------------------------------------
    // |::说明·| 映射类型也可以跟其他的功能搭配使用，举个例子，这是一个使用条件类型的映射类型，会根据对象是否有 pii 属性返回 true 或者 false :
    // +--------------------------------------------------------------------------

    type ExtractPII<Type> = { [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false; };
    type DBFields = {
        id: { format: "incrementing" };
        name: { type: string; pii: true };
    };

    type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
    // type ObjectsNeedingGDPRDeletion = { //    id: false; //    name: true; // }
}

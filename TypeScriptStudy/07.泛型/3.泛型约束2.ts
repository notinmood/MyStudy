/**
 * @file   : 3.泛型约束2.ts
 * @time   : 19:52
 * @date   : 2022/4/28
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 这个例子有点绕：用约束后的泛型定义新的类型 type
// +--------------------------------------------------------------------------

export namespace MyNameSpace {
    interface IMessage {
        message: string;
    }

    class Message implements IMessage {
        message: string = "nbc";
    }

    /**
     * 因为要使用 T类型里面的 message 属性。因此就要求 类型T必须继承至含有 message 属性的类型
     */
    type MessageOf<T extends IMessage> = T["message"];
    type MessageOf2<T extends { message: unknown }> = T["message"];

    let myName: MessageOf<Message>;
    myName = "qingdao";
    console.log(myName); //qingdao
}

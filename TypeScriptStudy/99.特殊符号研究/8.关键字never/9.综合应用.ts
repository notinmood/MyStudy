/**
 * @file   : 9.综合应用.ts
 * @time   : 16:22
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    /**
     * 如果类型 T 兼容于 { message: unknown }（即，类型 T 内含有属性 message），
     * 那么就返回 message 属性的类型；否则返回 never 类型。
     */
    type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

    interface Email {
        message: string;
    }

    class Poke {
        message: number = 123;
    }

    interface Dog {
        bark(): void;
    }

    type EmailMessageContents = MessageOf<Email>; //string
    type DogMessageContents = MessageOf<Dog>;//never
    type PokeMessageContents = MessageOf<Poke>;//number
}

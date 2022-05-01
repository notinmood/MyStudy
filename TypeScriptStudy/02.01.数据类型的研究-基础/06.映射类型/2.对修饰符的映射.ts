/**
 * @file   : 2.综合使用.ts
 * @time   : 7:15
 * @date   : 2022/5/2
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * 映射修饰符（Mapping Modifiers）
 * 在使用映射类型时，有两个额外的修饰符可能会用到，一个是 readonly，用于设置属性只读，一个是 ? ，用于设置属性可选。
 * 你可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀。
 */

export namespace MyNameSpace {
    // 删除属性中的只读特性
    type CreateMutable<Type> = { -readonly [Property in keyof Type]: Type[Property]; };
    type LockedAccount = { readonly id: string; readonly name: string; };
    type UnlockedAccount = CreateMutable<LockedAccount>; // {id: string;name: string;}

    // 删除属性中的可选特性
    type Concrete<Type> = { [Property in keyof Type]-?: Type[Property]; };
    type MaybeUser = { id: string; name?: string; age?: number; };
    type User = Concrete<MaybeUser>; // {id: string; name: string;age: number;}
}

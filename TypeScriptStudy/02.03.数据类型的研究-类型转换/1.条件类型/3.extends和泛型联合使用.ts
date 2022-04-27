/**
 * @file   : 2.2.extends和泛型联合使用.ts
 * @time   : 18:28
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MY {
    interface IdLabel {
        id: number; /* some fields */
    }

    interface NameLabel {
        name: string; /* other fields */
    }

    type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

    function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
        throw "unimplemented";
    }

    let a = createLabel("typescript");
    //   let a: NameLabel

    let b = createLabel(2.8);
    //   let b: IdLabel

    let c = createLabel(Math.random() ? "hello" : 42);
    //   let c: NameLabel | IdLabel
}

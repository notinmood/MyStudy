/**
 * @file   : A1.直接导出.ts
 * @time   : 9:03
 * @date   : 2022/4/22
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export const someVar = 123;
export type someType = {
    foo: string;
};

export function doSomething(input: string) {
    return input + "_" + input;
}

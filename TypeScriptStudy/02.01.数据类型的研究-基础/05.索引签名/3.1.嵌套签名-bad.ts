/**
 * @file   : 3.1.嵌套签名-bad.ts
 * @time   : 6:35
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    interface NestedCSS {
        // @ts-ignore
        color?: string; // strictNullChecks=false 时索引签名可为 undefined
        [selector: string]: string | NestedCSS;
    }

    const example: NestedCSS = {
        color      : 'red',
        '.subclass': {
            color: 'blue'
        }
    };

    const failsSilently: NestedCSS = {
        colour: 'red', // 'colour' 不会被捕捉到错误
    };
}

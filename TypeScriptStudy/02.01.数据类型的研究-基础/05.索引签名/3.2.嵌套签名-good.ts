/**
 * @file   : 3.2.嵌套签名-good.ts
 * @time   : 6:38
 * @date   : 2022/5/1
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    interface NestedCSS {
        color?: string;
        nest?: {
            [selector: string]: NestedCSS;
        };
    }

    const successful: NestedCSS = {
        color: 'red',
        nest : {
            '.subclass': {
                color: 'blue'
            }
        }
    }

    const fails: NestedCSS = {
        color: 'red',
        /**
         * 以下代码会报错
         * TS Error: 未知属性 'colour'
         */
        // colour: 'red',
    }
}

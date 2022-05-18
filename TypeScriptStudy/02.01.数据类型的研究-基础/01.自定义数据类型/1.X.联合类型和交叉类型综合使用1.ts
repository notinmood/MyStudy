/**
 * @file   : 1.X.联合类型和交叉类型深入.ts
 * @time   : 6:23
 * @date   : 2022/5/18
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    interface Ant {
        name: string;
        weight: number;
    }

    interface Fly {
        flyHeight: number;
        speed: number;
    }

    // 少了任何一个属性都会报错
    const flyAnt: Ant & Fly = {
        name     : '蚂蚁呀嘿',
        weight   : 0.2,
        flyHeight: 20,
        speed    : 1,
    };
}

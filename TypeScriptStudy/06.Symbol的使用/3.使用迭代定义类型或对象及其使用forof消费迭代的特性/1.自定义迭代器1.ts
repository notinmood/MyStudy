/**
 * @file   : 1.自定义迭代器.ts
 * @time   : 10:40
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export let obj = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done : false
                    };
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
};

// TODO:xiedali@2022/4/26 奇怪，为什么 next() 没有向前移动指针？
console.log(obj[Symbol.iterator]().next()); //{ value:'hello', done:false}
console.log(obj[Symbol.iterator]().next()); //{ value:'hello', done:false}


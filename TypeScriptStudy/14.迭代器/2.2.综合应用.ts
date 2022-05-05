/**
 * @file   : 2.2.综合应用.ts
 * @time   : 15:55
 * @date   : 2022/5/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export namespace MyNameSpace {
    let range = {
        from   : 1,
        to     : 5,
        current: 1,


        [Symbol.iterator]() {
            this.current = this.from;
            return this;
        },

        next() {
            if (this.current <= this.to) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    };

    /**
     * 需要在 tsconfig.json 内设置 "downlevelIteration":true,
     * 当然直接 设置 target=es6 的时候，也能正常执行。
     */
    for (let num of range) {
        console.log(num); // 1, 然后是 2, 3, 4, 5
    }
}

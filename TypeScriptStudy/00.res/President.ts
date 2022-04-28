import {Human} from './Human';
// +--------------------------------------------------------------------------
// |::说明·| 通过模块构造类型的例子
// +--------------------------------------------------------------------------

export class President extends Human {
    nation: string;

    constructor(name: string, nation: string) {
        super();
        this.name = name;
        this.nation = nation;
    }

    say(): void {
        console.log(`我是${this.nation}的总统${this.name}！`);
    }
}

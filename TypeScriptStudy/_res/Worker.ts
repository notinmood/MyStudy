import { Human } from './Human';
// +--------------------------------------------------------------------------
// |::说明·| 通过模块构造类型的例子
// +--------------------------------------------------------------------------

export class Worker extends Human {
  workType: string;
  constructor(name: string, workType: string) {
    super();
    this.name = name;
    this.workType = workType;
  }

  work() {
    console.log(`我是一个${this.workType},我正在工作！`);
  }
}
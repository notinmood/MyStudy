"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
const Human_1 = require("./Human");
// +--------------------------------------------------------------------------
// |::说明·| 通过模块构造类型的例子
// +--------------------------------------------------------------------------
class Worker extends Human_1.Human {
    constructor(name, workType) {
        super();
        this.name = name;
        this.workType = workType;
    }
    work() {
        console.log(`我是一个${this.workType},我正在工作！`);
    }
}
exports.Worker = Worker;
//# sourceMappingURL=Worker.js.map
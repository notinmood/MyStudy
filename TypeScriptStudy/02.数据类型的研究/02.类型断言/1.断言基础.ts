import { Human } from '../../_res/Human';
import { Worker } from '../../_res/Worker';
import { ICanEat } from '../../_res/ICanEat';

let worker = new Worker("zhangsan", "HR");
console.log(worker);
worker.work();

// +--------------------------------------------------------------------------
// |::说明·| 1. 使用 as 运算符进行类型转换
// +--------------------------------------------------------------------------
let human = worker as Human;
human.talk();


// +--------------------------------------------------------------------------
// |::说明·| 2. 使用 <> 进行类型转换
// +--------------------------------------------------------------------------
let eatable = <ICanEat>worker;
eatable.eat();

/**
 * 如果待引入的项目跟本地其他项目重名，就可以给待引入的项目指定别名
 */
import {hah, MyNameSpace as aa, YourNameSpace} from './thirdClass'

namespace MyNameSpace {
    export let myName: string = 'zhangsan';
    export let mySchool: string = "QDU";
}

console.log(aa.getName());
console.log(MyNameSpace.mySchool);
console.log(hah);
console.log(YourNameSpace.printHello());
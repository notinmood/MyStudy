import {YourNameSpace,hah,MyNameSpace as aa} from './thirdClass'

namespace MyNameSpace{
    export let myName:string='zhangsan';
    export let mySchool:string ="QDU";
}

console.log(aa.getName());
console.log(MyNameSpace.mySchool);
console.log(hah);
console.log(YourNameSpace.printHello());
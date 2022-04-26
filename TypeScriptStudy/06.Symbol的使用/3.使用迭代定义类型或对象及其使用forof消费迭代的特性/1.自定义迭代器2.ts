/**
 * @file   : 0..ts
 * @time   : 8:59
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 看到next是否想到了es6的一个新玩意儿，即Generator函数。
// |::一一·| 用Generator函数来实现Symbol.iterator接口，事半功倍。
// +--------------------------------------------------------------------------
const myObject = {};

myObject[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

const temp = myObject[Symbol.iterator]();
console.log(temp);

const nextNode = temp.next();
console.log(typeof nextNode);   //object
console.log(nextNode);          //{ value: 1, done: false }
console.log(nextNode.value);    //1

console.log(temp.next());       //{ value: 2, done: false }


// // 以下代码会报错

// for (const myObjectElement of myObject) {
//     console.log(myObjectElement);
// }

console.log('─────────────────────────────────────');
for (const myObjectKey in myObject) {
    console.log(`-- ${myObjectKey} 对应的值为 ${myObject[myObjectKey]}`);
}


/**
 * @file   : index.js
 * @time   : 11:29
 * @date   : 2022/3/5
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let myObject = {'a': 'AA', 'b': 'BB', 'c': 'CC', "key": "value",};

for (const myObjectKey in myObject) {
    console.log(myObjectKey);
}

/**
 * 因为对象 myObject 没有实现可遍历的接口，因此 for of 无法使用；
 */
// for (const myObjectElement of myObject) {
//     console.log(myObjectElement);
// }


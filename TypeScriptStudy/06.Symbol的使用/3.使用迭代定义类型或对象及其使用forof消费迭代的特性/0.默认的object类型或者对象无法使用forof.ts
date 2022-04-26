/**
 * @file   : 0..ts
 * @time   : 8:59
 * @date   : 2022/4/26
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

export const myObject = {a: "AA", b: 123, c: true};

// // 以下代码会报错
// for (const myObjectElement of myObject) {
//     console.log(myObjectElement);
// }

for (const myObjectKey in myObject) {
    console.log(`-- ${myObjectKey} 对应的值为 ${myObject[myObjectKey]}`);
}


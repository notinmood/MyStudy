/**
 * @file   : aa.ts
 * @time   : 8:22
 * @date   : 2022/4/23
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

interface IRun {
    run(): void;
}

interface ISwim {
    swim(): void;
}

abstract class Animal {
    name: string | undefined;
}

class Cat extends Animal implements IRun {
    run(): void {
        console.log("running...");
    }
}

class Fish extends Animal implements ISwim {
    swim(): void {
        console.log("swimming...");
    }
}

// //  以下代码会报错
// //  error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
// //  Property 'swim' does not exist on type 'Cat'.
//
// function swim1(animal: Cat | Fish) {
//     if (typeof animal.swim === 'function') {
//         return true;
//     }
//     return false;
// }

function swim2(animal: Cat | Fish) {
    // 特别注意：可以对任何目标进行 typeof 计算（因为如果标的不存在，typeof就返回 undefined）
    const _name = typeof (animal as Fish).swim;
    console.log(`swim的类型为${_name}`);

    if('swim' in animal){
        console.log("1.有swim属性！");
    }else{
        console.log("NN 1.没有swim属性！");
    }

    if (typeof (animal as Fish).swim === 'function') {
        console.log("2.有swim属性！");
    } else {
        console.log("NN 2.没有swim属性！");
    }

    if (typeof (animal as Fish)['swim'] === 'function') {
        return true;
    } else {
        return false;
    }
}

// 调用
let animal: Cat | Fish;
animal = new Cat();
console.log(swim2(animal));
console.log('─────────────────────────────────────');
animal = new Fish();
console.log(swim2(animal));



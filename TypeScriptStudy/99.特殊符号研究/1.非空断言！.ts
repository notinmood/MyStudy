/**
 * @file   : 1.非空断言！.ts
 * @time   : 7:42
 * @date   : 2022/4/21
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let myFunc = (maybeString: string | undefined | null) => {
    // 本句将一个有可能有 null 或者 undefined 的值赋给 string类型的常量，是无法编译通过的。
    // const onlyString: string = maybeString; // Error

    const ignoreUndefinedAndNull: string = maybeString!; // Ok

    if (maybeString!) {
        console.log("非空");
    } else {
        console.log("空");
    }

    console.log(ignoreUndefinedAndNull);
}

let myFunc2 = (onlyString?: string) => {
    const a: string = onlyString!;
}

myFunc('jerry');
console.log('─────────────────────────────────────');
myFunc(undefined);
console.log('══════════════════════════');
myFunc(null);

myFunc2(undefined);
// myFunc2(null);


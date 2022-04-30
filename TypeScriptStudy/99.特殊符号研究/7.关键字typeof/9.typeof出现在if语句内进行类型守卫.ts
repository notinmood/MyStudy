/**
 * @file   : 9.other.ts
 * @time   : 22:30
 * @date   : 2022/4/29
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */


let notSure: any = 'sisterAn';

// 类型守卫
if (typeof notSure === 'string') {
    console.log((notSure as string).toLowerCase());
}

// 或使用 instanceof 来缩小变量的类型
// TODO:xiedali@2022/4/30 这个 判定为什么不成立？
if (notSure instanceof String) {
    console.log(notSure.toLowerCase());
}else{
    console.log("NN- Not String");
}

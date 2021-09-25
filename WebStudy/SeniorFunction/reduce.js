/**
 * reduce 英文原意为减少;在此处的意思是,
 * 对数组中的各个元素分别进行操作,最后将结果"减少"到一个数值.
 */

let arr = [1, 2, 3, 4];
let r1 = arr.reduce((p, c, i, t) => {
    console.log(`第：${i}次循环时，上一次（或初始）的结果为：${p};当前值为:${c};对应数组为:${t}`);
    return p + c;
});
console.log(`最后的计算结果为:${r1}`)
console.log("————————————————")
let r2 = arr.reduce((p, c, i, t) => {
    console.log(`第：${i}次循环时，上一次（或初始）的结果为：${p};当前值为:${c};对应数组为:${t}`);
    return p + c;
}, 0)
console.log(`最后的计算结果为:${r2}`)

//output---------------------------
// 第：1次循环时，上一次（或初始）的结果为：1;当前值为:2;对应数组为:1,2,3,4
// 第：2次循环时，上一次（或初始）的结果为：3;当前值为:3;对应数组为:1,2,3,4
// 第：3次循环时，上一次（或初始）的结果为：6;当前值为:4;对应数组为:1,2,3,4
// 最后的计算结果为:10
// ————————————————
// 第：0次循环时，上一次（或初始）的结果为：0;当前值为:1;对应数组为:1,2,3,4
// 第：1次循环时，上一次（或初始）的结果为：1;当前值为:2;对应数组为:1,2,3,4
// 第：2次循环时，上一次（或初始）的结果为：3;当前值为:3;对应数组为:1,2,3,4
// 第：3次循环时，上一次（或初始）的结果为：6;当前值为:4;对应数组为:1,2,3,4
// 最后的计算结果为:10



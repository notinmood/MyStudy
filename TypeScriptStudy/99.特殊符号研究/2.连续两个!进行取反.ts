/**
 * @file   : 2.连续两个!进行取反.ts
 * @time   : 9:14
 * @date   : 2022/4/24
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

// +--------------------------------------------------------------------------
// |::说明·| 两个!，就是取反再取反，而得的正向的布尔结果：
// |::一一·|  其中第一个!，将本来的业务逻辑值，转变成布尔值 false；
// |::一一·|  第二个!,将false再转成 true
// +--------------------------------------------------------------------------


// 以下两个函数的输入和输出完全相同。

function isExistNormal(something: string) {
    if (something) {
        return true;
    } else {
        return false;
    }
}

function isExistEffective(something: string) {
    return !!something;
}

const temp_has = "value";
console.log(isExistNormal(temp_has));
console.log(isExistEffective(temp_has));

const temp_no = "";
console.log(isExistNormal(temp_no));
console.log(isExistEffective(temp_no));

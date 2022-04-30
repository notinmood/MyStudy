/**
 * @file   : 3.string和String.ts
 * @time   : 7:06
 * @date   : 2022/4/30
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */
//══1. 定义 string 和 String 类型的变量════════════════════════
//1.1 以下3种方式定义 string 的方式是一样的（其中第3中的 String 不带运算符 new）。
const data_s1 = 'hello';
const data_s2: string = 'world';
const data_s3: string = String('hello');

//1.2 以下2种是定义 String 的方式
const data_SS1 = new String('hello');
const data_SS2: String = new String('hello');

//══2. 以下演示 string 和 String 相互赋值的可能性════════════════════════
/**
 * 2.1 以下代码演示将 string 赋值给 String 是正常可行的：
 */
const data_SS3: String = data_s1;

/**
 * 2.2 以下代码演示将 String 赋值给 string 会出现错误：
 * TS2322: Type 'String' is not assignable to type 'string'.
 * 'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
 */
// const data_s4: string = data_SS1;

//══3. 以下演示 string 和 String 的类型判断方法════════════════════════
// 3.1
if (typeof data_s1 == "string") {
    console.log(`变量 data_s1 的类型是 string，值是 ${data_s1}.`);
}

// 3.2 String 类型的变量，不是 string 类型
if (typeof (data_SS1) == "string") {
    console.log(`变量 data_SS1 的类型是 string，值是 ${data_SS1}.`);
} else {
    console.log(`NN-变量 data_SS1 的类型不是 string，值是 ${data_SS1}.`);
}

// 3.3 String 类型的变量，是 String 类型的实例
/**
 * 使用 instanceof 判断前，需要把待检测变量转变为 any 类型。
 */
const data_SS5: any = data_SS1;
if (data_SS5 instanceof String) {
    console.log(`变量 data_SS1 的类型是 String，值是 ${data_SS5}.`);
}

// string 类型的变量，不是 类型 String 的实例
const data_s5: any = data_s1;
if (data_s5 instanceof String) {
    console.log(`变量 data_s1 的类型是 String，值是 ${data_s5}.`);
} else {
    console.log(`NN-变量 data_s1 的类型不是 String，值是 ${data_s5}.`);
}

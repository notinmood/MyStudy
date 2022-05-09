/**
 * @file   : index.js
 * @time   : 17:41
 * @date   : 2022/5/9
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

/**
 * undefined 其实更应该叫做未赋值：
 * 1. 只有定义后，还未赋值的变量才会显示这个结果。
 * 2. 而真正未定义的变量，会出现编译无法通过的错误。
 */


//0. 正常的使用方式：定义-赋值-使用
var myStr = "123";
console.log(myStr);//"123"

//1. 定义不赋值，然后使用
var myData;
console.log(myData);//undefined

//2. myNum 可以先使用，再定义和赋值。
console.log(myNum);//undefined 
var myNum = 123;

//3. 未定义的变量不能使用
// console.log(myBool);

/**
 * 上面第二题中，myNum 是先使用，然后才定义和赋值（var myNum = 123）的。
 * 但执行的时候显示为 undefined。这是因为，所有的变量被执行前，
 * 都会被JavaScript编译器先解析一次；然后再按照顺序执行。
 * （注意：第一步当代码被解析的时候，注意是解析，还没有执行。）
 * 
 * 1. 解析阶段
 *  会创建全局对象 GO-GlobalObject，然后所有声明的变量都挂接到 GO上，
 *  挂接的时候是没有赋值的变量，就是挂接一个值为 undefined 值的变量。
 * 2. 执行阶段
 *  执行阶段，才会将变量的值赋给变量。
 *  
 * 具体到本例，就是 
 * 1. 解析阶段将 var myNum = undefined；挂接到 GO 上。
 * 2. 执行 console.log(myNum);当然此时结果为 undefined
 * 3. 执行 var myNum = 123;为变量赋值。
 */
/**
 * 这是一个作用域链的研究：
 * 如果是一个类型实例调用变量的时候,首先查找本对象内是否有此成员;
 * 否则使用全局的变量.
 */

let x = 10;

function foo() {
    console.log(`变量的值为${x}`)
}

function moo(fn) {
    let x = 20;
    (function () {
        fn();
    })();
}

let m = moo(foo)
//--output---------
// 变量的值为10


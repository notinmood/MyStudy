/**
 * 在promise内部，只有resolve和reject的部分是异步执行的。其他地方的代码都是同步执行的。
 */

function myLogger(time) {
    return new Promise((resolve, reject) => {
        console.log('directly')
        setTimeout(function () {
            console.log(`我是${time}秒后执行的内容。`)
            resolve("nice to meet you!");
        }, time * 1000);
        // reject('bad')

    });
};

async function fun() {
    let a = await myLogger(3);
    console.log(`通过await修饰过的promise对象，得到到值是resolve方法传递过来的信息:${a}`);
};

foo = fun();
console.log("outer")

// ====================output==============================
// directly
// outer
// 我是3秒后执行的内容。
// 通过await修饰过的promise对象，得到到值是resolve方法传递过来的信息:nice to meet you!


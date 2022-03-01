function myLogger(time) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`我是${time}秒后执行的内容。`)
            resolve("nice to meet you!");
        }, time * 1000);
        // reject('bad')

    });
};

async function fun() {
    let aa = myLogger(3);
    console.log(aa);

    let a = await myLogger(3);
    console.log(`通过await修饰过的promise对象，得到到值是resolve方法传递过来的信息:${a}`);
};

foo = fun();

// ====================output==============================
// Promise { <pending> }
// 我是3秒后执行的内容。
// 我是3秒后执行的内容。
// 通过await修饰过的promise对象，得到到值是resolve方法传递过来的信息:nice to meet you!

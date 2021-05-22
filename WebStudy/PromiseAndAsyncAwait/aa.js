async function myLogger(time) {
    setTimeout(function () {
        console.log(`我是${time}秒后执行的内容。`)
        // console.log(time);
        return 1;
    }, time * 1000)
    return "nice to meet you!";
};

async function fun() {
    let aa = myLogger(3);
    console.log(aa);

    let a = await myLogger(3);
    console.log(a);

    // let b = await myLogger(3000);
    // let c = myLogger(2000);
    // console.log(a);
    // console.log(1)
};

fun();
// 立即输出 undefined 1
// 1秒后输出 1000
// 2秒后输出 2000
// 3秒后输出 3000

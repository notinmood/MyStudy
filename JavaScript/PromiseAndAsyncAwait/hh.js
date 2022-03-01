function mylog(time) {
    console.log('directly')
    setTimeout(function () {
        console.log(time);
        return 1;
    }, time)
}

async function fun() {
    let a = await mylog(1000);
    let b = await mylog(3000);
    let c = mylog(2000);
    console.log(a, b, c);
    console.log(1)
}

fun();
// 立即输出 undefined 1
// 1秒后输出 1000
// 2秒后输出 2000
// 3秒后输出 3000

function myLogger(time) {
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

    let bb = await myLogger(3);
    console.log(bb);

};

foo = fun();

// --------立即输出
// nice to meet you!
// nice to meet you!
// --------异步输出
// 我是3秒后执行的内容。
// 我是3秒后执行的内容。

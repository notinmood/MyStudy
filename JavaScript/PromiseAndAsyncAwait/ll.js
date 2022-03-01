// 如果await 后面并不是一个Promise的返回值，则会按照同步程序返回值处理
const bbb = function () {
    console.log('inner func');
    return '我是func的返回值'
}

async function funAsy() {
    console.log('before await 1 ')
    const a = await 1
    console.log(a)
    console.log('after await 1')

    console.log('before func')
    const c = await bbb()
    console.log('after func')
    console.log(c)
}

funAsy()
// ------output---------
// before await 1
// 1
// after await 1
// before func
// inner func
// after func
// 我是func的返回值
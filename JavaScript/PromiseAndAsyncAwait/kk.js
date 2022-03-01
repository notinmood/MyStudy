// 1.定义一个或多个普通函数，函数必须返回Promise对象，如果返回其他类型的数据，将按照普通同步程序处理；
//调用这个promise的时候，也必须用await调用，否则也会同步执行

function log(time) {
    return new Promise((resolve, reject)=> {
        setTimeout(function(){
            console.log(time)
            resolve()
        }, time)
    })
}

async function fun() {
    await log(5000)
    await log(10000)
    log(1000) //本行不会被等待，系统调用完本行后不等返回值，就直接执行下一行语句了。
    console.log(1)
}

fun()

// ----output为-----------
// 5000 （5秒之后出现的结果）
// 10000（又10秒之后出现的结果）
// 1 （出现完10000之后，马上出现的结果）
// 1000 （又大概一秒钟后出现的结果）

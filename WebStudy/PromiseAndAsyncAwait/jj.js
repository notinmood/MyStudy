// 3. async / await的重要应用

const asy = function(x, time) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(x)
        }, time)
    })
}

/**
 * await 如果后面是promise对象，那么程序会停下来等待promise的resolve执行结果，只有得到执行结果了，程序才能继续往下执行
 * @returns {Promise<void>}
 */
const add = async function() {
    const a = await asy(3, 5000)
    console.log(a)
    const b = await asy(4, 10000)
    console.log(b)
    const c =  await asy(5, 15000)
    console.log(c)
    console.log(a,b,c)
    const d = a + b +c
    console.log(d)
}

add();

// 5秒后输出3  又10秒后输出4 又15秒后输出5  然后立刻输出3,4,5，然后输出12
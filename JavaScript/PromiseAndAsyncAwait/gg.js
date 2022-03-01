function func_common(something) {
    console.log("我是一个普通函数");
    return "我是普通函数的返回值";
}

function func_delay(seconds) {
    setTimeout(() => {
        console.log("我是一个延时函数");
        return "我是延时函数的返回值";
    }, seconds * 1000);
}

function func_delay_return(seconds, callback) {
    setTimeout(() => {
        console.log("我是一个延时函数");
        let result = "我是延时函数的返回值";
        callback && callback(result);
    }, seconds * 1000);
}

async function prom_common(something) {
    console.log("我是一个普通的promise");
    return "我是一个普通promise的返回值"
}

async function prom_common_reject(something) {
    console.log("我是一个普通的promise,我会返回reject信息");
    throw ("我是一个普通promise返回的reject信息");
}

// let prom_instance = new Promise((resolve, reject)=>{
//     console.log("我是在promise内同步执行的信息");
//     let rand = Math.random();
//     if(rand>0.5){
//         resolve("ok:"+rand);
//     }else{
//         reject("bad:"+rand);
//     }
// })

/**
 * 在函数内部返回promise实例
 * @returns {Promise<any>}
 */
function inner_prom() {
    return new Promise((resolve, reject) => {
        console.log("我是在promise内同步执行的信息");
        let rand = Math.random();
        if (rand > 0.5) {
            resolve("ok:" + rand);
        } else {
            reject("bad:" + rand);
        }
    });
}

/**
 * 验证结果的时候，请分别取消到以下各个段略的注释
 */
async function client() {
    // /**
    //  * 调用一个普通函数，能得到他的返回值
    //  * @type {string}
    //  */
    // let fc= func_common('aa');
    // console.log(fc);

    // /**
    //  * 如果在setTimeout内return一个数值，我们是无法获取到的。
    //  */
    // let fd= func_delay(3);
    // console.log(fd);

    // /**
    //  * 通过这种在setTimeout内，呼叫回调函数的方式，间接得到返回值
    //  */
    // let fdr = func_delay_return(3,(result)=>{
    //     console.log(`通过这种在setTimeout内，呼叫回调函数的方式，间接得到返回值，其值为--${result}`)
    // });

    // /**
    //  * 如果直接调用async修饰的函数，返回值为promise实例
    //  * @type {Promise<string>}
    //  */
    // let pc = prom_common('aa');
    // console.log(pc)
    //
    // /**
    //  * 如果用await promise实例，这样返回值为 promise实例里面 return的信息（这个信息实际上是通过resolve（value），传递出来的value）
    //  * @type {string}
    //  */
    // let pc_value = await prom_common('aa');
    // console.log(pc_value);


    // /**
    //  * 通过async修饰，得到的promise，正常执行resolve动作，那么await可以得到resolve的返回值。
    //  * 如果是抛出异常（或者通过其他方式执行了reject动作），那么在 await project后面，".catch((reason)=>{do something})"
    //  */
    // let pcr = await prom_common_reject('hi,input to pcr').catch(reason => {
    //     console.log(reason);
    // });
    //
    // console.log(`pcr 正常情况下返回的信息为${pcr}`)

    // /**
    //  *(需要对上面let prom_instance = new Promise((resolve, reject)=>{这一段整段的代码注释取掉)
    //  * 以下是执行的结果
    //  我是在promise内同步执行的信息
    //  Promise { 'ok:0.5923733656280235' }
    //  */
    // let pi = prom_instance;
    // console.log(pi);


    // /**
    //  *(需要对上面let prom_instance = new Promise((resolve, reject)=>{这一段整段的代码注释取掉)
    //  * output分为两种，执行resolve逻辑和执行reject逻辑
    //  * 1、执行了reject逻辑 （这个时候用await是得不到值的，因为await等待的时候resolve的结果，但这里没有执行resolve；
    //  * 这里通过catch捕获的方式，将定义在catch内部的自定义函数，传递给了reject，供其调用）
    //  我是在promise内同步执行的信息
    //  bad:0.0273300128246472
    //  undefined
    //
    //  * 2、执行了resolve逻辑（await就等到了promise通过resolve传递过来的返回值；后面的catch逻辑没有被执行）
    //  我是在promise内同步执行的信息
    //  ok:0.7208256687420815
    //  */
    // let pi_v = await prom_instance.catch(reason => console.log(reason));
    // console.log(pi_v)

    /**
     * output分为两种，执行resolve逻辑和执行reject逻辑
     * 1、执行了reject逻辑 （这个时候用await是得不到值的，因为await等待的时候resolve的结果，但这里没有执行resolve；
     * 这里通过catch捕获的方式，将定义在catch内部的自定义函数，传递给了reject，供其调用）
     我是在promise内同步执行的信息
     bad:0.0273300128246472
     undefined

     * 2、执行了resolve逻辑（await就等到了promise通过resolve传递过来的返回值；后面的catch逻辑没有被执行）
     我是在promise内同步执行的信息
     ok:0.7208256687420815
     */
    let ip_v = await inner_prom().catch(reason => console.log(reason));
    console.log(ip_v)
}

let c = client();

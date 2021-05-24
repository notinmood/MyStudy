//1、多重回调模式
function longTime(second, cb) {
    setTimeout(() => {
        console.log(`A我是${second}的内容`)
        cb(second);
    }, second * 1000)
}


function multi(second) {
    longTime(second, (second) => {
        second = second + 2;
        longTime(second, (second) => {
            second = second + 2;
            longTime(second, (second) => {
                second = second + 2;
            })
        })
    })
}

let m = multi(2);


function get_promise(second){
    let promise= new Promise(resolve => {
        setTimeout(()=>resolve(second),second *1000);
    });
    return promise;
}

function step(second){
    console.log(`B我是${second}的内容`);
    return get_promise(second +2)
}

//2、promise模式

function using_promise(second){
    let s= step(second)
        .then((second)=>step(second))
        .then((second)=>step(second))
        .then((second)=>step(second))
}

let up= using_promise(2);

//3、使用async和await的模式
async function using_async_await(second){
    console.time("执行耗时")
    let r1= await step(second);
    let r2= await step(r1);
    let r3= await step(r2);
    console.timeEnd("执行耗时")
}

let uaa= using_async_await(2);

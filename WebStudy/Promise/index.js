
let promise = new Promise(function(resolve, reject){
    let rand = Math.random();
    console.log("随机数是"+rand);
    if (rand > 0.5)
    {
        resolve("ok-"+rand);
    }else{
        reject("bad-"+rand);
    }
});

promise.then(function(success_info){
    console.log("YYY我是系统resolve函数调用的自定义函数");
    console.log("YYY我接收到传递进来的参数为"+ success_info)
},function (failure_info){
    console.log("NNN我是系统reject函数调用的自定义函数");
    console.log("NNN我接收到传递进来的参数为"+ failure_info)
});

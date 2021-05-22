function fun1(){
    console.log('func1内部信息');
    return new Promise(function(resolve,reject){
        resolve('func1返回信息')
    })
}

myfunc= fun1();
console.log(myfunc)
myfunc.then(val => {
    console.log(val);
})


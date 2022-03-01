// async基础语法
// 用async修饰的function，会自动包装成一个promise实例
async function fun0(){
    console.log("fun0内部的信息");
    return "fun0返回的信息";
}

//1、如果只是func0()。则output仅仅显示为"fun0内部的信息"，不会显示return出来的"fun0返回的信息"。
// -------output-------------
// fun0内部的信息
// Promise { 'fun0返回的信息' }

let ff= fun0();
console.log(ff)

console.log("======================")
//2、这样的output为(既会执行fun0内部函数，也会通过then执行到fun0的返回信息)
// fun0内部的信息 (这一行是函数内部执行的)
// fun0返回的信息 (这一行是promise返回的)
//
fun0().then(val=>{
    console.log(val)
})



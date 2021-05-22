//async修饰的方法，实际返回的信息不是return的值，而是Promise对象
//更精确的说，返回的是Promise.resolve(value),
// 其中参数value是方法内部return的信息，本例中value为“hello world！”
async function AA() {
    return "hello world!"
}

let aa = AA();
console.log(aa);
aa.then(result => console.log(result));

let pp = new Promise((resolve, reject) => {
    // resolve('ok');
    reject('bad');
});
pp.catch(error=>console.log(error));
console.log(pp)

//以上代码输出的结果如下：（其中本来在代码段的最后显示pp对象信息
// 但是，实际结果是第二个内容显示出来的（Promise { <rejected> 'bad' }），
// 而aa.then,pp.catch内的方法本来在显示p之前，但都显示在pp后面了。
// 这也表达出了then，catch都是异步方法。（在js中，同步方法都执行完了，才会执行异步方法））
// Promise { 'hello world!' }
// Promise { <rejected> 'bad' }
//     hello world!
//     bad

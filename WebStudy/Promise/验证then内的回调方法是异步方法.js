
let promise = new Promise(function(resolve, reject) {
    console.log('before resolved');
    resolve();
    console.log('after resolved');
});

promise.then(function() {
    console.log('resolved');
});

console.log('outer');

// 以上代码执行的结果如下
// before resolved
// after resolved
// outer
// resolved

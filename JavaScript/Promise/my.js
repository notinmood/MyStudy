var promise = new Promise(function (resolve, reject) {
    var i = Math.random();
    if (i < 0.5) {
        resolve("ok" + i);
    }
    else {
        reject("bad" + i);
    }
});
promise.then(function (value) {
    console.log(value);
}, function (err) {
    console.log(err);
});
//# sourceMappingURL=my.js.map
let promise = new Promise((resolve, reject) => {
    let i = Math.random();
    if (i < 0.5) {
        resolve("ok" + i);
    }
    else {
        reject("bad" + i);
    }
});
promise.then(value => {
    console.log(value);
}, err => {
    console.log(err);
});
//# sourceMappingURL=my.js.map
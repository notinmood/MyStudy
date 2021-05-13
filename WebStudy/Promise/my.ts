let promise = new Promise<string>((resolve, reject) => {
    let i = 12;
    if (i < 10) {
        resolve("ok");
    } else {
        reject("bad");
    }
});

promise.then(value => {
        console.log(value)
    },
    err => {
        console.log(err)
    });
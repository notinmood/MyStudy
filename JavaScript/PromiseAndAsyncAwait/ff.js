function getSomething() {
    setTimeout(()=>{return "something!"},2*1000);
    return "something";
}

function testAsync(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve("async value")
            }, seconds * 1000
        )
    })
}

async function test() {
    const v1 = await getSomething();
    console.log(v1);

    const seconds = 3;
    const v2 = await testAsync(seconds);
    console.log(`${seconds}s后得到结果是${v2}`);
}

test();
console.log("我是在async/await外部的逻辑");
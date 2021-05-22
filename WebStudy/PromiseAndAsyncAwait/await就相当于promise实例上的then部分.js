async function takeLongTime() {
    setTimeout(() => {console.log("in timeout"); return "long_time_value"}, 5000);
    return "ok"
}

async function test() {
    const u= takeLongTime();
    console.log(u);
    const v = await takeLongTime();
    console.log(v);
}

test();
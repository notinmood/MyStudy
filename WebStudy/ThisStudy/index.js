function Counter() {
    this.num = 0;
    console.log(this)
    console.log("===============")

    setTimeout(function add() {
        console.log(this);
    }, 1000);
    console.log("---------------")
    this.timer = setInterval(function add() {
        console.log(this);
    }, 1000);
}

let b = new Counter();
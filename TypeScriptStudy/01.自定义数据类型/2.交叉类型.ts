// +--------------------------------------------------------------------------
// |::说明·| 使用 & 定义数据类型
// +--------------------------------------------------------------------------
type typeWW = IFly & ITalk;
let some: typeWW;

some = {
    fly() {
        console.log("我会飞！");
    },
    talk() {
        console.log("我会说话！");
    },
}

some.fly();
some.talk();




type typeBB = Human & Bird;
let myName: typeBB;

let human = new Human();
let bird = new Bird();
let result = combine(human, bird);
myName = result;

myName.display();
myName.fly();
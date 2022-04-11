"use strict";
var some;
some = {
    fly: function () {
        console.log("我会飞！");
    },
    talk: function () {
        console.log("我会说话！");
    },
};
some.fly();
some.talk();
var myName;
var human = new Human();
var bird = new Bird();
var result = combine(human, bird);
myName = result;
myName.display();
myName.fly();

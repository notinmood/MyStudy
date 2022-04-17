"use strict";
class People {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    display() {
        return `我是${this.name} ,我年龄为${this.age}`;
    }
    changeName(name) {
        this.name = name;
    }
}
//# sourceMappingURL=People.js.map
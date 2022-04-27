class People {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    display(): string {
        return `我是${this.name} ,我年龄为${this.age}`;
    }

    changeName(name: string) {
        this.name = name;
    }
}
class Person {
    private name: string;
    private age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setName(name){
        this.name= name;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    setAge(age){
        this.age= age;
    }
}

let p= new Person("zhangsan",20);
console.log(p.getName());
console.log(p.getAge());

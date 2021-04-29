/**
 * 通过 {}的方式直接生成对象实例
 * @type {{setName: p.setName, getName: (function(): string), name: string, age: number}}
 */

let p =  {
    'name':'zhangsan',
    'age':20,
    'getName':function (){
        return this.name;
    },
    'setName':function (name){
        this.name= name;
    }
}
console.log(p.name);
console.log(p.age);
console.log(p.getName())




/**
 * @file   : 901.js
 * @time   : 7:51
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function Foo() {
    console.log("直接输出:",this);
    setTimeout(() => {
        console.log('setTimeout 嵌套箭头函数的使用:', this);//42
    }, 100);

    this.say= function (){
        console.log("成员方法：",this);
    }

    console.log("直接输出:",this);
}

const foo= new Foo();
foo.say();
















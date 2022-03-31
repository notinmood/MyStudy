/**
 * @file   : 字面量与作用域.js
 * @time   : 10:47
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

let myData = "qingdao";

class MyWorker {
    show() {
        console.log(myData);
        console.log(this);
    }
}

let worker = new MyWorker();
worker.show();

let student = {
    show:function (){
        console.log(this);
    },
    displayArrow :()=>{
        console.log(this);
    },
};

student.show();
student.displayArrow();



/**
 * @file   : 900.js
 * @time   : 7:42
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

function foo() {
    console.log("普通函数中,id:",this.id);//42
    setTimeout(() => {
        console.log('普通函数中的通过 setTimeout 嵌套箭头函数的使用，id:', this.id);//42
    }, 100);
}

const id = 21;

foo.call({ id: 42 });

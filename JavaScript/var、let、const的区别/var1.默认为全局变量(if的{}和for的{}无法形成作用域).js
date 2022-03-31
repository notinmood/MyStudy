/**
 * @file   : ss.js
 * @time   : 10:21
 * @date   : 2022/3/31
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
 */

console.log("1. 以下是在 if 内使用 var 关键字定义变量，其可以在if语句外访问");
if (1 > 1) {
    /**
     * 以下两种方式均可。是否使用 var 都一样，默认都是创建全局的变量
     */
        //myData= "Great Than";
    var myData = "Great Than";
} else {
    var myData = "Not Great Than";
}

//以下代码演示：在if的{}外，是可以访问到if语句内定义的变量的。
console.log(myData);


console.log("2. 以下是在 for 内使用 var 关键字定义变量,可以在 for 外访问");
for (var i = 0; i < 10; i++) {
    var m = i;
}
console.log(i);//10。 这是循环完成后，i最后的值10。
console.log(m); //9。

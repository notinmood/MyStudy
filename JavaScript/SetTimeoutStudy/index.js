/**
 * 如果setTimeout要执行的函数需要参数，那么有2种方式（第二第三种其实是一种方式）
 * 1、setTimeout 的第一个参数写被调用函数的名称，第二个参数写延时时间（毫秒单位），后面的（包括第三个参数在内）的参数依次为 第一个参数对应的那个函数的参数
 * 针对 setTimeout(foo,0,"hello","China");来说，setTimeout第三第四个参数"hello","China"，为原函数foo的参数
 * 2、将被执行的函数（foo），包装到另外一个函数（姑且称为M）（这个用匿名函数，或者箭头函数表示）的函数体内，在M内调用foo，这个时候就可以直接给foo传递参数了
 */

function foo(arg1,arg2){
    console.log(arg1,arg2);
}

setTimeout(foo,0,"hello","China");
setTimeout(()=>foo(5,6),0)
setTimeout(function (){foo(8,9)},0)